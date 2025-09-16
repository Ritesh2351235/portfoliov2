"use client";

import { cn } from "@/lib/utils";
import React from "react";

export const Marquee = ({
  children,
  reverse,
  pauseOnHover = false,
  className,
  ...props
}: {
  children: React.ReactNode;
  reverse?: boolean;
  pauseOnHover?: boolean;
  className?: string;
}) => {
  return (
    <div
      className={cn("group flex w-full overflow-hidden [--duration:40s] [--gap:1rem]", className)}
      {...props}
    >
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] [--transform:translateX(calc(var(--gap)*-1))]",
          "animate-[marquee_var(--duration)_linear_infinite]",
          reverse && "animate-[marqueeReverse_var(--duration)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
      <div
        className={cn(
          "flex shrink-0 justify-around gap-[--gap] [--transform:translateX(calc(var(--gap)*-1))]",
          "animate-[marquee_var(--duration)_linear_infinite]",
          reverse && "animate-[marqueeReverse_var(--duration)_linear_infinite]",
          pauseOnHover && "group-hover:[animation-play-state:paused]"
        )}
      >
        {children}
        {children}
      </div>
    </div>
  );
};
