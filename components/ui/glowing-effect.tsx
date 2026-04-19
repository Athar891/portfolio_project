"use client";

import { memo, useCallback, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";
import { animate } from "motion/react";

interface GlowingEffectProps {
  blur?: number;
  inactiveZone?: number;
  proximity?: number;
  spread?: number;
  variant?: "default" | "white";
  glow?: boolean;
  className?: string;
  disabled?: boolean;
  movementDuration?: number;
  borderWidth?: number;
}

const GlowingEffect = memo(
  ({
    blur = 0,
    inactiveZone = 0.01,
    proximity = 64,
    spread = 80,
    variant = "default",
    glow = false,
    className,
    movementDuration = 2,
    borderWidth = 2,
    disabled = true,
  }: GlowingEffectProps) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const lastPosition = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>(0);

    const handleMove = useCallback(
      (e?: MouseEvent | { x: number; y: number }) => {
        if (!containerRef.current) return;

        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }

        animationFrameRef.current = requestAnimationFrame(() => {
          const element = containerRef.current;
          if (!element) return;

          const { left, top, width, height } = element.getBoundingClientRect();
          const mouseX = e?.x ?? lastPosition.current.x;
          const mouseY = e?.y ?? lastPosition.current.y;

          if (e) {
            lastPosition.current = { x: mouseX, y: mouseY };
          }

          const center = [left + width * 0.5, top + height * 0.5];
          const distanceFromCenter = Math.hypot(
            mouseX - center[0],
            mouseY - center[1]
          );
          const inactiveRadius = 0.5 * Math.min(width, height) * inactiveZone;

          if (distanceFromCenter < inactiveRadius) {
            element.style.setProperty("--active", "0");
            return;
          }

          const isActive =
            mouseX > left - proximity &&
            mouseX < left + width + proximity &&
            mouseY > top - proximity &&
            mouseY < top + height + proximity;

          element.style.setProperty("--active", isActive ? "1" : "0");

          if (!isActive) return;

          const currentAngle =
            parseFloat(element.style.getPropertyValue("--start")) || 0;
          let targetAngle =
            (180 * Math.atan2(mouseY - center[1], mouseX - center[0])) /
              Math.PI +
            90;

          const angleDiff = ((targetAngle - currentAngle + 180) % 360) - 180;
          const newAngle = currentAngle + angleDiff;

          animate(currentAngle, newAngle, {
            duration: movementDuration,
            ease: [0.16, 1, 0.3, 1],
            onUpdate: (value) => {
              element.style.setProperty("--start", String(value));
            },
          });
        });
      },
      [inactiveZone, proximity, movementDuration]
    );

    useEffect(() => {
      if (disabled) return;

      const handleScroll = () => handleMove();
      const handlePointerMove = (e: PointerEvent) => handleMove(e);

      window.addEventListener("scroll", handleScroll, { passive: true });
      document.body.addEventListener("pointermove", handlePointerMove, {
        passive: true,
      });

      return () => {
        if (animationFrameRef.current) {
          cancelAnimationFrame(animationFrameRef.current);
        }
        window.removeEventListener("scroll", handleScroll);
        document.body.removeEventListener("pointermove", handlePointerMove);
      };
    }, [handleMove, disabled]);

    if (disabled) {
      return null;
    }

    return (
      <div
        ref={containerRef}
        style={
          {
            "--start": "0deg",
            "--active": "0",
            "--spread": `${spread}deg`,
            "--border-width": `${borderWidth}px`,
          } as React.CSSProperties & { [key: string]: string }
        }
        className="pointer-events-none absolute inset-0 rounded-[inherit]"
      >
        <style>{`
          @keyframes rgbGlow {
            0% { filter: hue-rotate(0deg); }
            100% { filter: hue-rotate(360deg); }
          }
          .glow-border {
            animation: rgbGlow 8s linear infinite;
          }
        `}</style>

        {/* Border with rainbow gradient */}
        <div
          className="absolute rounded-[inherit] glow-border"
          style={{
            inset: 0,
            border: `var(--border-width) solid transparent`,
            background: `
              conic-gradient(
                #ff0000,
                #ff7f00,
                #ffff00,
                #00ff00,
                #0000ff,
                #9400d3,
                #ff0000
              )
            `,
            WebkitMaskImage: `
              linear-gradient(#fff 0% 0%),
              linear-gradient(#fff 0% 0%)
            `,
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            opacity: `calc(var(--active) * 1)`,
            pointerEvents: "none",
          }}
        />

        {/* Border glow effect */}
        <div
          className="absolute rounded-[inherit]"
          style={{
            inset: `-${borderWidth * 2}px`,
            background: `
              conic-gradient(
                #ff0000,
                #ff7f00,
                #ffff00,
                #00ff00,
                #0000ff,
                #9400d3,
                #ff0000
              )
            `,
            opacity: `calc(var(--active) * 0.4)`,
            filter: "blur(8px)",
            pointerEvents: "none",
            WebkitMaskImage: `radial-gradient(circle, transparent 40%, black 100%)`,
            maskImage: `radial-gradient(circle, transparent 40%, black 100%)`,
          }}
        />
      </div>
    );
  }
);

GlowingEffect.displayName = "GlowingEffect";

export { GlowingEffect };
