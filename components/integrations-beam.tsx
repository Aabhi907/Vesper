"use client";

import React, {
  forwardRef,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import type { ReactNode, RefObject } from "react";
import { motion } from "framer-motion";

interface AnimatedBeamProps {
  containerRef: RefObject<HTMLDivElement | null>;
  fromRef: RefObject<HTMLDivElement | null>;
  toRef: RefObject<HTMLDivElement | null>;
  curvature?: number;
  reverse?: boolean;
  pathColor?: string;
  pathWidth?: number;
  pathOpacity?: number;
  gradientStartColor?: string;
  gradientStopColor?: string;
  delay?: number;
  duration?: number;
  startXOffset?: number;
  startYOffset?: number;
  endXOffset?: number;
  endYOffset?: number;
}

function AnimatedBeam({
  containerRef,
  fromRef,
  toRef,
  curvature = 0,
  reverse = false,
  duration = 4.5,
  delay = 0,
  pathColor = "rgba(0,0,0,0.08)",
  pathWidth = 2,
  pathOpacity = 1,
  gradientStartColor = "#3472ff",
  gradientStopColor = "#a855f7",
  startXOffset = 0,
  startYOffset = 0,
  endXOffset = 0,
  endYOffset = 0,
}: AnimatedBeamProps) {
  const rawId = useId();
  const gradientId = rawId.replace(/:/g, "");

  const [path, setPath] = useState("");
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  });

  useEffect(() => {
    const updatePath = () => {
      const container = containerRef.current;
      const from = fromRef.current;
      const to = toRef.current;

      if (!container || !from || !to) return;

      const containerRect = container.getBoundingClientRect();
      const fromRect = from.getBoundingClientRect();
      const toRect = to.getBoundingClientRect();

      const width = containerRect.width;
      const height = containerRect.height;

      const startX =
        fromRect.left -
        containerRect.left +
        fromRect.width / 2 +
        startXOffset;

      const startY =
        fromRect.top -
        containerRect.top +
        fromRect.height / 2 +
        startYOffset;

      const endX =
        toRect.left -
        containerRect.left +
        toRect.width / 2 +
        endXOffset;

      const endY =
        toRect.top -
        containerRect.top +
        toRect.height / 2 +
        endYOffset;

      const controlX = (startX + endX) / 2;
      const controlY = startY - curvature;

      setDimensions({ width, height });

      setPath(
        `M ${startX},${startY} Q ${controlX},${controlY} ${endX},${endY}`,
      );
    };

    const observer = new ResizeObserver(updatePath);

    const elements = [
      containerRef.current,
      fromRef.current,
      toRef.current,
    ];

    elements.forEach((element) => {
      if (element) observer.observe(element);
    });

    updatePath();
    window.addEventListener("resize", updatePath);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updatePath);
    };
  }, [
    containerRef,
    fromRef,
    toRef,
    curvature,
    startXOffset,
    startYOffset,
    endXOffset,
    endYOffset,
  ]);

  const animationCoordinates = reverse
    ? {
        x1: ["110%", "-20%"],
        x2: ["120%", "-10%"],
      }
    : {
        x1: ["-20%", "110%"],
        x2: ["-10%", "120%"],
      };

  return (
    <svg
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none z-[1] overflow-visible"
      style={{ filter: "drop-shadow(0 2px 6px rgba(0, 0, 0, 0.08))" }}
      width={dimensions.width}
      height={dimensions.height}
      viewBox={`0 0 ${dimensions.width} ${dimensions.height}`}
      fill="none"
    >
      <path
        d={path}
        stroke={pathColor}
        strokeWidth={pathWidth}
        strokeOpacity={pathOpacity}
        strokeLinecap="round"
      />

      <path
        d={path}
        stroke={`url(#${gradientId})`}
        strokeWidth={pathWidth + 1}
        strokeLinecap="round"
      />

      <defs>
        <motion.linearGradient
          id={gradientId}
          gradientUnits="userSpaceOnUse"
          initial={{
            x1: "0%",
            x2: "0%",
            y1: "0%",
            y2: "0%",
          }}
          animate={{
            x1: animationCoordinates.x1,
            x2: animationCoordinates.x2,
            y1: ["0%", "0%"],
            y2: ["0%", "0%"],
          }}
          transition={{
            delay,
            duration,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          <stop stopColor={gradientStartColor} stopOpacity="0" />
          <stop
            offset="28%"
            stopColor={gradientStartColor}
            stopOpacity="1"
          />
          <stop
            offset="55%"
            stopColor={gradientStopColor}
            stopOpacity="1"
          />
          <stop
            offset="100%"
            stopColor={gradientStopColor}
            stopOpacity="0"
          />
        </motion.linearGradient>
      </defs>
    </svg>
  );
}

interface NodeProps {
  icon: ReactNode;
  name: string;
  large?: boolean;
}

const IntegrationNode = forwardRef<HTMLDivElement, NodeProps>(
  ({ icon, name, large = false }, ref) => {
    return (
      <div className="flex flex-col items-center gap-2 group cursor-pointer">
        <motion.div
          ref={ref}
          className={`relative flex items-center justify-center overflow-hidden border border-black/10 bg-white shadow-card ${
            large
              ? "w-[82px] h-[82px] sm:w-[98px] sm:h-[98px] rounded-[24px] sm:rounded-[28px] shadow-[0_12px_32px_rgba(52,114,255,0.2),0_0_0_8px_rgba(52,114,255,0.06)] border-signal-blue/30"
              : "w-[54px] h-[54px] sm:w-[64px] sm:h-[64px] rounded-[18px] sm:rounded-[22px] hover:border-black/20 hover:shadow-frame"
          }`}
          whileHover={{
            scale: 1.09,
            y: -4,
          }}
          transition={{
            type: "spring",
            stiffness: 280,
            damping: 18,
          }}
        >
          <span className="absolute w-[90%] h-[45%] left-[5%] -top-[18%] rounded-full opacity-60 blur-[10px] bg-black/5 pointer-events-none" />
          <div className={`relative z-10 flex items-center justify-center ${large ? "w-[64%] h-[64%]" : "w-[58%] h-[58%]"}`}>
            {icon}
          </div>
        </motion.div>

        <span className="text-[11px] sm:text-[12px] font-bold tracking-wider uppercase text-ink/60 group-hover:text-ink transition-colors">
          {name}
        </span>
      </div>
    );
  },
);

IntegrationNode.displayName = "IntegrationNode";

/* ── Platform Icons ── */

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <circle cx="32" cy="32" r="28" fill="#25d366" />
      <path
        d="M19 49l3-9a18 18 0 1 1 7 6z"
        fill="none"
        stroke="#fff"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26 23c1-1 3 0 4 3l1 3c0 1-1 2-2 3 2 4 5 7 9 9 1-1 2-3 3-3l4 2c2 1 2 3 1 5-2 3-5 4-8 3-8-2-17-11-20-19-1-3 0-5 2-7 2-1 4-1 6 1z"
        fill="#fff"
      />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <radialGradient id="beam-ig-grad" cx="20%" cy="110%" r="140%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="16" fill="url(#beam-ig-grad)" />
      <circle cx="32" cy="32" r="11" fill="none" stroke="#fff" strokeWidth="4.5" />
      <circle cx="45" cy="19" r="3.2" fill="#fff" />
    </svg>
  );
}

function MessengerIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <linearGradient
          id="beam-messenger-grad"
          x1="10"
          y1="55"
          x2="54"
          y2="7"
        >
          <stop stopColor="#ff6257" />
          <stop offset="0.45" stopColor="#9d4edd" />
          <stop offset="1" stopColor="#1292ff" />
        </linearGradient>
      </defs>
      <path
        d="M32 5C17 5 5 16 5 30c0 8 4 15 10 20v9l9-5c3 1 5 1 8 1 15 0 27-11 27-25S47 5 32 5z"
        fill="url(#beam-messenger-grad)"
      />
      <path
        d="m17 39 12-13 7 6 11-7-12 14-7-6z"
        fill="#fff"
      />
    </svg>
  );
}

function WebsiteIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <linearGradient id="beam-web-grad" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#3b82f6" />
          <stop offset="1" stopColor="#1d4ed8" />
        </linearGradient>
      </defs>
      <circle cx="32" cy="32" r="28" fill="url(#beam-web-grad)" />
      <circle cx="32" cy="32" r="19" fill="none" stroke="#fff" strokeWidth="3" opacity="0.35" />
      <ellipse cx="32" cy="32" rx="10" ry="19" fill="none" stroke="#fff" strokeWidth="3" />
      <line x1="13" y1="32" x2="51" y2="32" stroke="#fff" strokeWidth="3" />
      <line x1="16" y1="22" x2="48" y2="22" stroke="#fff" strokeWidth="2.5" opacity="0.75" />
      <line x1="16" y1="42" x2="48" y2="42" stroke="#fff" strokeWidth="2.5" opacity="0.75" />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <rect x="8" y="10" width="48" height="46" rx="10" fill="#ffffff" />
      <path d="M8 18c0-4.4 3.6-8 8-8h32c4.4 0 8 3.6 8 8v6H8v-6z" fill="#ea4335" />
      <rect x="18" y="5" width="4" height="10" rx="2" fill="#4285f4" />
      <rect x="42" y="5" width="4" height="10" rx="2" fill="#34a853" />
      <rect x="16" y="32" width="7" height="6" rx="1.5" fill="#4285f4" />
      <rect x="28" y="32" width="7" height="6" rx="1.5" fill="#fbbc05" />
      <rect x="40" y="32" width="7" height="6" rx="1.5" fill="#34a853" />
      <rect x="16" y="42" width="7" height="6" rx="1.5" fill="#ea4335" />
      <rect x="28" y="42" width="7" height="6" rx="1.5" fill="#4285f4" />
      <rect x="40" y="42" width="7" height="6" rx="1.5" fill="#fbbc05" />
    </svg>
  );
}

function DatabaseIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <defs>
        <linearGradient id="beam-crm-grad" x1="0" y1="0" x2="64" y2="64">
          <stop stopColor="#8b5cf6" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
      </defs>
      <rect x="6" y="6" width="52" height="52" rx="15" fill="url(#beam-crm-grad)" />
      <ellipse cx="32" cy="20" rx="16" ry="6" fill="none" stroke="#fff" strokeWidth="3" />
      <path d="M16 20v10c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="none" stroke="#fff" strokeWidth="3" />
      <path d="M16 30v10c0 3.3 7.2 6 16 6s16-2.7 16-6V30" fill="none" stroke="#fff" strokeWidth="3" />
    </svg>
  );
}

function VesperHubIcon() {
  return (
    <svg viewBox="0 0 64 64" className="w-full h-full">
      <rect
        x="6"
        y="6"
        width="52"
        height="52"
        rx="16"
        fill="#0e131f"
      />
      {/* Sleek V logo */}
      <path
        d="M20 21l12 22 12-22"
        fill="none"
        stroke="#ffffff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="22" r="2.5" fill="#3472ff" />
    </svg>
  );
}

export function IntegrationsBeam() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Left column nodes (Incoming Messaging Channels)
  const whatsappRef = useRef<HTMLDivElement>(null);
  const instagramRef = useRef<HTMLDivElement>(null);
  const messengerRef = useRef<HTMLDivElement>(null);

  // Center node (Vesper AI Engine)
  const centerRef = useRef<HTMLDivElement>(null);

  // Right column nodes (Connected Systems & Web)
  const websiteRef = useRef<HTMLDivElement>(null);
  const calendarRef = useRef<HTMLDivElement>(null);
  const crmRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative w-full py-20 md:py-28 px-4 sm:px-6 bg-canvas border-b border-line overflow-hidden" id="integrations">
      {/* Header */}
      <div className="relative z-10 mx-auto max-w-[760px] text-center flex flex-col items-center justify-center mb-12 md:mb-16">
        <p className="text-eyebrow text-signal-blue uppercase tracking-widest mb-3 text-center">
          channels &amp; calendar
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-ink tracking-tight mb-4 leading-[1.08] text-center max-w-[680px] mx-auto">
          Wherever they message,<br className="hidden sm:block" />
          it books on your calendar.
        </h2>

        <p className="text-[15px] sm:text-[17px] text-muted max-w-[560px] mx-auto leading-relaxed font-normal text-center">
          Customers text where they already spend time. Vesper checks your real schedule, confirms open slots, and books them straight into your calendar — day or night.
        </p>
      </div>

      {/* Network Beam Canvas */}
      <div
        ref={containerRef}
        className="relative z-10 w-full max-w-[920px] mx-auto h-[320px] sm:h-[380px] md:h-[420px] grid grid-cols-3 items-center px-2 sm:px-6"
      >
        {/* Left Column: Channels */}
        <div className="relative z-10 flex flex-col justify-between h-[260px] sm:h-[300px] md:h-[340px] items-start">
          <IntegrationNode
            ref={whatsappRef}
            name="WhatsApp"
            icon={<WhatsAppIcon />}
          />

          <IntegrationNode
            ref={instagramRef}
            name="Instagram"
            icon={<InstagramIcon />}
          />

          <IntegrationNode
            ref={messengerRef}
            name="Messenger"
            icon={<MessengerIcon />}
          />
        </div>

        {/* Center: Vesper Engine */}
        <div className="relative z-10 flex items-center justify-center">
          <IntegrationNode
            ref={centerRef}
            name="Vesper"
            icon={<VesperHubIcon />}
            large
          />
        </div>

        {/* Right Column: Systems */}
        <div className="relative z-10 flex flex-col justify-between h-[260px] sm:h-[300px] md:h-[340px] items-end">
          <IntegrationNode
            ref={websiteRef}
            name="Website"
            icon={<WebsiteIcon />}
          />

          <IntegrationNode
            ref={calendarRef}
            name="Calendar"
            icon={<CalendarIcon />}
          />

          <IntegrationNode
            ref={crmRef}
            name="Database"
            icon={<DatabaseIcon />}
          />
        </div>

        {/* ── Animated Beams (Left to Center) ── */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={whatsappRef}
          toRef={centerRef}
          curvature={-80}
          endYOffset={-8}
          duration={4.8}
          delay={0}
          gradientStartColor="#25d366"
          gradientStopColor="#10b981"
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={instagramRef}
          toRef={centerRef}
          curvature={0}
          duration={4.2}
          delay={0.3}
          gradientStartColor="#f58529"
          gradientStopColor="#e1306c"
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={messengerRef}
          toRef={centerRef}
          curvature={80}
          endYOffset={8}
          duration={5.2}
          delay={0.6}
          gradientStartColor="#0084ff"
          gradientStopColor="#6366f1"
        />

        {/* ── Animated Beams (Right to Center, Reverse) ── */}
        <AnimatedBeam
          containerRef={containerRef}
          fromRef={websiteRef}
          toRef={centerRef}
          curvature={-80}
          endYOffset={-8}
          reverse
          duration={5.0}
          delay={0.2}
          gradientStartColor="#3b82f6"
          gradientStopColor="#2563eb"
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={calendarRef}
          toRef={centerRef}
          curvature={0}
          reverse
          duration={4.4}
          delay={0.5}
          gradientStartColor="#ea4335"
          gradientStopColor="#4285f4"
        />

        <AnimatedBeam
          containerRef={containerRef}
          fromRef={crmRef}
          toRef={centerRef}
          curvature={80}
          endYOffset={8}
          reverse
          duration={5.5}
          delay={0.8}
          gradientStartColor="#8b5cf6"
          gradientStopColor="#6366f1"
        />
      </div>

      {/* Bottom Subtext */}
      <p className="text-center text-[12px] text-muted/60 mt-10">
        ✦ Works with Google Calendar, Outlook, WhatsApp Business &amp; Meta
      </p>
    </section>
  );
}
