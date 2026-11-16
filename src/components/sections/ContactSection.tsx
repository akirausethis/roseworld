"use client";

import React from "react";
import Image from "next/image";
import { Mail, Sparkles, Heart, ExternalLink, MessageCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { portfolioData } from "@/data/portfolio-data";
import { Sticker } from "../scrapbook/Sticker";
import { WashiTape } from "../scrapbook/WashiTape";
import { PushPin } from "../scrapbook/PushPin";

export const ContactSection: React.FC = () => {
  const { profile } = portfolioData;

  const triggerBigConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.7 },
      colors: ["#EA3D91", "#1760D5", "#238B68", "#F58B25", "#FACC15", "#A855F7"]
    });
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-24 px-4 md:px-8 bg-[#1B4D3E] overflow-hidden"
      style={{
        backgroundImage: "url('/assets/backgrounds/bg-outdoor.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Semi-transparent overlay to ensure readability */}
      <div className="absolute inset-0 bg-[#0E2820]/70 backdrop-blur-[1px] pointer-events-none" />

      {/* Decorative Washi Tapes */}
      <div className="absolute top-10 left-12 rotate-12 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="yellow" width="w-40 md:w-56" />
      </div>
      <div className="absolute top-12 right-12 -rotate-12 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="pink" width="w-36 md:w-48" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Main Scrapbook Letter Box */}
        <div className="relative bg-[#FFFBF2] p-8 md:p-14 rounded-3xl border-4 border-[#1D232C] shadow-scrapbook -rotate-1 hover:rotate-0 transition-transform duration-300">
          {/* Top Washi Tape and Pins */}
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20">
            <WashiTape color="pink" width="w-44 md:w-60" />
          </div>
          <div className="absolute -top-3 left-12 z-20">
            <PushPin color="blue" size="md" />
          </div>
          <div className="absolute -top-3 right-12 z-20">
            <PushPin color="red" size="md" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Portrait and Stickers */}
            <div className="md:col-span-5 flex flex-col items-center">
              <div className="relative w-56 sm:w-64 md:w-72 aspect-[3/4] bg-white p-3.5 rounded-2xl shadow-polaroid border-3 border-[#1D232C] rotate-2 hover:rotate-0 transition-transform">
                {/* Heart sticker */}
                <div className="absolute -top-4 -right-4 z-30">
                  <Sticker
                    src="/assets/stickers/sticker-heart-pink.png"
                    alt="Heart sticker"
                    width={60}
                    height={60}
                    rotation="rotate-12"
                    withConfetti={true}
                  />
                </div>

                {/* Cat sticker */}
                <div className="absolute -bottom-6 -left-6 z-30">
                  <Sticker
                    src="/assets/stickers/sticker-cat.png"
                    alt="Cat sticker"
                    width={75}
                    height={85}
                    rotation="-rotate-6"
                    withConfetti={true}
                  />
                </div>

                <div className="relative w-full h-full overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src="/assets/portraits/portrait-closing.png"
                    alt="Rosdyanti Br Simarmata"
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 768px) 100vw, 320px"
                    priority
                  />
                </div>

                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#EA3D91] text-white font-fredoka font-bold text-xs px-4 py-1 rounded-full border-2 border-[#1D232C] shadow-md tracking-wider whitespace-nowrap">
                  ROSEE 2026 💖
                </div>
              </div>
            </div>

            {/* Right Column: Thank You Message & Contact Buttons */}
            <div className="md:col-span-7 space-y-6">
              {/* Repetitive Thank You typography from original PDF Page 6 */}
              <div>
                <div className="font-barrio text-4xl sm:text-5xl text-[#EA3D91] tracking-wider leading-none">
                  THANK YOU!
                </div>
                <div className="font-barrio text-2xl sm:text-3xl text-[#1760D5] opacity-80 tracking-wide mt-1">
                  Thank You • Thank You!
                </div>
                <p className="font-caveat text-2xl sm:text-3xl text-[#F58B25] font-bold mt-2 tracking-wide">
                  &ldquo;Feel excited to join and grow together!&rdquo; 🌱✨
                </p>
              </div>

              {/* Message Note */}
              <div className="bg-[#FFF8B8] p-4 rounded-xl border-2 border-dashed border-amber-400 rotate-1 shadow-sm">
                <p className="font-body text-sm sm:text-base text-[#1D232C] leading-relaxed">
                  Terima kasih banyak telah membaca dan menjelajahi portofolio scrapbook saya! Saya sangat antusias untuk berkolaborasi, belajar, dan berkontribusi secara positif baik di bidang hukum maupun kreasi media visual.
                </p>
              </div>

              {/* Functional Contact Channels */}
              <div className="space-y-3">
                <h4 className="font-fredoka text-base font-bold text-[#1D232C] flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#EA3D91]" /> Hubungi Saya Melalui:
                </h4>

                <div className="flex flex-col sm:flex-row gap-3">
                  {/* Email Button */}
                  <a
                    href={`mailto:${profile.contacts.email}`}
                    className="flex-1 flex items-center justify-center gap-2 bg-[#1760D5] hover:bg-blue-700 text-white font-fredoka text-sm font-bold px-4 py-3 rounded-xl border-2 border-[#1D232C] shadow-sm hover:scale-105 active:scale-95 transition-transform"
                  >
                    <Mail className="w-4 h-4" />
                    <span>Email Langsung</span>
                  </a>

                  {/* Instagram Button */}
                  <a
                    href={profile.contacts.instagramUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#EA3D91] hover:bg-pink-700 text-white font-fredoka text-sm font-bold px-4 py-3 rounded-xl border-2 border-[#1D232C] shadow-sm hover:scale-105 active:scale-95 transition-transform"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                    <span>Instagram {profile.contacts.instagram}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>

                {/* TikTok Channel */}
                <a
                  href={profile.contacts.tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 bg-stone-900 hover:bg-black text-white font-fredoka text-sm font-bold px-4 py-2.5 rounded-xl border-2 border-[#1D232C] shadow-sm hover:scale-105 active:scale-95 transition-transform"
                >
                  <MessageCircle className="w-4 h-4 text-cyan-400" />
                  <span>TikTok {profile.contacts.tiktok}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Celebrate Button */}
              <div className="pt-2">
                <button
                  onClick={triggerBigConfetti}
                  className="inline-flex items-center gap-2 bg-[#238B68] hover:bg-emerald-700 text-white font-fredoka text-sm font-bold px-5 py-2.5 rounded-full border-2 border-[#1D232C] shadow-sm hover:scale-105 active:scale-95 transition-transform cursor-pointer"
                >
                  <Heart className="w-4 h-4 fill-white" />
                  <span>Rayakan Scrapbook Rosee 🎉</span>
                </button>
              </div>
            </div>
          </div>

          {/* Footer note inside card */}
          <div className="mt-8 pt-4 border-t-2 border-dashed border-stone-300 flex flex-wrap items-center justify-between text-xs font-marker text-[#4A5568]">
            <p>
              © 2026 Rosdyanti Br Simarmata • Fakultas Hukum Universitas Jambi
            </p>
            <p className="font-caveat text-sm text-[#EA3D91] font-bold">
              Designed with love as an interactive digital scrapbook 💖
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
