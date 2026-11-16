import React from "react";

interface DoodleProps {
  type?: "star" | "sparkle" | "heart" | "arrow" | "squiggle" | "spiral";
  color?: string;
  size?: number;
  className?: string;
}

export const Doodle: React.FC<DoodleProps> = ({
  type = "star",
  color = "#F58B25",
  size = 32,
  className = ""
}) => {
  return (
    <div
      className={`inline-block select-none pointer-events-none ${className}`}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {type === "star" && (
        <svg viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M20 3 L24 14 L36 15 L27 23 L30 35 L20 28 L10 35 L13 23 L4 15 L16 14 Z" fill={`${color}22`} />
        </svg>
      )}

      {type === "sparkle" && (
        <svg viewBox="0 0 32 32" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" className="w-full h-full">
          <path d="M16 2 V30 M2 16 H30 M7 7 L25 25 M7 25 L25 7" />
        </svg>
      )}

      {type === "heart" && (
        <svg viewBox="0 0 36 36" fill={color} stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M18 32 C18 32 4 23 4 12 C4 7 8 3 13 3 C16 3 17.5 5 18 6 C18.5 5 20 3 23 3 C28 3 32 7 32 12 C32 23 18 32 18 32 Z" opacity="0.9" />
        </svg>
      )}

      {type === "arrow" && (
        <svg viewBox="0 0 60 40" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-full h-full">
          <path d="M5 25 C20 15 35 15 50 20 M38 10 L52 20 L40 32" />
        </svg>
      )}

      {type === "squiggle" && (
        <svg viewBox="0 0 80 20" fill="none" stroke={color} strokeWidth="3.5" strokeLinecap="round" className="w-full h-full">
          <path d="M3 10 Q12 2, 22 10 T42 10 T62 10 T77 10" />
        </svg>
      )}

      {type === "spiral" && (
        <svg viewBox="0 0 40 40" fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" className="w-full h-full">
          <path d="M20 20 C18 18 16 20 16 22 C16 26 23 26 24 22 C25 16 14 14 12 21 C10 29 27 31 30 22 C33 13 14 8 8 19" />
        </svg>
      )}
    </div>
  );
};
