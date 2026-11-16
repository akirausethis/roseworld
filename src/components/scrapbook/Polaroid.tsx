"use client";

import React from "react";
import Image from "next/image";
import { PushPin } from "./PushPin";
import { WashiTape } from "./WashiTape";

interface PolaroidProps {
  imageSrc: string;
  imageAlt: string;
  caption?: string;
  subtitle?: string;
  rotation?: string;
  pinned?: boolean;
  pinColor?: "red" | "yellow" | "blue" | "pink" | "green" | "gold";
  tape?: boolean;
  tapeColor?: "yellow" | "pink" | "blue" | "green" | "orange";
  aspectRatio?: string;
  onClick?: () => void;
  className?: string;
  width?: number;
  height?: number;
}

export const Polaroid: React.FC<PolaroidProps> = ({
  imageSrc,
  imageAlt,
  caption,
  subtitle,
  rotation = "rotate-1",
  pinned = true,
  pinColor = "red",
  tape = false,
  tapeColor = "yellow",
  aspectRatio = "aspect-[3/4]",
  onClick,
  className = "",
  width = 600,
  height = 800
}) => {
  return (
    <div
      onClick={onClick}
      className={`group relative bg-white p-3 md:p-4 pb-4 md:pb-6 rounded-sm shadow-polaroid border border-black/10 transition-all duration-300 ease-out hover:scale-105 hover:rotate-0 hover:shadow-lifted hover:z-30 cursor-pointer ${rotation} ${className}`}
    >
      {/* Top Pin Decoration */}
      {pinned && !tape && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <PushPin color={pinColor} size="md" />
        </div>
      )}

      {/* Washi Tape alternative */}
      {tape && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
          <WashiTape color={tapeColor} width="w-24 md:w-32" />
        </div>
      )}

      {/* Image container */}
      <div className={`relative w-full ${aspectRatio} overflow-hidden rounded-xs bg-[#F3F4F6] border border-black/5`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={width}
          height={height}
          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Subtle photo grain / gloss overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-black/5 via-transparent to-white/20 pointer-events-none" />
      </div>

      {/* Handwritten Caption */}
      {(caption || subtitle) && (
        <div className="mt-3 text-center px-1">
          {caption && (
            <p className="font-caveat text-xl md:text-2xl font-bold text-[#1D232C] leading-snug tracking-wide">
              {caption}
            </p>
          )}
          {subtitle && (
            <p className="font-marker text-xs md:text-sm text-[#4A5568] mt-0.5">
              {subtitle}
            </p>
          )}
        </div>
      )}
    </div>
  );
};
