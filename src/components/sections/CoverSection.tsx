"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles, BookOpen, Download, FileDown } from "lucide-react";
import confetti from "canvas-confetti";
import { Sticker } from "../scrapbook/Sticker";
import { WashiTape } from "../scrapbook/WashiTape";
import { PushPin } from "../scrapbook/PushPin";
import { Doodle } from "../scrapbook/DoodleStars";

export const CoverSection: React.FC = () => {
  const triggerConfetti = () => {
    confetti({
      particleCount: 45,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#EA3D91", "#1760D5", "#238B68", "#F58B25", "#FFD200"]
    });
  };

  return (
    <section
      id="cover"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 px-4 md:px-8 bg-grid-blue overflow-hidden border-b-4 border-[#1D232C]"
    >
      {/* Decorative Washi Tapes in background corners */}
      <div className="absolute -top-4 -left-6 rotate-12 z-10 pointer-events-none">
        <WashiTape color="pink" width="w-40 md:w-56" />
      </div>
      <div className="absolute top-16 -right-8 -rotate-12 z-10 pointer-events-none">
        <WashiTape color="yellow" width="w-36 md:w-48" />
      </div>

      {/* Floating Doodles */}
      <div className="absolute top-28 left-8 md:left-24 z-10 pointer-events-none hidden sm:block">
        <Doodle type="star" color="#F58B25" size={44} />
      </div>
      <div className="absolute bottom-20 left-12 z-10 pointer-events-none hidden md:block">
        <Doodle type="squiggle" color="#EA3D91" size={70} />
      </div>
      <div className="absolute top-36 right-12 md:right-28 z-10 pointer-events-none hidden sm:block">
        <Doodle type="sparkle" color="#1760D5" size={40} />
      </div>

      {/* Main Central Notebook Scrapbook Composition */}
      <div className="relative max-w-4xl w-full bg-[#FFFBF2] rounded-3xl p-6 md:p-12 shadow-scrapbook border-4 border-[#1D232C] -rotate-1 hover:rotate-0 transition-transform duration-300">
        {/* Top Pins and Tape */}
        <div className="absolute -top-4 left-1/4 -translate-x-1/2 z-20">
          <PushPin color="red" size="md" />
        </div>
        <div className="absolute -top-4 right-1/4 translate-x-1/2 z-20">
          <PushPin color="blue" size="md" />
        </div>
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
          <WashiTape color="green" width="w-32 md:w-44" />
        </div>

        {/* Notebook Spiral / Ring Binder simulation on left side */}
        <div className="absolute -left-3 md:-left-4 top-12 bottom-12 flex flex-col justify-around pointer-events-none z-30">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-5 h-2.5 md:w-7 md:h-3.5 bg-gradient-to-r from-stone-400 via-stone-200 to-stone-500 rounded-full border border-stone-600 shadow-sm"
            />
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          {/* Left Column: Lettering & Information */}
          <div className="md:col-span-7 flex flex-col items-start space-y-4">
            {/* Year Tag Badge */}
            <div className="inline-flex items-center gap-2 bg-[#EA3D91] text-white font-fredoka px-4 py-1.5 rounded-full text-base font-bold shadow-sm -rotate-2">
              <Sparkles className="w-4 h-4" />
              <span>PORTOFOLIO 2026</span>
            </div>

            {/* Greeting & Headline */}
            <div>
              <p className="font-caveat text-3xl md:text-4xl font-bold text-[#F58B25] -rotate-1 tracking-wide">
                HALO!
              </p>
              <h1 className="font-barrio text-4xl sm:text-5xl lg:text-6xl text-[#1760D5] tracking-wide leading-tight mt-1">
                SAYA ROSDYANTI
                <span className="block text-[#EA3D91] text-3xl sm:text-4xl lg:text-5xl mt-1">
                  BR SIMARMATA
                </span>
              </h1>
            </div>

            {/* Role / Tagline Note */}
            <div className="bg-[#FFF8B8] p-3.5 md:p-4 rounded-xl border-2 border-dashed border-amber-400 shadow-sm rotate-1 w-full max-w-md">
              <p className="font-marker text-base md:text-lg text-[#1D232C] leading-snug">
                Mahasiswi Fakultas Hukum Universitas Jambi • Penggiat Desain Grafis &amp; Dokumentasi Media Visual
              </p>
              <div className="mt-2 flex items-center gap-2">
                <span className="bg-[#238B68] text-white font-fredoka text-xs font-bold px-2.5 py-0.5 rounded-md">
                  DIVISI PDD
                </span>
                <span className="font-caveat text-lg font-bold text-[#1760D5]">
                  is my choice! ✨
                </span>
              </div>
            </div>

            {/* Interactive Call to Action */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#about"
                onClick={triggerConfetti}
                className="group inline-flex items-center gap-2.5 bg-[#EA3D91] hover:bg-[#D43B7E] text-white font-fredoka text-lg md:text-xl font-bold px-6 py-3 rounded-full border-3 border-[#1D232C] shadow-scrapbook hover:scale-105 active:scale-95 transition-all"
              >
                <BookOpen className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                <span>Buka Portofolio Saya</span>
                <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
              </a>

              <a
                href="#gallery"
                className="inline-flex items-center gap-2 bg-[#FFFBF2] hover:bg-stone-100 text-[#1D232C] font-fredoka text-base font-semibold px-5 py-3 rounded-full border-2 border-[#1D232C] shadow-sm hover:scale-105 transition-transform"
              >
                <span>Lihat Karya Saya</span>
              </a>
            </div>

            {/* Document Download Options */}
            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <span className="font-caveat text-base md:text-lg text-[#1D232C] font-bold">
                Unduh Berkas Resmi:
              </span>
              <a
                href="/documents/CV_Rosdyanti_Br_Simarmata.pdf"
                download="CV_Rosdyanti_Br_Simarmata.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#FFF8B8] hover:bg-yellow-200 text-[#422006] font-fredoka text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl border-2 border-[#1D232C] shadow-xs hover:scale-105 active:scale-95 transition-transform"
                title="Download CV Resmi Rosdyanti (PDF)"
              >
                <FileDown className="w-4 h-4 text-[#F58B25]" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="/documents/Portofolio_Rosdyanti_Br_Simarmata.pdf"
                download="Portofolio_Rosdyanti_Br_Simarmata.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 bg-[#E3F2FD] hover:bg-blue-100 text-[#0C4A6E] font-fredoka text-xs sm:text-sm font-bold px-3.5 py-2 rounded-xl border-2 border-[#1D232C] shadow-xs hover:scale-105 active:scale-95 transition-transform"
                title="Download Dokumen Portofolio Asli (PDF)"
              >
                <Download className="w-4 h-4 text-[#1760D5]" />
                <span>Download Portofolio (PDF)</span>
              </a>
            </div>
          </div>

          {/* Right Column: Original Portrait Cutout & Iconic Stickers */}
          <div className="md:col-span-5 relative flex flex-col items-center justify-center">
            {/* The Cutout Photo in Scrapbook Frame */}
            <div className="relative w-56 sm:w-64 md:w-72 aspect-[3/4] bg-white p-3 rounded-2xl shadow-polaroid border-3 border-[#1D232C] rotate-3 hover:rotate-0 transition-transform duration-300">
              {/* Paperclip sticker on photo corner */}
              <div className="absolute -top-3 -right-2 z-30">
                <Sticker
                  src="/assets/stickers/sticker-paperclip.png"
                  alt="Paper clip"
                  width={40}
                  height={50}
                  rotation="rotate-12"
                />
              </div>

              {/* Photo */}
              <div className="relative w-full h-full overflow-hidden rounded-xl bg-stone-100">
                <Image
                  src="/assets/portraits/portrait-cover.png"
                  alt="Rosdyanti Br Simarmata"
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Rosdyanti's handwritten name badge */}
              <div className="absolute -bottom-4 -left-4 bg-[#238B68] text-white font-fredoka font-bold text-sm px-3.5 py-1 rounded-full border-2 border-[#1D232C] shadow-md -rotate-6">
                ROSEE 🌸
              </div>
            </div>

            {/* The Iconic Cat Sticker from the original cover */}
            <div className="absolute -bottom-8 -right-4 md:-right-6 z-30">
              <Sticker
                src="/assets/stickers/sticker-cat.png"
                alt="Cute Cat Sticker"
                width={95}
                height={105}
                rotation="-rotate-6"
                withConfetti={true}
              />
            </div>

            {/* Pencil Sticker */}
            <div className="absolute -top-6 -left-6 z-20 hidden sm:block">
              <Sticker
                src="/assets/stickers/sticker-pencil.png"
                alt="Pencil Sticker"
                width={70}
                height={70}
                rotation="rotate-45"
              />
            </div>

            {/* Star Sticker */}
            <div className="absolute top-2 right-2 z-20">
              <Sticker
                src="/assets/stickers/sticker-star-orange.png"
                alt="Star Sticker"
                width={45}
                height={45}
                rotation="-rotate-12"
              />
            </div>
          </div>
        </div>

        {/* Bottom Small Stationery Bar */}
        <div className="mt-8 pt-4 border-t-2 border-dashed border-stone-300 flex flex-wrap items-center justify-between text-xs md:text-sm font-marker text-[#4A5568]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#1760D5]" />
            <span>Fakultas Hukum Universitas Jambi</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EA3D91]" />
            <span>Desain Grafis &amp; Dokumentasi</span>
          </div>
          <div className="font-caveat text-base text-[#F58B25] font-bold">
            Klik stiker untuk kejutan! 🌟
          </div>
        </div>
      </div>
    </section>
  );
};
