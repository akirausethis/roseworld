"use client";

import React from "react";
import Image from "next/image";
import { Heart, Scale, Sparkles, Camera, Palette, FileText } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Sticker } from "../scrapbook/Sticker";
import { WashiTape } from "../scrapbook/WashiTape";
import { PushPin } from "../scrapbook/PushPin";
import { Doodle } from "../scrapbook/DoodleStars";

export const AboutSection: React.FC = () => {
  const { profile } = portfolioData;

  return (
    <section
      id="about"
      className="relative min-h-screen py-20 px-4 md:px-8 bg-[#1B6F4F] overflow-hidden border-b-4 border-[#1D232C]"
      style={{
        backgroundImage: "url('/assets/backgrounds/bg-green-locker.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay for rich contrast */}
      <div className="absolute inset-0 bg-[#0F4732]/75 backdrop-blur-[1px] pointer-events-none" />

      {/* Decorative Washi Tapes */}
      <div className="absolute top-6 left-12 rotate-6 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="pink" width="w-36 md:w-48" />
      </div>
      <div className="absolute top-12 right-10 -rotate-6 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="yellow" width="w-32 md:w-44" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Heading Badge */}
        <div className="text-center mb-10">
          <div className="inline-block bg-[#FFFBF2] px-6 py-2 rounded-full border-3 border-[#1D232C] shadow-scrapbook -rotate-1">
            <span className="font-barrio text-2xl md:text-3xl text-[#EA3D91] tracking-wide flex items-center gap-2">
              <Sparkles className="w-6 h-6 text-[#F58B25]" /> GET TO KNOW ME!
            </span>
          </div>
          <p className="font-caveat text-xl md:text-2xl text-[#FFF8B8] font-bold mt-2 tracking-wide drop-shadow-md">
            Mengenal Lebih Dekat Rosdyanti &amp; Dunia Kreatifnya
          </p>
        </div>

        {/* Central Scrapbook Composition: Pink Grid Panel on Green Locker */}
        <div className="relative bg-grid-pink rounded-3xl p-6 md:p-12 shadow-scrapbook border-4 border-[#1D232C]">
          {/* Top Washi Tape & Pins */}
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
            <WashiTape color="yellow" width="w-40 md:w-56" />
          </div>
          <div className="absolute -top-3 left-10 z-20">
            <PushPin color="pink" size="md" />
          </div>
          <div className="absolute -top-3 right-10 z-20">
            <PushPin color="green" size="md" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Column: Scrapbook Heart-framed Portrait */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-64 sm:w-72 md:w-80 aspect-[4/5] bg-white p-3.5 rounded-2xl shadow-polaroid border-3 border-[#1D232C] -rotate-2 hover:rotate-0 transition-transform duration-300">
                {/* Heart Sticker on top-left */}
                <div className="absolute -top-5 -left-5 z-30">
                  <Sticker
                    src="/assets/stickers/sticker-heart-pink.png"
                    alt="Heart sticker"
                    width={65}
                    height={65}
                    rotation="-rotate-12"
                    withConfetti={true}
                  />
                </div>

                {/* Doodle Flower on bottom-right */}
                <div className="absolute -bottom-5 -right-5 z-30">
                  <Sticker
                    src="/assets/stickers/sticker-doodle-flower.png"
                    alt="Flower doodle"
                    width={55}
                    height={55}
                    rotation="rotate-12"
                  />
                </div>

                {/* Portrait Photo */}
                <div className="relative w-full h-full overflow-hidden rounded-xl bg-stone-100">
                  <Image
                    src="/assets/portraits/portrait-bookstore-solo.jpg"
                    alt="Foto Profil Rosdyanti Br Simarmata"
                    fill
                    className="object-cover object-[center_55%]"
                    sizes="(max-width: 768px) 100vw, 350px"
                    priority
                  />
                </div>

                {/* Green Name Badge (from original PDF page 2) */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#238B68] text-white font-fredoka font-bold text-base px-5 py-1 rounded-full border-2 border-[#1D232C] shadow-md tracking-wider flex items-center gap-1.5 whitespace-nowrap">
                  <span>ROSEE</span>
                  <Heart className="w-4 h-4 fill-white" />
                </div>
              </div>

              {/* Identity Details Card */}
              <div className="mt-8 bg-[#FFFBF2] p-4 rounded-xl border-2 border-[#1D232C] shadow-sm text-center w-full max-w-xs rotate-1">
                <p className="font-fredoka text-lg font-bold text-[#1760D5]">
                  {profile.name}
                </p>
                <p className="font-marker text-sm text-[#4A5568] mt-0.5">
                  {profile.faculty} • {profile.university}
                </p>
                <span className="inline-block mt-1.5 bg-[#EA3D91] text-white font-fredoka text-xs font-bold px-3 py-0.5 rounded-full">
                  {profile.cohort}
                </span>
              </div>
            </div>

            {/* Right Column: Introduction Note & Key Focus Areas */}
            <div className="lg:col-span-7 space-y-6">
              {/* Paper Letter Card */}
              <div className="relative bg-[#FFFBF2] p-6 md:p-8 rounded-2xl border-3 border-[#1D232C] shadow-sm rotate-1 hover:rotate-0 transition-transform">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-barrio text-2xl text-[#1760D5]">
                    Hello, Saya Rosdyanti Br Simarmata!
                  </span>
                </div>

                <p className="font-body text-base md:text-lg text-[#1D232C] leading-relaxed">
                  {profile.bio}
                </p>

                <div className="mt-4 pt-4 border-t-2 border-dashed border-stone-200">
                  <h4 className="font-fredoka text-base font-bold text-[#EA3D91] mb-1 flex items-center gap-2">
                    <Palette className="w-4 h-4" /> Keterampilan &amp; Latar Belakang Kreatif:
                  </h4>
                  <p className="font-body text-sm md:text-base text-[#4A5568] leading-relaxed">
                    {profile.creativeSummary}
                  </p>
                </div>
              </div>

              {/* Interests & Focus Areas */}
              <div>
                <h4 className="font-fredoka text-lg font-bold text-[#1D232C] mb-3 flex items-center gap-2">
                  <Scale className="w-5 h-5 text-[#1760D5]" />
                  <span>Bidang Minat &amp; Ketertarikan:</span>
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                  {profile.interests.map((interest, idx) => {
                    const colors = [
                      "bg-[#FFF8B8] border-amber-300 text-[#422006]",
                      "bg-[#E3F2FD] border-blue-300 text-[#1E3A8A]",
                      "bg-[#FCE4EC] border-pink-300 text-[#4A044E]",
                      "bg-[#E8F5E9] border-emerald-300 text-[#064E3B]",
                      "bg-[#FFE0B2] border-orange-300 text-[#7C2D12]",
                      "bg-[#F3E8FF] border-purple-300 text-[#581C87]"
                    ];
                    return (
                      <div
                        key={idx}
                        className={`p-3 rounded-xl border-2 shadow-xs transition-transform hover:-translate-y-1 hover:shadow-sm ${colors[idx % colors.length]}`}
                      >
                        <p className="font-fredoka text-xs sm:text-sm font-semibold leading-snug">
                          {interest}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quote / Scrapbook Annotation */}
              <div className="bg-[#FFF8B8] p-3.5 rounded-xl border-2 border-dashed border-amber-400 flex items-center gap-3 -rotate-1">
                <span className="font-caveat text-2xl font-bold text-[#EA3D91]">
                  &ldquo;Penting untuk mengabadikan setiap momen dan menciptakan kreativitas yang lebih menarik!&rdquo;
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
