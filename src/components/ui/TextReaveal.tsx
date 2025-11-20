"use client";
import React, { useEffect, useRef, useState, memo } from "react";
import { motion } from "motion/react";
import { twMerge } from "tailwind-merge";
import { cn } from "@/lib/utils";

export const TextRevealCard = ({
  text,
  revealText,
  children,
  className,
}: {
  text: string;
  revealText: string;
  children?: React.ReactNode;
  className?: string;
}) => {
  const [widthPercentage, setWidthPercentage] = useState(0);
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [left, setLeft] = useState(0);
  const [localWidth, setLocalWidth] = useState(0);
  const [isMouseOver, setIsMouseOver] = useState(false);

  useEffect(() => {
    if (cardRef.current) {
      const { left, width } = cardRef.current.getBoundingClientRect();
      setLeft(left);
      setLocalWidth(width);
    }
  }, []);

  const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

  function updateWidth(clientX: number) {
    if (!cardRef.current || !localWidth) return;
    const relativeX = clientX - left;
    const percentage = (relativeX / localWidth) * 100;
    setWidthPercentage(clamp(percentage, 0, 100));
  }

  function mouseMoveHandler(event: React.MouseEvent<HTMLDivElement>) {
    event.preventDefault();
    updateWidth(event.clientX);
  }

  function mouseLeaveHandler() {
    setIsMouseOver(false);
    setWidthPercentage(0);
  }

  function mouseEnterHandler() {
    setIsMouseOver(true);
  }

  function touchMoveHandler(event: React.TouchEvent<HTMLDivElement>) {
    event.preventDefault();
    const clientX = event.touches[0]?.clientX;
    if (!clientX) return;
    updateWidth(clientX);
  }

  const rotateDeg = (widthPercentage - 50) * 0.1;

  return (
    <div
      ref={cardRef}
      onMouseEnter={mouseEnterHandler}
      onMouseLeave={mouseLeaveHandler}
      onMouseMove={mouseMoveHandler}
      onTouchStart={mouseEnterHandler}
      onTouchEnd={mouseLeaveHandler}
      onTouchMove={touchMoveHandler}
      className={cn(
        "relative w-full overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-950/90 px-6 py-8 shadow-[0_0_50px_rgba(15,23,42,0.9)] backdrop-blur-xl",
        "before:pointer-events-none before:absolute before:inset-px before:rounded-[1.05rem] before:bg-gradient-to-br before:from-sky-500/10 before:via-transparent before:to-indigo-500/10",
        className
      )}
    >
      <MemoizedStars />

      {children && (
        <div className="relative z-10 mb-4 flex flex-col gap-1">
          {children}
        </div>
      )}

      <div className="relative z-10 flex min-h-[150px] items-center justify-center overflow-hidden md:min-h-[190px]">
        {/* REVEAL LAYER */}
        <motion.div
          style={{ width: "100%" }}
          animate={
            isMouseOver
              ? {
                  opacity: widthPercentage > 0 ? 1 : 0,
                  clipPath: `inset(0 ${100 - widthPercentage}% 0 0)`,
                }
              : {
                  opacity: 0,
                  clipPath: "inset(0 100% 0 0)",
                }
          }
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="pointer-events-none absolute inset-3 z-20 flex items-center justify-center rounded-2xl bg-slate-950/70 shadow-[0_0_120px_rgba(56,189,248,0.55)]"
        >
          <p
            // style={{
            //   textShadow:
            //     "0 0 18px rgba(56,189,248,0.9), 0 0 32px rgba(37,99,235,0.95)",
            // }}
            className="max-w-[90%] text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight 
                       bg-clip-text text-transparent 
                       bg-gradient-to-r from-sky-300 via-blue-400 to-indigo-400"
          >
            {revealText}
          </p>
        </motion.div>

        {/* SCAN LINE */}
        <motion.div
          animate={{
            left: `${widthPercentage}%`,
            rotate: `${rotateDeg}deg`,
            opacity: isMouseOver && widthPercentage > 0 ? 1 : 0,
          }}
          transition={{ duration: 0.15, ease: "linear" }}
          className="pointer-events-none absolute top-4 bottom-4 z-30 w-[3px] rounded-full 
                     bg-gradient-to-b from-transparent via-sky-400 to-transparent 
                     shadow-[0_0_25px_rgba(56,189,248,0.9)]"
        />

        {/* BASE TEXT */}
<div className="relative max-w-[90%] text-center">
  <p
    className={cn(
      "text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-400/85 transition-opacity duration-200",
      isMouseOver && widthPercentage > 0 && "opacity-0"
    )}
  >
    {text}
  </p>
</div>

      </div>
    </div>
  );
};

export const TextRevealCardTitle = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h2
      className={twMerge(
        "text-sm font-medium uppercase tracking-[0.18em] text-sky-300/80",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const TextRevealCardDescription = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <p
      className={twMerge(
        "text-xs sm:text-sm text-slate-400/80 max-w-xl",
        className
      )}
    >
      {children}
    </p>
  );
};

const Stars = () => {
  const randomMove = () => Math.random() * 4 - 2;
  const randomOpacity = () => Math.random();
  const random = () => Math.random();

  return (
    <div className="pointer-events-none absolute inset-0">
      {[...Array(60)].map((_, i) => (
        <motion.span
          key={`star-${i}`}
          animate={{
            top: `calc(${random() * 100}% + ${randomMove()}px)`,
            left: `calc(${random() * 100}% + ${randomMove()}px)`,
            opacity: randomOpacity(),
            scale: [1, 1.2, 0.8],
          }}
          transition={{
            duration: random() * 10 + 12,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            position: "absolute",
            top: `${random() * 100}%`,
            left: `${random() * 100}%`,
            width: `2px`,
            height: `2px`,
            backgroundColor: "rgba(148,163,184,0.9)",
            borderRadius: "999px",
            zIndex: 1,
          }}
        />
      ))}
    </div>
  );
};

export const MemoizedStars = memo(Stars);
