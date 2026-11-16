"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Heart, BookOpen, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";
import { WashiTape } from "./WashiTape";

interface IntroAnimationProps {
  onComplete?: () => void;
}

export const IntroAnimation: React.FC<IntroAnimationProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [phaseText, setPhaseText] = useState("Menggunting kertas & pita warna-warni... ✂️🎀");
  const [isOpening, setIsOpening] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user already saw the intro in this session to prevent annoyance,
    // but still allow replay when requested.
    const alreadySeen = sessionStorage.getItem("rosee_intro_seen");
    if (alreadySeen === "true") {
      setIsDismissed(true);
      return;
    }

    // Step-by-step progress timer (reaches 100% in ~2 seconds)
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const next = prev + 4;

        if (next < 35) {
          setPhaseText("Merapikan stiker kucing & catatan lucu... 🐱✨");
        } else if (next < 70) {
          setPhaseText("Menempelkan karya seni & foto mading... 🎨📌");
        } else if (next < 95) {
          setPhaseText("Menjilid scrapbook Rosee... 📖💖");
        } else {
          setPhaseText("Tadaaa! Scrapbook siap dibuka! ✨🎉");
        }

        return next > 100 ? 100 : next;
      });
    }, 65);

    // Re-open listener for replay requests
    const handleReopen = () => {
      setIsDismissed(false);
      setIsOpening(false);
      setProgress(0);
      sessionStorage.removeItem("rosee_intro_seen");
    };

    window.addEventListener("open-intro-animation", handleReopen);

    return () => {
      clearInterval(interval);
      window.removeEventListener("open-intro-animation", handleReopen);
    };
  }, []);

  // When progress reaches 100%, automatically open after a brief pause
  useEffect(() => {
    if (progress === 100 && !isOpening && !isDismissed) {
      const autoTimer = setTimeout(() => {
        handleOpen();
      }, 600);
      return () => clearTimeout(autoTimer);
    }
  }, [progress, isOpening, isDismissed]);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);

    // Shoot celebratory pastel confetti
    try {
      confetti({
        particleCount: 55,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#EA3D91", "#1760D5", "#238B68", "#F58B25", "#FFD200", "#FF85A1"]
      });
    } catch {
      // Fallback if canvas is unavailable
    }

    sessionStorage.setItem("rosee_intro_seen", "true");

    // Smooth exit transition
    setTimeout(() => {
      setIsDismissed(true);
      if (onComplete) onComplete();
    }, 700);
  };

  if (isDismissed) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Animasi Pembuka Scrapbook Rosee"
      className={`fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 bg-[#FAF5ED] bg-grid-pink transition-all duration-700 ease-out select-none ${
        isOpening ? "opacity-0 scale-105 pointer-events-none" : "opacity-100 scale-100"
      }`}
    >
      {/* Decorative Washi Tapes at the Screen Corners */}
      <div className="absolute top-4 left-4 -rotate-12 pointer-events-none hidden sm:block">
        <WashiTape color="pink" width="w-36 md:w-48" />
      </div>
      <div className="absolute top-4 right-4 rotate-12 pointer-events-none hidden sm:block">
        <WashiTape color="yellow" width="w-36 md:w-48" />
      </div>
      <div className="absolute bottom-4 left-4 rotate-6 pointer-events-none hidden sm:block">
        <WashiTape color="blue" width="w-32 md:w-44" />
      </div>
      <div className="absolute bottom-4 right-4 -rotate-6 pointer-events-none hidden sm:block">
        <WashiTape color="green" width="w-32 md:w-44" />
      </div>

      {/* Floating Background Stickers */}
      <div className="absolute top-1/4 left-8 md:left-20 animate-cute-float pointer-events-none hidden md:block">
        <Image
          src="/assets/stickers/sticker-pencil.png"
          alt="Stiker Pensil"
          width={65}
          height={65}
          className="drop-shadow-md rotate-12"
        />
      </div>
      <div className="absolute top-1/3 right-8 md:right-20 animate-cute-float [animation-delay:1s] pointer-events-none hidden md:block">
        <Image
          src="/assets/stickers/sticker-star-orange.png"
          alt="Stiker Bintang"
          width={55}
          height={55}
          className="drop-shadow-md -rotate-12"
        />
      </div>
      <div className="absolute bottom-20 left-16 animate-cute-float [animation-delay:1.5s] pointer-events-none hidden md:block">
        <Image
          src="/assets/stickers/sticker-doodle-flower.png"
          alt="Stiker Bunga"
          width={60}
          height={60}
          className="drop-shadow-md"
        />
      </div>

      {/* Central Diary / Scrapbook Binder */}
      <div className="relative w-full max-w-lg bg-[#FFFBF2] rounded-3xl border-4 border-[#1D232C] shadow-scrapbook p-6 sm:p-8 overflow-hidden">
        {/* Binder Spiral Rings on Left */}
        <div className="absolute left-2.5 top-0 bottom-0 flex flex-col justify-around py-4 pointer-events-none z-20">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-3 bg-stone-300 rounded-full border border-stone-600 shadow-inner -translate-x-1/2"
            />
          ))}
        </div>

        {/* Top Header Label Strip */}
        <div className="flex items-center justify-between pl-4 mb-5 border-b-2 border-dashed border-pink-200 pb-3">
          <div className="inline-flex items-center gap-1.5 bg-[#FDE8F1] px-3 py-1 rounded-full border border-[#EA3D91]/30">
            <span className="w-2 h-2 rounded-full bg-[#EA3D91] animate-ping" />
            <span className="font-fredoka text-xs font-bold text-[#EA3D91] tracking-wider uppercase">
              Rosee&apos;s Diary • 2026
            </span>
          </div>

          <button
            onClick={handleOpen}
            className="text-xs font-fredoka font-bold text-[#4A5568] hover:text-[#EA3D91] underline decoration-dashed transition-colors"
          >
            Lewati Animasi &rarr;
          </button>
        </div>

        {/* Center Content: Cute Cat Mascot & Greetings */}
        <div className="text-center pl-3">
          {/* Cute Cat Mascot bouncing */}
          <div className="relative inline-block my-2">
            <div className="relative w-28 h-28 sm:w-32 sm:h-32 mx-auto animate-cute-wiggle">
              <Image
                src="/assets/stickers/sticker-cat.png"
                alt="Maskot Kucing Rosee"
                fill
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
            {/* Sparkle sticker next to cat */}
            <div className="absolute -top-2 -right-3 animate-pulse">
              <Image
                src="/assets/stickers/sticker-sparkle.png"
                alt="Sparkle"
                width={32}
                height={32}
                className="drop-shadow-sm"
              />
            </div>
            {/* Heart sticker on the left */}
            <div className="absolute -bottom-1 -left-3 animate-bounce">
              <Image
                src="/assets/stickers/sticker-heart-pink.png"
                alt="Heart"
                width={28}
                height={28}
                className="drop-shadow-sm"
              />
            </div>
          </div>

          {/* Heading */}
          <h2 className="font-barrio text-4xl sm:text-5xl text-[#EA3D91] tracking-wide mt-1">
            HALO!
          </h2>
          <p className="font-barrio text-xl sm:text-2xl text-[#1D232C] mt-1">
            Selamat Datang di Dunia Rosee ✨
          </p>
          <p className="font-caveat text-base sm:text-lg text-[#1760D5] font-bold mt-1">
            Rosdyanti Br Simarmata • Digital School Scrapbook
          </p>

          {/* Cute Colorful Progress Bar */}
          <div className="mt-6 mb-2">
            <div className="relative w-full h-5 bg-[#FAF0E6] rounded-full border-2 border-[#1D232C] overflow-hidden p-0.5 shadow-inner">
              <div
                className="h-full bg-gradient-to-r from-[#EA3D91] via-[#F58B25] to-[#1760D5] rounded-full animate-candy-bar transition-all duration-150 ease-out"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Dynamic Step Text */}
            <div className="flex items-center justify-between mt-2.5 px-1">
              <span className="font-marker text-xs sm:text-sm text-[#422006] font-bold text-left">
                {phaseText}
              </span>
              <span className="font-fredoka text-xs font-black text-[#EA3D91]">
                {progress}%
              </span>
            </div>
          </div>

          {/* Action Button: Buka Sekarang */}
          <div className="mt-5 pt-3 border-t-2 border-dashed border-amber-200">
            <button
              onClick={handleOpen}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#EA3D91] hover:bg-[#d62f80] active:scale-95 text-white font-fredoka text-sm sm:text-base font-bold px-6 py-3 rounded-2xl border-2 border-[#1D232C] shadow-scrapbook transition-transform cursor-pointer group"
            >
              <BookOpen className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              <span>Buka Scrapbook Sekarang!</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
