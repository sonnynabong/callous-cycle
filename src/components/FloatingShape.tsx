import React from "react";
import { cn } from "@/lib/utils";
import { Star, Circle, Square, Sparkles, Triangle } from "lucide-react";

type AnimationType = "float" | "float-reverse" | "spin-slow" | "wiggle" | "bounce-subtle";

interface FloatingShapeProps {
  className?: string;
  type?: "star" | "circle" | "square" | "sparkles" | "triangle" | "emoji";
  emoji?: string;
  animation?: AnimationType;
  color?: string; // Text tailwind class for color
  size?: string;  // Tailwind size classes (e.g. w-12 h-12 text-6xl)
  delay?: string;
}

const colorMap = [
  "text-max-magenta",
  "text-max-cyan",
  "text-max-yellow",
  "text-max-orange",
  "text-max-purple",
];

const animationMap = {
  float: "animate-float",
  "float-reverse": "animate-float-reverse",
  "spin-slow": "animate-spin-slow",
  "wiggle": "animate-wiggle",
  "bounce-subtle": "animate-bounce-subtle",
};

export const FloatingShape: React.FC<FloatingShapeProps> = ({
  className,
  type = "star",
  emoji = "✨",
  animation = "float",
  color,
  size = "w-12 h-12",
  delay = "0s",
}) => {
  const finalColor = color || colorMap[Math.floor(Math.random() * colorMap.length)];
  const animationClass = animationMap[animation] || "animate-float";

  return (
    <div
      className={cn("absolute z-30 opacity-80", animationClass, className)}
      style={{ animationDelay: delay }}
      aria-hidden="true"
    >
      {type === "emoji" ? (
        <span className={cn("inline-block", size)}>{emoji}</span>
      ) : (
        <>
          {type === "star" && <Star className={cn("fill-current stroke-[3px]", size, finalColor)} />}
          {type === "circle" && <Circle className={cn("fill-current stroke-[3px]", size, finalColor)} />}
          {type === "square" && <Square className={cn("fill-current stroke-[3px]", size, finalColor)} />}
          {type === "sparkles" && <Sparkles className={cn("fill-current stroke-[3px]", size, finalColor)} />}
          {type === "triangle" && <Triangle className={cn("fill-current stroke-[3px]", size, finalColor)} />}
        </>
      )}
    </div>
  );
};
