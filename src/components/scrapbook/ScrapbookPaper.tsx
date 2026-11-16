import React from "react";
import { WashiTape } from "./WashiTape";
import { PushPin } from "./PushPin";

interface ScrapbookPaperProps {
  variant?: "cream" | "blue-grid" | "pink-grid" | "green-grid" | "notebook" | "cork";
  rotation?: string;
  className?: string;
  tapeTop?: boolean;
  tapeCorner?: boolean;
  pinTop?: boolean;
  pinColor?: "red" | "yellow" | "blue" | "pink" | "green" | "gold";
  tapeColor?: "yellow" | "pink" | "blue" | "green" | "orange";
  children: React.ReactNode;
}

export const ScrapbookPaper: React.FC<ScrapbookPaperProps> = ({
  variant = "cream",
  rotation = "rotate-0",
  className = "",
  tapeTop = false,
  tapeCorner = false,
  pinTop = false,
  pinColor = "red",
  tapeColor = "yellow",
  children
}) => {
  const bgStyles = {
    cream: "bg-[#FFFBF2] text-[#1D232C] border-stone-200",
    "blue-grid": "bg-grid-blue text-[#0A2540] border-blue-200",
    "pink-grid": "bg-grid-pink text-[#3B0721] border-pink-200",
    "green-grid": "bg-grid-green text-[#052E16] border-emerald-200",
    notebook: "bg-notebook-lines text-[#1D232C] border-stone-200",
    cork: "bg-corkboard-rich text-white border-amber-950"
  }[variant];

  return (
    <div
      className={`relative p-6 md:p-10 rounded-sm shadow-scrapbook border ${bgStyles} ${rotation} transition-all duration-300 hover:rotate-0 hover:shadow-lifted ${className}`}
    >
      {/* Tape on top center */}
      {tapeTop && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
          <WashiTape color={tapeColor} width="w-28 md:w-36" />
        </div>
      )}

      {/* Tape on top-left corner */}
      {tapeCorner && (
        <div className="absolute -top-3 -left-4 -rotate-45 z-20">
          <WashiTape color={tapeColor} width="w-20 md:w-24" />
        </div>
      )}

      {/* Push Pin */}
      {pinTop && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <PushPin color={pinColor} size="md" />
        </div>
      )}

      {children}
    </div>
  );
};
