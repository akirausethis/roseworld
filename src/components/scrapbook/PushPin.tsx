import React from "react";

interface PushPinProps {
  color?: "red" | "yellow" | "blue" | "pink" | "green" | "gold";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export const PushPin: React.FC<PushPinProps> = ({
  color = "red",
  className = "",
  size = "md"
}) => {
  const colorMap = {
    red: "radial-gradient(circle at 35% 35%, #FF7675, #D63031, #7C1818)",
    yellow: "radial-gradient(circle at 35% 35%, #FFEAA7, #FDCB6E, #B7791F)",
    blue: "radial-gradient(circle at 35% 35%, #74B9FF, #0984E3, #0F4C81)",
    pink: "radial-gradient(circle at 35% 35%, #FD79A8, #E84393, #8C1D54)",
    green: "radial-gradient(circle at 35% 35%, #55EFC4, #00B894, #0B6B53)",
    gold: "radial-gradient(circle at 35% 35%, #FEE5B1, #D4AF37, #7A5B15)"
  };

  const sizePx = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6"
  }[size];

  return (
    <div
      className={`relative inline-block select-none pointer-events-none drop-shadow-[0_4px_3px_rgba(0,0,0,0.35)] ${className}`}
      aria-hidden="true"
    >
      <div
        className={`${sizePx} rounded-full border border-black/20 shadow-inner relative z-10`}
        style={{ background: colorMap[color] }}
      >
        {/* Highlight dot */}
        <div className="absolute top-1 left-1 w-1.5 h-1.5 rounded-full bg-white/70" />
      </div>
      {/* Needle shadow */}
      <div className="absolute bottom-0 right-1 w-2 h-1 bg-black/40 blur-[1px] -rotate-45" />
    </div>
  );
};
