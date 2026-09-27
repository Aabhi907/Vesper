"use client";

import { Slot } from "@radix-ui/react-slot";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import * as React from "react";

import { cn } from "@/lib/utils";

type Side = "top" | "bottom" | "left" | "right";
type TooltipTriggerElement = React.ReactElement<{
  "aria-describedby"?: string;
}>;

export interface TooltipProps {
  children: TooltipTriggerElement;
  content: string;
  side?: Side;
  delay?: number;
  className?: string;
}

/**
 * Wrap a group of <Tooltip> components with this so they share one
 * Radix Provider — ensuring only one tooltip is open at a time.
 */
export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return (
    <TooltipPrimitive.Provider delayDuration={0} skipDelayDuration={100}>
      {children}
    </TooltipPrimitive.Provider>
  );
}

function isTooltipTriggerElement(
  node: React.ReactNode
): node is TooltipTriggerElement {
  return React.isValidElement(node) && node.type !== React.Fragment;
}

function mergeDescribedBy(...ids: Array<string | undefined>) {
  const merged = ids.filter(Boolean).join(" ");
  return merged.length > 0 ? merged : undefined;
}

export function Tooltip({
  children,
  content,
  side = "top",
  delay = 0.15,
  className,
}: TooltipProps) {
  const [open, setOpen] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);
  const tooltipId = React.useId();
  const normalizedContent = content.trim();

  // Pointer-tracked motion — same as team-tooltip.tsx
  const pointerX = useMotionValue(0);

  const tooltipX = useSpring(
    useTransform(pointerX, [-40, 40], [-18, 18]),
    { stiffness: 150, damping: 12, mass: 0.45 }
  );
  const tooltipRotation = useSpring(
    useTransform(pointerX, [-40, 40], [-7, 7]),
    { stiffness: 150, damping: 12, mass: 0.45 }
  );

  const handlePointerMove = React.useCallback(
    (e: React.PointerEvent<HTMLElement>) => {
      const bounds = e.currentTarget.getBoundingClientRect();
      pointerX.set(e.clientX - (bounds.left + bounds.width / 2));
    },
    [pointerX]
  );

  if (!isTooltipTriggerElement(children)) {
    throw new Error("Tooltip expects a single element child.");
  }

  const childAriaDescribedBy = children.props["aria-describedby"];
  const triggerDescription = open
    ? mergeDescribedBy(childAriaDescribedBy, tooltipId)
    : childAriaDescribedBy;

  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      clearTimeout(timeoutRef.current);
      if (nextOpen) {
        if (open) return;
        timeoutRef.current = setTimeout(() => setOpen(true), delay * 1000);
        return;
      }
      pointerX.set(0);
      setOpen(false);
    },
    [delay, open, pointerX]
  );

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

  if (normalizedContent.length === 0) return children;

  // Each Tooltip only renders Root+Trigger+Content — NO Provider.
  // Wrap your tooltip group in <TooltipProvider> at the parent level.
  return (
    <TooltipPrimitive.Root
      delayDuration={0}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <TooltipPrimitive.Trigger asChild>
        <Slot
          aria-describedby={triggerDescription}
          onPointerMove={handlePointerMove}
        >
          {children}
        </Slot>
      </TooltipPrimitive.Trigger>

      <AnimatePresence>
        {open && (
          <TooltipPrimitive.Portal forceMount>
            <TooltipPrimitive.Content
              align="center"
              asChild
              avoidCollisions
              collisionPadding={12}
              forceMount
              side={side}
              sideOffset={12}
            >
              {/* Outer wrapper: pointer-tracked translate + rotate */}
              <motion.div
                style={{ x: tooltipX, rotate: tooltipRotation }}
                className="pointer-events-none z-50"
              >
                {/* Inner card: scale + opacity + y spring entry/exit */}
                <motion.div
                  id={tooltipId}
                  role="tooltip"
                  initial={{ opacity: 0, y: 14, scale: 0.74 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.78 }}
                  transition={{ type: "spring", stiffness: 290, damping: 18 }}
                  style={{ transformOrigin: "bottom center" }}
                  className={cn(
                    "relative flex flex-col items-center",
                    "max-w-[200px] text-center", // ← allows wrapping, never single-line overflow
                    "rounded-xl px-4 py-2.5",
                    "border border-white/10",
                    "bg-gradient-to-b from-[#18171f] to-[#0c0c10]",
                    "text-white text-[12.5px] font-medium leading-snug",
                    "shadow-[0_22px_50px_rgba(15,12,28,0.35),inset_0_1px_0_rgba(255,255,255,0.08)]",
                    className
                  )}
                >
                  {/* Blue glow stripe */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 left-[9%] h-px w-[48%] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, #3cddff, transparent)",
                      boxShadow: "0 0 10px rgba(60,221,255,0.8)",
                    }}
                  />
                  {/* Purple glow stripe */}
                  <span
                    aria-hidden
                    className="pointer-events-none absolute bottom-0 right-[7%] h-px w-[43%] rounded-full"
                    style={{
                      background: "linear-gradient(90deg, transparent, #9d73ff, transparent)",
                      boxShadow: "0 0 10px rgba(157,115,255,0.8)",
                    }}
                  />

                  <span className="relative z-10">{normalizedContent}</span>

                  {/* Arrow */}
                  <span
                    aria-hidden
                    className="absolute -bottom-[5px] left-1/2 z-[1] h-[10px] w-[10px] -translate-x-1/2 rotate-45 bg-[#0d0d11]"
                  />
                </motion.div>
              </motion.div>
            </TooltipPrimitive.Content>
          </TooltipPrimitive.Portal>
        )}
      </AnimatePresence>
    </TooltipPrimitive.Root>
  );
}

export { Tooltip as tooltip };
