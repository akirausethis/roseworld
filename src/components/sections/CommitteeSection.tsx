"use client";

import React from "react";
import { Camera, Palette, Sparkles, CheckSquare, Calendar, Globe, Building } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { WashiTape } from "../scrapbook/WashiTape";
import { PushPin } from "../scrapbook/PushPin";

export const CommitteeSection: React.FC = () => {
  const { committeeExperience } = portfolioData;

  return (
    <section
      id="committees"
      className="relative min-h-screen py-20 px-4 md:px-8 bg-grid-blue overflow-hidden border-b-4 border-[#1D232C]"
    >
      {/* Decorative Washi Tapes */}
      <div className="absolute top-10 right-10 rotate-6 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="yellow" width="w-36 md:w-48" />
      </div>
      <div className="absolute top-12 left-10 -rotate-6 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="pink" width="w-32 md:w-44" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFFBF2] px-8 py-3 rounded-2xl border-4 border-[#1D232C] shadow-scrapbook -rotate-1">
            <span className="font-barrio text-3xl md:text-4xl text-[#1760D5] tracking-wide flex items-center justify-center gap-2">
              <Camera className="w-7 h-7 text-[#EA3D91]" /> PENGALAMAN KEPANITIAAN
            </span>
            <p className="font-marker text-sm md:text-base text-[#4A5568] mt-1">
              Divisi Publikasi, Dekorasi, dan Dokumentasi (PDD) — Unja Law Fair &amp; Natal FH
            </p>
          </div>
        </div>

        {/* Project Boards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {committeeExperience.map((item, index) => {
            const isBlue = index === 0;
            return (
              <div
                key={item.id}
                className={`relative bg-[#FFFBF2] p-6 md:p-8 rounded-3xl border-4 border-[#1D232C] shadow-scrapbook ${
                  isBlue ? "-rotate-1" : "rotate-1"
                } hover:rotate-0 hover:scale-[1.01] transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Top Center Washi Tape */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                  <WashiTape color={isBlue ? "blue" : "pink"} width="w-36 md:w-48" />
                </div>

                <div>
                  {/* Event Meta Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-dashed border-stone-300">
                    <span className="inline-flex items-center gap-1.5 bg-[#EA3D91] text-white font-fredoka text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-xs">
                      <Calendar className="w-3.5 h-3.5" /> {item.year}
                    </span>
                    <span className="font-marker text-xs md:text-sm text-[#1D232C] bg-amber-100 px-3 py-1 rounded-lg border border-amber-300 flex items-center gap-1">
                      {item.scope === "Nasional" ? (
                        <Globe className="w-3.5 h-3.5 text-blue-600" />
                      ) : (
                        <Building className="w-3.5 h-3.5 text-pink-600" />
                      )}
                      <span>Tingkat: {item.scope}</span>
                    </span>
                  </div>

                  {/* Event Title */}
                  <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-[#1D232C] leading-tight">
                    {item.event}
                  </h3>
                  <p className="font-marker text-sm text-[#4A5568] mt-0.5">
                    {item.institution}
                  </p>

                  {/* Division Badge */}
                  <div className="mt-4 p-3.5 rounded-xl bg-stone-100 border-2 border-[#1D232C] shadow-xs">
                    <div className="flex items-center gap-2">
                      <Palette className="w-4 h-4 text-[#EA3D91]" />
                      <span className="font-fredoka text-xs md:text-sm font-bold text-[#1D232C]">
                        Divisi: {item.division}
                      </span>
                    </div>
                    <p className="font-marker text-xs text-[#238B68] font-bold mt-0.5">
                      Posisi: {item.role}
                    </p>
                  </div>

                  {/* Responsibilities list */}
                  <div className="mt-5 space-y-2.5">
                    <h4 className="font-fredoka text-sm font-bold text-[#1D232C] flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#F58B25]" /> Tanggung Jawab &amp; Kontribusi:
                    </h4>
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="p-2.5 rounded-lg bg-white border border-stone-200 text-xs md:text-sm font-body text-stone-700 flex items-start gap-2.5 shadow-xs"
                        >
                          <CheckSquare className="w-4 h-4 text-[#1760D5] shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom Quote / Tag */}
                <div className="mt-6 pt-3 border-t-2 border-dashed border-stone-200 flex items-center justify-between text-xs font-marker text-[#4A5568]">
                  <span className="font-caveat text-base text-[#F58B25] font-bold">
                    &ldquo;PDD is my choice&rdquo; ✨
                  </span>
                  <span>Fakultas Hukum Universitas Jambi</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
