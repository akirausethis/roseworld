"use client";

import React from "react";
import { GraduationCap, BookOpen, Calendar, MapPin, Sparkles } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { PushPin } from "../scrapbook/PushPin";
import { WashiTape } from "../scrapbook/WashiTape";

export const EducationSection: React.FC = () => {
  const { education } = portfolioData;

  return (
    <section
      id="education"
      className="relative min-h-screen py-20 px-4 md:px-8 bg-notebook-lines overflow-hidden border-b-4 border-[#1D232C]"
    >
      {/* Decorative Washi Tapes */}
      <div className="absolute top-10 left-10 rotate-6 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="green" width="w-36 md:w-48" />
      </div>
      <div className="absolute top-12 right-12 -rotate-6 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="yellow" width="w-32 md:w-44" />
      </div>

      <div className="relative max-w-5xl mx-auto z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFFBF2] px-8 py-3 rounded-2xl border-4 border-[#1D232C] shadow-scrapbook rotate-1">
            <span className="font-barrio text-3xl md:text-4xl text-[#238B68] tracking-wide flex items-center justify-center gap-2">
              <GraduationCap className="w-8 h-8 text-[#1760D5]" /> RIWAYAT PENDIDIKAN
            </span>
            <p className="font-marker text-sm md:text-base text-[#4A5568] mt-1">
              Jejak Pembelajaran dari Pendidikan Menengah hingga Pendidikan Tinggi Hukum
            </p>
          </div>
        </div>

        {/* Notebook Timeline Cards */}
        <div className="space-y-8">
          {education.map((item, index) => {
            const isUnja = index === 0;
            return (
              <div
                key={item.institution}
                className={`relative bg-[#FFFBF2] p-6 md:p-8 rounded-3xl border-4 border-[#1D232C] shadow-scrapbook ${
                  isUnja ? "-rotate-1" : "rotate-1"
                } hover:rotate-0 hover:scale-[1.01] transition-all duration-300`}
              >
                {/* Washi Tape on Top */}
                <div className="absolute -top-4 left-12 z-20">
                  <WashiTape color={isUnja ? "blue" : "pink"} width="w-32 md:w-40" />
                </div>
                <div className="absolute -top-3 right-12 z-20">
                  <PushPin color={isUnja ? "blue" : "red"} size="md" />
                </div>

                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 bg-[#238B68] text-white font-fredoka text-xs md:text-sm font-bold px-3 py-1 rounded-full shadow-xs">
                      <Calendar className="w-3.5 h-3.5" /> {item.period}
                    </div>

                    <h3 className="font-fredoka text-2xl md:text-3xl font-bold text-[#1D232C] leading-tight">
                      {item.institution}
                    </h3>

                    {item.facultyStudy && (
                      <p className="font-fredoka text-base md:text-lg font-semibold text-[#1760D5]">
                        {item.facultyStudy}
                      </p>
                    )}

                    <div className="flex items-center gap-2 text-xs md:text-sm font-marker text-[#4A5568]">
                      <MapPin className="w-4 h-4 text-[#EA3D91]" />
                      <span>{item.location}</span>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-block bg-amber-100 text-amber-900 border-2 border-amber-300 font-fredoka text-xs md:text-sm font-bold px-3.5 py-1.5 rounded-xl shadow-xs">
                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Notes box */}
                <div className="mt-5 p-4 rounded-xl bg-stone-50 border-2 border-dashed border-stone-300">
                  <div className="flex items-start gap-2">
                    <BookOpen className="w-4 h-4 text-[#F58B25] shrink-0 mt-0.5" />
                    <p className="font-body text-xs md:text-sm text-[#4A5568] leading-relaxed">
                      {item.notes}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
