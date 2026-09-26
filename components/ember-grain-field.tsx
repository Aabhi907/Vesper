"use client";

import React, { useEffect, useRef, type ReactNode } from "react";

type RGB = [number, number, number];

export interface EmberGrainFieldProps {
  children?: ReactNode;
  className?: string;
  background?: string;
  glow?: RGB;
  cursor?: string;
  grain?: number;
}

const TRIANGLE_VERTEX = `#version 300 es
in vec2 aPosition;
out vec2 uv;
void main(){uv=aPosition*.5+.5;gl_Position=vec4(aPosition,0.,1.);}`;

const FIELD_FRAGMENT = `#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D previousFrame;
uniform vec2 pixelStep;
uniform float ratio;
uniform vec2 pointer;
uniform vec2 previousPointer;
uniform vec2 pointerSpeed;
uniform float pointerActive;

float lineDistance(vec2 p,vec2 a,vec2 b){
  vec2 d=b-a;
  float t=clamp(dot(p-a,d)/max(dot(d,d),.000001),0.,1.);
  return length(p-(a+d*t));
}

vec4 softened(vec2 p){
  vec4 c=texture(previousFrame,p);
  vec4 n=texture(previousFrame,p+vec2(pixelStep.x,0.))
        +texture(previousFrame,p-vec2(pixelStep.x,0.))
        +texture(previousFrame,p+vec2(0.,pixelStep.y))
        +texture(previousFrame,p-vec2(0.,pixelStep.y));
  return mix(c,n*.25,.45);
}

void main(){
  vec2 oldVelocity=(texture(previousFrame,uv).rg-.5)*2.;
  vec4 state=softened(uv-oldVelocity*pixelStep*5.);
  vec2 velocity=(state.rg-.5)*1.97;
  float energy=state.b*.965;

  if(pointerActive>.5){
    vec2 p=vec2(uv.x*ratio,uv.y);
    vec2 a=vec2(previousPointer.x*ratio,previousPointer.y);
    vec2 b=vec2(pointer.x*ratio,pointer.y);
    float d=lineDistance(p,a,b);
    float brush=exp(-(d*d)/.0035);
    velocity+=pointerSpeed*brush*14.;
    energy+=brush*min(length(pointerSpeed)*30.,1.1);
  }

  outColor=vec4(clamp(velocity,-1.,1.)*.5+.5,clamp(energy,0.,1.6),1.);
}`;

const DISPLAY_FRAGMENT = `#version 300 es
precision highp float;
in vec2 uv;
out vec4 outColor;
uniform sampler2D field;
uniform vec2 viewport;
uniform float elapsed;
uniform float grainFrame;
uniform float grainAmount;
uniform vec3 darkColor;
uniform vec3 hotColor;

float random2(vec2 p){
  p=fract(p*vec2(123.34,456.21));
  p+=dot(p,p+45.32);
  return fract(p.x*p.y);
}

float smoothNoise(vec2 p){
  vec2 cell=floor(p),f=fract(p),s=f*f*(3.-2.*f);
  float a=random2(cell),b=random2(cell+vec2(1.,0.));
  float c=random2(cell+vec2(0.,1.)),d=random2(cell+1.);
  return mix(mix(a,b,s.x),mix(c,d,s.x),s.y);
}

float cloud(vec2 p){
  float sum=0.,amp=.5;
  for(int i=0;i<3;i++){sum+=smoothNoise(p)*amp;p=p*2.1+17.;amp*=.5;}
  return sum;
}

vec3 overlayBlend(vec3 a,vec3 b){
  return mix(2.*a*b,1.-2.*(1.-a)*(1.-b),step(.5,b));
}

void main(){
  float heat=texture(field,uv).b;
  vec2 p=uv*vec2(viewport.x/viewport.y,1.);
  vec3 color=darkColor*(.72+cloud(p*1.4+elapsed*.012)*.62);
  color+=hotColor*heat*1.4;

  vec2 grainUv=uv*viewport;
  vec3 noise=vec3(
    random2(grainUv+grainFrame+1.),
    random2(grainUv+grainFrame+2.),
    random2(grainUv+grainFrame+3.)
  );

  color=mix(color,overlayBlend(noise,color),grainAmount);
  outColor=vec4(color,1.);
}`;

const readHex = (value: string): RGB => {
  let hex = value.replace("#", "");
  if (hex.length === 3) hex = [...hex].map((c) => c + c).join("");
  const number = Number.parseInt(hex, 16);
  if (Number.isNaN(number)) return [9, 7, 3];
  return [(number >> 16) & 255, (number >> 8) & 255, number & 255];
};

function buildProgram(
  gl: WebGL2RenderingContext,
  fragmentSource: string,
): WebGLProgram | null {
  const makeShader = (type: number, source: string) => {
    const shader = gl.createShader(type);
    if (!shader) return null;
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error(gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  };

  const vertex = makeShader(gl.VERTEX_SHADER, TRIANGLE_VERTEX);
  const fragment = makeShader(gl.FRAGMENT_SHADER, fragmentSource);
  if (!vertex || !fragment) return null;

  const program = gl.createProgram();
  if (!program) return null;
  gl.attachShader(program, vertex);
  gl.attachShader(program, fragment);
  gl.linkProgram(program);
  gl.deleteShader(vertex);
  gl.deleteShader(fragment);

  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    console.error(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

export function EmberGrainField({
  children,
  className = "",
  background = "#080b11",
  glow = [152, 99, 0],
  cursor = "#c8b89a",
  grain = 0.28,
}: EmberGrainFieldProps) {
  const hostRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const settingsRef = useRef({ background, glow, grain });
  settingsRef.current = { background, glow, grain };

  useEffect(() => {
    const host = hostRef.current;
    const canvas = canvasRef.current;
    const follower = cursorRef.current;
    if (!host || !canvas) return;

    const gl = canvas.getContext("webgl2", {
      alpha: false,
      antialias: false,
      depth: false,
    });
    if (!gl) return;

    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touchOnly = matchMedia("(hover: none)").matches;
    const floatTarget = Boolean(gl.getExtension("EXT_color_buffer_float"));
    if (floatTarget) gl.getExtension("OES_texture_float_linear");

    const fieldProgram = buildProgram(gl, FIELD_FRAGMENT);
    const displayProgram = buildProgram(gl, DISPLAY_FRAGMENT);
    if (!fieldProgram || !displayProgram) return;

    const triangle = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, triangle);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );

    const useTriangle = (program: WebGLProgram) => {
      const location = gl.getAttribLocation(program, "aPosition");
      gl.bindBuffer(gl.ARRAY_BUFFER, triangle);
      gl.enableVertexAttribArray(location);
      gl.vertexAttribPointer(location, 2, gl.FLOAT, false, 0, 0);
    };

    const fieldUniform = {
      previousFrame: gl.getUniformLocation(fieldProgram, "previousFrame"),
      pixelStep: gl.getUniformLocation(fieldProgram, "pixelStep"),
      ratio: gl.getUniformLocation(fieldProgram, "ratio"),
      pointer: gl.getUniformLocation(fieldProgram, "pointer"),
      previousPointer: gl.getUniformLocation(fieldProgram, "previousPointer"),
      pointerSpeed: gl.getUniformLocation(fieldProgram, "pointerSpeed"),
      pointerActive: gl.getUniformLocation(fieldProgram, "pointerActive"),
    };

    const displayUniform = {
      field: gl.getUniformLocation(displayProgram, "field"),
      viewport: gl.getUniformLocation(displayProgram, "viewport"),
      elapsed: gl.getUniformLocation(displayProgram, "elapsed"),
      grainFrame: gl.getUniformLocation(displayProgram, "grainFrame"),
      grainAmount: gl.getUniformLocation(displayProgram, "grainAmount"),
      darkColor: gl.getUniformLocation(displayProgram, "darkColor"),
      hotColor: gl.getUniformLocation(displayProgram, "hotColor"),
    };

    type Target = { framebuffer: WebGLFramebuffer; texture: WebGLTexture };
    let cssWidth = 1;
    let cssHeight = 1;
    let fieldWidth = 8;
    let fieldHeight = 8;
    let targets: Target[] = [];

    const createTarget = (): Target | null => {
      const texture = gl.createTexture();
      const framebuffer = gl.createFramebuffer();
      if (!texture || !framebuffer) return null;

      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.texImage2D(
        gl.TEXTURE_2D,
        0,
        floatTarget ? gl.RGBA16F : gl.RGBA8,
        fieldWidth,
        fieldHeight,
        0,
        gl.RGBA,
        floatTarget ? gl.HALF_FLOAT : gl.UNSIGNED_BYTE,
        null,
      );

      gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
      gl.framebufferTexture2D(
        gl.FRAMEBUFFER,
        gl.COLOR_ATTACHMENT0,
        gl.TEXTURE_2D,
        texture,
        0,
      );
      gl.clearColor(0.5, 0.5, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT);
      return { framebuffer, texture };
    };

    const disposeTargets = () => {
      targets.forEach(({ framebuffer, texture }) => {
        gl.deleteFramebuffer(framebuffer);
        gl.deleteTexture(texture);
      });
      targets = [];
    };

    const resize = () => {
      const box = host.getBoundingClientRect();
      cssWidth = Math.max(1, box.width);
      cssHeight = Math.max(1, box.height);
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(cssWidth * dpr);
      canvas.height = Math.round(cssHeight * dpr);
      fieldWidth = Math.max(8, Math.round(cssWidth * 0.25));
      fieldHeight = Math.max(8, Math.round(cssHeight * 0.25));
      disposeTargets();
      const first = createTarget();
      const second = createTarget();
      if (first && second) targets = [first, second];
    };

    resize();
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(host);

    let pointerInside = false;
    let targetX = cssWidth / 2;
    let targetY = cssHeight / 2;
    let cursorX = targetX;
    let cursorY = targetY;
    let pointerX = 0.5;
    let pointerY = 0.5;
    let oldPointerX = 0.5;
    let oldPointerY = 0.5;

    const movePointer = (event: PointerEvent) => {
      const box = host.getBoundingClientRect();
      targetX = event.clientX - box.left;
      targetY = event.clientY - box.top;
      if (!pointerInside) {
        pointerX = oldPointerX = targetX / cssWidth;
        pointerY = oldPointerY = 1 - targetY / cssHeight;
      }
      pointerInside = true;
    };

    const leavePointer = () => {
      pointerInside = false;
      if (follower) follower.classList.remove("egf-active");
    };

    window.addEventListener("pointermove", movePointer, { passive: true });
    host.addEventListener("pointerleave", leavePointer);

    let animation = 0;
    let source = 0;
    let frameNumber = 0;
    const started = performance.now();

    const render = () => {
      animation = requestAnimationFrame(render);
      if (targets.length !== 2) return;
      frameNumber += 1;

      if (follower) {
        cursorX += (targetX - cursorX) * 0.85;
        cursorY += (targetY - cursorY) * 0.85;
        follower.style.transform = `translate3d(${cursorX}px,${cursorY}px,0) translate(-50%,-50%)`;
        follower.style.opacity = pointerInside && !touchOnly ? "1" : "0";
      }

      oldPointerX = pointerX;
      oldPointerY = pointerY;
      pointerX += (targetX / cssWidth - pointerX) * 0.35;
      pointerY += (1 - targetY / cssHeight - pointerY) * 0.35;

      if (!reduceMotion) {
        const read = targets[source];
        const write = targets[1 - source];
        gl.useProgram(fieldProgram);
        useTriangle(fieldProgram);
        gl.bindFramebuffer(gl.FRAMEBUFFER, write.framebuffer);
        gl.viewport(0, 0, fieldWidth, fieldHeight);
        gl.activeTexture(gl.TEXTURE0);
        gl.bindTexture(gl.TEXTURE_2D, read.texture);
        gl.uniform1i(fieldUniform.previousFrame, 0);
        gl.uniform2f(fieldUniform.pixelStep, 1 / fieldWidth, 1 / fieldHeight);
        gl.uniform1f(fieldUniform.ratio, cssWidth / cssHeight);
        gl.uniform2f(fieldUniform.pointer, pointerX, pointerY);
        gl.uniform2f(fieldUniform.previousPointer, oldPointerX, oldPointerY);
        gl.uniform2f(
          fieldUniform.pointerSpeed,
          (pointerX - oldPointerX) * (cssWidth / cssHeight),
          pointerY - oldPointerY,
        );
        gl.uniform1f(fieldUniform.pointerActive, pointerInside ? 1 : 0);
        gl.drawArrays(gl.TRIANGLES, 0, 3);
        source = 1 - source;
      }

      const settings = settingsRef.current;
      const base = readHex(settings.background);
      gl.useProgram(displayProgram);
      useTriangle(displayProgram);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
      gl.viewport(0, 0, canvas.width, canvas.height);
      gl.activeTexture(gl.TEXTURE0);
      gl.bindTexture(gl.TEXTURE_2D, targets[source].texture);
      gl.uniform1i(displayUniform.field, 0);
      gl.uniform2f(displayUniform.viewport, canvas.width, canvas.height);
      gl.uniform1f(
        displayUniform.elapsed,
        reduceMotion ? 0 : (performance.now() - started) / 1000,
      );
      gl.uniform1f(
        displayUniform.grainFrame,
        reduceMotion ? 0 : Math.floor(frameNumber / 2) % 512,
      );
      gl.uniform1f(displayUniform.grainAmount, settings.grain);
      gl.uniform3f(
        displayUniform.darkColor,
        base[0] / 255,
        base[1] / 255,
        base[2] / 255,
      );
      gl.uniform3f(
        displayUniform.hotColor,
        settings.glow[0] / 255,
        settings.glow[1] / 255,
        settings.glow[2] / 255,
      );
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };

    animation = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animation);
      resizeObserver.disconnect();
      window.removeEventListener("pointermove", movePointer);
      host.removeEventListener("pointerleave", leavePointer);
      disposeTargets();
      gl.deleteBuffer(triangle);
      gl.deleteProgram(fieldProgram);
      gl.deleteProgram(displayProgram);
    };
  }, []);

  return (
    <div
      ref={hostRef}
      className={`egf-root relative w-full h-full overflow-hidden isolate ${className}`.trim()}
    >
      <canvas
        ref={canvasRef}
        className="egf-canvas absolute inset-0 w-full h-full pointer-events-none"
        aria-hidden="true"
      />
      {children && <div className="egf-content relative z-10 w-full h-full">{children}</div>}
    </div>
  );
}

export default EmberGrainField;
