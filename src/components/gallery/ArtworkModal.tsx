"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { WashiTape } from "../scrapbook/WashiTape";

interface ArtworkModalProps {
  isOpen: boolean;
  onClose: () => void;
  artwork: {
    title: string;
    category: string;
    image: string;
    caption?: string;
    width: number;
    height: number;
  } | null;
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  isOpen,
  onClose,
  artwork
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen || !artwork) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={artwork.title}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] bg-white p-4 md:p-6 pb-6 md:pb-8 rounded-xl shadow-lifted border-4 border-[#1D232C] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top washi tape */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
          <WashiTape color="pink" width="w-36 md:w-48" />
        </div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-[#EA3D91] text-white border-2 border-[#1D232C] shadow-sm flex items-center justify-center hover:scale-110 active:scale-95 transition-transform"
          aria-label="Tutup Tampilan Penuh"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Image Frame */}
        <div className="relative w-full max-h-[70vh] bg-[#F9FAFB] rounded-lg overflow-hidden border-2 border-stone-200 flex items-center justify-center">
          <Image
            src={artwork.image}
            alt={artwork.title}
            width={artwork.width || 800}
            height={artwork.height || 1000}
            className="w-auto h-auto max-h-[70vh] object-contain mx-auto"
            priority
          />
        </div>

        {/* Caption & Metadata */}
        <div className="mt-4 text-center">
          <h3 className="font-barrio text-2xl md:text-3xl text-[#1D232C] tracking-wide mt-1">
            {artwork.title}
          </h3>
          {artwork.caption && (
            <p className="font-caveat text-xl text-[#4A5568] mt-1 font-semibold">
              {artwork.caption}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};
