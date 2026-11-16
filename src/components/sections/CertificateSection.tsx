"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Award, Trophy, Sparkles, ZoomIn, Calendar, CheckCircle } from "lucide-react";
import { portfolioData } from "@/data/portfolio-data";
import { PushPin } from "../scrapbook/PushPin";
import { WashiTape } from "../scrapbook/WashiTape";
import { ArtworkModal } from "../gallery/ArtworkModal";

export const CertificateSection: React.FC = () => {
  const { achievements } = portfolioData;
  const [modalOpen, setModalOpen] = useState(false);

  const mainCert = achievements[0]; // Mikroskil
  const otherAchievements = achievements.slice(1);

  return (
    <section
      id="certificates"
      className="relative min-h-screen py-20 px-4 md:px-8 bg-grid-blue overflow-hidden border-b-4 border-[#1D232C]"
    >
      {/* Background washi tapes */}
      <div className="absolute top-8 left-12 rotate-12 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="pink" width="w-40 md:w-52" />
      </div>
      <div className="absolute top-12 right-12 -rotate-12 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="green" width="w-36 md:w-48" />
      </div>

      <div className="relative max-w-6xl mx-auto z-10">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <div className="inline-block bg-[#FFFBF2] px-8 py-3 rounded-2xl border-4 border-[#1D232C] shadow-scrapbook -rotate-1">
            <span className="font-barrio text-3xl md:text-4xl text-[#1760D5] tracking-wide flex items-center justify-center gap-2">
              <Award className="w-7 h-7 text-[#EA3D91]" /> PRESTASI &amp; SERTIFIKAT
            </span>
            <p className="font-marker text-sm md:text-base text-[#4A5568] mt-1">
              Sertifikasi Kompetensi Desain Grafis &amp; Partisipasi Kejuaraan
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: The Real Extracted Certificate in Pinned Frame */}
          <div className="lg:col-span-7">
            <div className="relative bg-white p-4 md:p-6 pb-6 md:pb-8 rounded-2xl shadow-polaroid border-4 border-[#1D232C] -rotate-1 hover:rotate-0 transition-transform duration-300">
              {/* Push Pin */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20">
                <PushPin color="gold" size="lg" />
              </div>

              {/* Certificate Image Frame */}
              <div
                onClick={() => setModalOpen(true)}
                className="group relative w-full aspect-[16/9] overflow-hidden rounded-xl bg-stone-100 border-2 border-stone-300 cursor-pointer shadow-inner"
              >
                <Image
                  src={mainCert.certificateImage || "/assets/certificates/certificate-mikroskil.png"}
                  alt={mainCert.title}
                  fill
                  className="object-contain transition-transform duration-500 group-hover:scale-102"
                  sizes="(max-width: 1024px) 100vw, 650px"
                  priority
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-[#FFFBF2] text-[#1D232C] font-fredoka text-sm font-bold px-4 py-2 rounded-full shadow-md flex items-center gap-2 border-2 border-[#1D232C]">
                    <ZoomIn className="w-4 h-4 text-[#EA3D91]" /> Klik untuk Memperbesar Sertifikat
                  </span>
                </div>
              </div>

              {/* Certificate Caption */}
              <div className="mt-4 text-center">
                <div className="inline-block bg-blue-100 text-[#1760D5] font-fredoka text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-1">
                  {mainCert.category}
                </div>
                <h3 className="font-fredoka text-xl md:text-2xl font-bold text-[#1D232C]">
                  {mainCert.title}
                </h3>
                <p className="font-body text-xs md:text-sm text-[#4A5568] mt-1 leading-relaxed max-w-lg mx-auto">
                  {mainCert.description}
                </p>
                <div className="mt-2 flex items-center justify-center gap-2 text-xs font-marker text-[#238B68]">
                  <CheckCircle className="w-4 h-4" />
                  <span>Sertifikat Terverifikasi Universitas Mikroskil (2024)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Other Achievements Cards */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FFF8B8] p-4 rounded-xl border-2 border-dashed border-amber-400 rotate-1 shadow-sm">
              <h4 className="font-fredoka text-base font-bold text-amber-900 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#EA3D91]" /> Rekam Jejak Prestasi:
              </h4>
              <p className="font-marker text-xs md:text-sm text-amber-800 mt-1">
                Kombinasi kompetisi kreatif bidang komunikasi visual serta sportivitas non-akademik.
              </p>
            </div>

            {otherAchievements.map((item, index) => {
              const isPink = index === 0;
              return (
                <div
                  key={item.id}
                  className={`relative bg-[#FFFBF2] p-5 md:p-6 rounded-2xl border-3 border-[#1D232C] shadow-scrapbook ${
                    isPink ? "rotate-1" : "-rotate-1"
                  } hover:rotate-0 transition-transform`}
                >
                  {/* Push pin */}
                  <div className="absolute -top-3 left-8 z-20">
                    <PushPin color={isPink ? "pink" : "green"} size="sm" />
                  </div>

                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span
                      className={`font-fredoka text-xs font-bold text-white px-3 py-0.5 rounded-full ${
                        isPink ? "bg-[#EA3D91]" : "bg-[#238B68]"
                      }`}
                    >
                      {item.year} • {item.tier}
                    </span>
                    <Trophy className={`w-5 h-5 ${isPink ? "text-[#EA3D91]" : "text-[#238B68]"}`} />
                  </div>

                  <h4 className="font-fredoka text-lg md:text-xl font-bold text-[#1D232C]">
                    {item.title}
                  </h4>
                  <p className="font-marker text-xs text-[#1760D5] font-bold mt-0.5">
                    Bidang: {item.category}
                  </p>

                  <p className="font-body text-xs md:text-sm text-[#4A5568] mt-2 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Lightbox for Certificate */}
      <ArtworkModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        artwork={{
          title: mainCert.title,
          category: mainCert.category,
          image: mainCert.certificateImage || "/assets/certificates/certificate-mikroskil.png",
          caption: mainCert.description,
          width: 1080,
          height: 607
        }}
      />
    </section>
  );
};
