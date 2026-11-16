import React from "react";
import { PushPin } from "./PushPin";

interface StickyNoteProps {
  color?: "yellow" | "pink" | "green" | "blue" | "orange";
  title?: string;
  children: React.ReactNode;
  rotation?: string;
  hasPin?: boolean;
  pinColor?: "red" | "yellow" | "blue" | "pink" | "green" | "gold";
  className?: string;
}

export const StickyNote: React.FC<StickyNoteProps> = ({
  color = "yellow",
  title,
  children,
  rotation = "-rotate-1",
  hasPin = true,
  pinColor = "red",
  className = ""
}) => {
  const bgStyles = {
    yellow: "bg-[#FFF9C4] border-[#FBC02D]/30 text-[#422006]",
    pink: "bg-[#FCE4EC] border-[#F06292]/30 text-[#4A044E]",
    green: "bg-[#E8F5E9] border-[#81C784]/30 text-[#064E3B]",
    blue: "bg-[#E3F2FD] border-[#64B5F6]/30 text-[#1E3A8A]",
    orange: "bg-[#FFE0B2] border-[#FFB74D]/30 text-[#7C2D12]"
  }[color];

  return (
    <div
      className={`relative p-5 md:p-6 rounded-sm shadow-scrapbook border ${bgStyles} ${rotation} transition-transform duration-200 hover:rotate-0 hover:scale-[1.02] hover:z-20 ${className}`}
    >
      {hasPin && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <PushPin color={pinColor} size="sm" />
        </div>
      )}

      {title && (
        <h4 className="font-fredoka text-lg md:text-xl font-bold mb-2 pb-1 border-b border-black/10">
          {title}
        </h4>
      )}

      <div className="font-marker text-base md:text-lg leading-relaxed">
        {children}
      </div>

      {/* Folded / curled corner simulation */}
      <div 
        className="absolute bottom-0 right-0 w-5 h-5 bg-black/10 pointer-events-none"
        style={{
          clipPath: "polygon(100% 0, 0 100%, 100% 100%)"
        }}
      />
    </div>
  );
};
