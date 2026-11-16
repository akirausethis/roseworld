"use client";

import React from "react";
import { Sparkles, Palette, Scale, Users, Camera, CheckCircle2 } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { Sticker } from "../scrapbook/Sticker";
import { WashiTape } from "../scrapbook/WashiTape";
import { PushPin } from "../scrapbook/PushPin";
import { Doodle } from "../scrapbook/DoodleStars";

export const SkillsSection: React.FC = () => {
  const { skillCategories } = portfolioData;

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

      {/* Floating decorative stickers & washi tape */}
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

        {/* Decorative Floating Stickers on Corkboard */}
        <div className="mt-12 flex flex-wrap items-center justify-around gap-6">
          <div className="bg-[#FFFBF2] p-4 rounded-xl border-2 border-[#1D232C] shadow-scrapbook rotate-2 flex items-center gap-3">
            <Sticker
              src="/assets/stickers/sticker-camera.png"
              alt="Camera Sticker"
              width={55}
              height={50}
              interactive={false}
            />
            <div>
              <p className="font-fredoka text-sm font-bold text-[#1760D5]">
                Aplikasi Pendukung &amp; Media:
              </p>
              <p className="font-marker text-xs text-[#4A5568]">
                Canva, CapCut, Microsoft 365, Social Content
              </p>
            </div>
          </div>

          <div className="bg-[#FFF8B8] p-3.5 px-6 rounded-xl border-2 border-dashed border-amber-400 shadow-sm -rotate-2">
            <p className="font-caveat text-xl font-bold text-[#1D232C]">
              &ldquo;Berbagi ide melalui visual dan aksi nyata!&rdquo; 🎨
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
