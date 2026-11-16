"use client";

import React from "react";
import { Users, Award, Calendar, MapPin, Sparkles, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { PushPin } from "../scrapbook/PushPin";
import { WashiTape } from "../scrapbook/WashiTape";

export const OrganizationSection: React.FC = () => {
  const { organizationalExperience } = portfolioData;

  const pinColors: ("red" | "yellow" | "blue" | "pink" | "green" | "gold")[] = [
    "blue",
    "pink",
    "gold",
    "green"
  ];

  return (
    <section
      id="organizations"
      className="relative min-h-screen py-20 px-4 md:px-8 bg-grid-pink overflow-hidden border-b-4 border-[#1D232C]"
    >
      {/* Background decorations */}
      <div className="absolute top-8 left-8 rotate-12 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="blue" width="w-36 md:w-48" />
      </div>
      <div className="absolute top-12 right-12 -rotate-12 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="green" width="w-32 md:w-44" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFFBF2] px-8 py-3 rounded-2xl border-4 border-[#1D232C] shadow-scrapbook rotate-1">
            <span className="font-barrio text-3xl md:text-4xl text-[#EA3D91] tracking-wide flex items-center justify-center gap-2">
              <Users className="w-7 h-7 text-[#1760D5]" /> PENGALAMAN ORGANISASI
            </span>
            <p className="font-marker text-sm md:text-base text-[#4A5568] mt-1">
              Jejak Keaktifan dan Kepemimpinan di Kampus &amp; Sekolah
            </p>
          </div>
        </div>

        {/* Scrapbook Timeline / Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {organizationalExperience.map((item, index) => {
            return (
              <div
                key={item.id}
                className={`relative bg-[#FFFBF2] p-6 md:p-8 rounded-2xl border-3 border-[#1D232C] shadow-scrapbook ${item.rotation || "rotate-0"} hover:rotate-0 hover:scale-[1.01] hover:shadow-lifted transition-all duration-300 flex flex-col justify-between`}
              >
                {/* Push Pin */}
                <div className="absolute -top-3.5 left-10 z-20">
                  <PushPin color={pinColors[index % pinColors.length]} size="md" />
                </div>

                <div>
                  {/* Top Meta: Year & Scope Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-4 pb-3 border-b-2 border-dashed border-stone-200">
                    <span
                      className="font-fredoka text-xs md:text-sm font-bold text-white px-3.5 py-1 rounded-full shadow-xs flex items-center gap-1.5"
                      style={{ backgroundColor: item.badgeColor }}
                    >
                      <Calendar className="w-3.5 h-3.5" /> {item.year}
                    </span>
                    <span className="font-marker text-xs md:text-sm text-stone-600 bg-stone-100 px-3 py-1 rounded-md border border-stone-300">
                      {item.scope}
                    </span>
                  </div>

                  {/* Organization & Role */}
                  <h3 className="font-fredoka text-xl md:text-2xl font-bold text-[#1D232C] leading-snug">
                    {item.organization}
                  </h3>
                  <div className="inline-block mt-1 bg-amber-100 text-amber-900 font-fredoka text-xs md:text-sm font-bold px-3 py-0.5 rounded-full border border-amber-300">
                    Posisi: {item.role}
                  </div>

                  {/* Description */}
                  <p className="font-body text-sm md:text-base text-[#4A5568] mt-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights Bullet points */}
                  <div className="mt-4 pt-3 border-t border-stone-200/80">
                    <h4 className="font-fredoka text-xs md:text-sm font-bold text-[#1D232C] mb-2 flex items-center gap-1.5">
                      <Sparkles className="w-4 h-4 text-[#F58B25]" /> Peran &amp; Kegiatan Utama:
                    </h4>
                    <ul className="space-y-1.5">
                      {item.highlights.map((h, hIdx) => (
                        <li
                          key={hIdx}
                          className="font-body text-xs md:text-sm text-stone-700 flex items-start gap-2"
                        >
                          <CheckCircle className="w-3.5 h-3.5 text-[#238B68] shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Bottom decorative sticker-like ribbon */}
                <div className="mt-6 pt-3 border-t-2 border-dashed border-stone-200 flex items-center justify-between font-caveat text-base text-[#1760D5] font-bold">
                  <span>Universitas Jambi / SMA</span>
                  <span>Scrapbook Card #{index + 1}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
