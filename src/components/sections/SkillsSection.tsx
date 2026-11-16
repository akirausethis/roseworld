"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Palette, Scale, Users, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { WashiTape } from "../scrapbook/WashiTape";
import { PushPin } from "../scrapbook/PushPin";

export const SkillsSection: React.FC = () => {
  const { skillCategories, supportingApps } = portfolioData;

  const cardConfig = [
    {
      bg: "bg-[#FFFDF9] border-[#EA3D91]",
      headerBg: "bg-[#EA3D91] text-white",
      pinColor: "pink" as const,
      rotation: "-rotate-1",
      icon: <Palette className="w-5 h-5 text-white" />
    },
    {
      bg: "bg-[#FFFDF9] border-[#1760D5]",
      headerBg: "bg-[#1760D5] text-white",
      pinColor: "blue" as const,
      rotation: "rotate-1",
      icon: <Scale className="w-5 h-5 text-white" />
    },
    {
      bg: "bg-[#FFFDF9] border-[#238B68]",
      headerBg: "bg-[#238B68] text-white",
      pinColor: "green" as const,
      rotation: "-rotate-2",
      icon: <Users className="w-5 h-5 text-white" />
    }
  ];

  return (
    <section
      id="skills"
      className="relative min-h-screen py-20 px-4 md:px-8 bg-[#8C522B] overflow-hidden border-b-4 border-[#1D232C]"
      style={{
        backgroundImage: "url('/assets/backgrounds/bg-corkboard.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark warm overlay */}
      <div className="absolute inset-0 bg-[#5C3014]/60 backdrop-blur-[0.5px] pointer-events-none" />

      {/* Floating decorative washi tape */}
      <div className="absolute top-10 left-8 md:left-20 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="yellow" width="w-36 md:w-48" />
      </div>
      <div className="absolute top-8 right-10 md:right-24 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="pink" width="w-40 md:w-52" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Header Paper Note */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFFBF2] px-8 py-3 rounded-2xl border-4 border-[#1D232C] shadow-scrapbook -rotate-1 hover:rotate-0 transition-transform">
            <span className="font-barrio text-3xl md:text-4xl text-[#F58B25] tracking-wide flex items-center justify-center gap-2">
              <Sparkles className="w-7 h-7 text-[#EA3D91]" /> SKILLS &amp; EXPERIENCES
            </span>
            <p className="font-marker text-sm md:text-base text-[#4A5568] mt-1">
              Keahlian Kreatif, Kemampuan Akademik Hukum, dan Keterampilan Personal
            </p>
          </div>
        </div>

        {/* 3 Scrapbook Paper Notes on Corkboard */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {skillCategories.map((category, idx) => {
            const config = cardConfig[idx % cardConfig.length];
            return (
              <div
                key={category.title}
                className={`relative p-6 md:p-7 rounded-2xl shadow-lifted border-3 ${config.bg} ${config.rotation} hover:rotate-0 hover:scale-[1.02] transition-all duration-300`}
              >
                {/* Push Pin */}
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                  <PushPin color={config.pinColor} size="md" />
                </div>

                {/* Section Header Tag */}
                <div className={`-mt-2 mb-5 px-4 py-2 rounded-xl flex items-center gap-2.5 shadow-sm ${config.headerBg}`}>
                  {config.icon}
                  <h3 className="font-fredoka text-base md:text-lg font-bold tracking-wide">
                    {category.title}
                  </h3>
                </div>

                {/* Skills List */}
                <ul className="space-y-3.5">
                  {category.skills.map((skill, sIdx) => (
                    <li
                      key={sIdx}
                      className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 shadow-xs hover:bg-stone-100/80 transition-colors"
                    >
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#238B68] shrink-0 mt-0.5" />
                        <div>
                          <p className="font-fredoka text-sm md:text-base font-bold text-[#1D232C]">
                            {skill.name}
                          </p>
                          {skill.description && (
                            <p className="font-body text-xs md:text-sm text-[#4A5568] mt-0.5 leading-snug">
                              {skill.description}
                            </p>
                          )}
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Corner folded effect */}
                <div
                  className="absolute bottom-0 right-0 w-6 h-6 bg-black/10 pointer-events-none"
                  style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }}
                />
              </div>
            );
          })}
        </div>

        {/* APLIKASI PENDUKUNG — DIGITAL SCRAPBOOK BOARD */}
        <div className="mt-16 relative bg-[#D9EEF9] p-6 sm:p-8 md:p-10 rounded-3xl border-4 border-[#1D232C] shadow-scrapbook rotate-[-0.5deg] hover:rotate-0 transition-transform duration-300">
          {/* Push Pin on Top */}
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
            <PushPin color="blue" size="lg" />
          </div>

          {/* Top Left Washi Tape */}
          <div className="absolute -top-3 left-6 -rotate-6 z-20 pointer-events-none hidden sm:block">
            <WashiTape color="pink" width="w-32 md:w-40" />
          </div>

          {/* Curled / Folded Corner on Top Right */}
          <div
            className="absolute top-0 right-0 w-12 h-12 bg-white/70 border-b-2 border-l-2 border-[#1D232C]/30 shadow-xs pointer-events-none rounded-bl-xl"
            style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
          />

          {/* Floating Sticker: Orange Arrow */}
          <div className="absolute top-4 right-16 sm:right-24 w-12 sm:w-16 h-12 sm:h-16 pointer-events-none z-10 hidden sm:block animate-cute-wiggle">
            <Image
              src="/assets/apps/sticker-arrow-orange-clean.png"
              alt="Doodle Panah"
              fill
              className="object-contain drop-shadow-sm"
            />
          </div>

          {/* Floating Sticker: Green Exclamation !! */}
          <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 w-16 sm:w-20 h-20 sm:h-24 pointer-events-none z-10 hidden md:block rotate-12">
            <Image
              src="/assets/apps/sticker-exclamation-clean.png"
              alt="Stiker Tanda Seru"
              fill
              className="object-contain drop-shadow-md"
            />
          </div>

          {/* Header Strip: Orange Banner "Aplikasi pendukung" */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
            <div className="inline-flex items-center gap-2">
              <div className="inline-block bg-[#F58B25] text-white font-fredoka text-xl sm:text-2xl md:text-3xl font-black px-6 py-2.5 rounded-xl border-3 border-[#1D232C] shadow-scrapbook -rotate-1">
                Aplikasi pendukung
              </div>
            </div>

            <p className="font-caveat text-lg sm:text-xl text-[#1760D5] font-bold">
              &ldquo;Tools kreatif untuk kreasi konten, desain grafis &amp; media visual&rdquo; ✨
            </p>
          </div>

          {/* 6 Apps Grid with Authentic Colorful Folder Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-5 relative z-10">
            {supportingApps.map((app) => (
              <div
                key={app.id}
                className={`group relative bg-white/95 p-3.5 sm:p-4 rounded-2xl border-2 border-[#1D232C] shadow-sm hover:shadow-lifted hover:scale-105 hover:bg-white transition-all duration-300 ${app.rotation} hover:rotate-0 flex flex-col items-center justify-between text-center`}
              >
                {/* Folder Graphic with App Logo */}
                <div className="relative w-20 h-18 sm:w-24 sm:h-20 my-1 transition-transform group-hover:scale-110">
                  <Image
                    src={app.folderImage}
                    alt={`${app.name} Folder Icon`}
                    fill
                    className="object-contain drop-shadow-md"
                    sizes="120px"
                  />
                </div>

                {/* App Name */}
                <h4 className="font-barrio text-base sm:text-lg text-[#1D232C] tracking-wide mt-2">
                  {app.name}
                </h4>

                {/* Role Pill */}
                <span
                  className={`inline-block font-fredoka text-[10px] sm:text-[11px] font-bold px-2 py-0.5 rounded-md border mt-1 ${app.badgeBg} ${app.badgeBorder} ${app.badgeText}`}
                >
                  {app.role}
                </span>

                {/* Description */}
                <p className="font-body text-xs text-[#4A5568] mt-2 leading-relaxed">
                  {app.description}
                </p>
              </div>
            ))}
          </div>

          {/* Bottom Footer Note inside Blue Paper */}
          <div className="mt-8 pt-4 border-t-2 border-dashed border-[#1760D5]/30 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F58B25] animate-ping" />
              <p className="font-marker text-xs sm:text-sm text-[#1D232C]">
                🎨 Berdasarkan dokumentasi portofolio asli: digunakan untuk mengkreasikan konten edukasi hukum, desain cover buku SMA, materi lomba Hari Ozon 2023, dan dokumentasi visual.
              </p>
            </div>

            <div className="inline-block bg-[#FFF8B8] px-4 py-1.5 rounded-xl border border-[#1D232C] shadow-xs rotate-1">
              <span className="font-caveat text-sm sm:text-base font-bold text-[#422006]">
                6 Aplikasi Utama Rosee 💡
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
