import React from "react";

interface WashiTapeProps {
  color?: "yellow" | "pink" | "blue" | "green" | "orange";
  pattern?: "dots" | "stripes" | "grid" | "plain";
  className?: string;
  width?: string;
}

export const WashiTape: React.FC<WashiTapeProps> = ({
  color = "yellow",
  pattern = "dots",
  className = "",
  width = "w-28 md:w-36"
}) => {
  const colorBg = {
    yellow: "bg-[#FEF08A]/85 text-amber-600 border-amber-300",
    pink: "bg-[#FBCFE8]/85 text-pink-600 border-pink-300",
    blue: "bg-[#BFDBFE]/85 text-blue-600 border-blue-300",
    green: "bg-[#BBF7D0]/85 text-emerald-600 border-emerald-300",
    orange: "bg-[#FED7AA]/85 text-orange-600 border-orange-300"
  }[color];

  return (
    <div
      className={`h-7 md:h-8 ${width} ${colorBg} backdrop-blur-[1px] relative shadow-sm border-y border-dashed/30 select-none pointer-events-none flex items-center justify-center overflow-hidden ${className}`}
      style={{
        clipPath: "polygon(4px 0%, calc(100% - 4px) 0%, 100% 50%, calc(100% - 4px) 100%, 4px 100%, 0% 50%)"
      }}
      aria-hidden="true"
    >
      {pattern === "dots" && (
        <div className="w-full h-full opacity-20 bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:6px_6px]" />
      )}
      {pattern === "stripes" && (
        <div className="w-full h-full opacity-15 bg-[repeating-linear-gradient(45deg,#000,#000_2px,transparent_2px,transparent_6px)]" />
      )}
      {pattern === "grid" && (
        <div className="w-full h-full opacity-15 bg-[linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:8px_8px]" />
      )}
    </div>
  );
};
