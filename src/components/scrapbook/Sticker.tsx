"use client";

import React, { useState } from "react";
import Image from "next/image";
import confetti from "canvas-confetti";

interface StickerProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  rotation?: string;
  className?: string;
  interactive?: boolean;
  withConfetti?: boolean;
}

export const Sticker: React.FC<StickerProps> = ({
  src,
  alt,
  width,
  height,
  rotation = "rotate-0",
  className = "",
  interactive = true,
  withConfetti = false
}) => {
  const [clicked, setClicked] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (!interactive) return;
    setClicked(true);
    setTimeout(() => setClicked(false), 300);

    if (withConfetti) {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = (rect.left + rect.width / 2) / window.innerWidth;
      const y = (rect.top + rect.height / 2) / window.innerHeight;
      confetti({
        particleCount: 25,
        spread: 60,
        origin: { x, y },
        colors: ["#EA3D91", "#1760D5", "#238B68", "#F58B25", "#FACC15"]
      });
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`inline-block select-none shadow-sticker transition-transform duration-200 cursor-pointer ${rotation} ${
        interactive ? "hover:scale-110 active:scale-95 hover:rotate-3" : ""
      } ${clicked ? "scale-125 rotate-6" : ""} ${className}`}
      role={interactive ? "button" : "img"}
      aria-label={alt}
      tabIndex={interactive ? 0 : -1}
      onKeyDown={(e) => {
        if (interactive && (e.key === "Enter" || e.key === " ")) {
          handleClick(e as unknown as React.MouseEvent);
        }
      }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-full h-auto object-contain pointer-events-none"
      />
    </div>
  );
};
