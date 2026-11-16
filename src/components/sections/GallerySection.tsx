"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ZoomIn, Palette, Eye } from "lucide-react";
import { portfolioData, Artwork } from "@/data/portfolio-data";
import { PushPin } from "../scrapbook/PushPin";
import { WashiTape } from "../scrapbook/WashiTape";
import { ArtworkModal } from "../gallery/ArtworkModal";

export const GallerySection: React.FC = () => {
  const { artworks } = portfolioData;
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [filter, setFilter] = useState<string>("all");

  const categories = [
    { id: "all", label: "Semua Karya" },
    { id: "poster", label: "Desain Grafis & Poster" },
    { id: "drawing", label: "Gambar & Seni Rupa" },
    { id: "cover", label: "Cover Buku & Publikasi" },
    { id: "photo", label: "Dokumentasi Visual" }
  ];

  const filteredArtworks = artworks.filter((item) => {
    if (filter === "all") return true;
    if (filter === "poster") return item.category.toLowerCase().includes("poster") || item.category.toLowerCase().includes("grafis");
    if (filter === "drawing") return item.category.toLowerCase().includes("gambar") || item.category.toLowerCase().includes("seni");
    if (filter === "cover") return item.category.toLowerCase().includes("cover") || item.category.toLowerCase().includes("publikasi");
    if (filter === "photo") return item.category.toLowerCase().includes("foto") || item.category.toLowerCase().includes("sinematik");
    return true;
  });

  const pinColorVariants: ("red" | "yellow" | "blue" | "pink" | "green" | "gold")[] = [
    "red",
    "yellow",
    "blue",
    "pink",
    "green",
    "gold"
  ];

  return (
    <section
      id="gallery"
      className="relative min-h-screen py-20 px-4 md:px-8 bg-[#7A401E] overflow-hidden border-b-4 border-[#1D232C]"
      style={{
        backgroundImage: "url('/assets/backgrounds/bg-corkboard-gallery.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed"
      }}
    >
      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-[#421E09]/60 backdrop-blur-[0.5px] pointer-events-none" />

      {/* Background washi tapes */}
      <div className="absolute top-10 left-10 rotate-12 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="pink" width="w-36 md:w-52" />
      </div>
      <div className="absolute top-12 right-12 -rotate-12 z-10 pointer-events-none hidden sm:block">
        <WashiTape color="yellow" width="w-32 md:w-48" />
      </div>

      <div className="relative max-w-7xl mx-auto z-10">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <div className="inline-block bg-[#FFFBF2] px-8 py-3.5 rounded-2xl border-4 border-[#1D232C] shadow-scrapbook -rotate-1 hover:rotate-0 transition-transform">
            <span className="font-barrio text-3xl sm:text-4xl md:text-5xl text-[#EA3D91] tracking-wide flex items-center justify-center gap-2">
              <Palette className="w-8 h-8 text-[#F58B25]" /> DESAIN GAMBAR
            </span>
            <p className="font-caveat text-xl sm:text-2xl text-[#1760D5] font-bold mt-1">
              &ldquo;My Little Creations&rdquo; — Karya Seni Asli Rosdyanti Br Simarmata
            </p>
          </div>
        </div>

        {/* Filter Paper Tags */}
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`font-fredoka text-xs sm:text-sm font-bold px-4 py-2 rounded-full border-2 border-[#1D232C] shadow-scrapbook transition-all duration-200 active:scale-95 ${
                filter === cat.id
                  ? "bg-[#EA3D91] text-white -rotate-1 scale-105"
                  : "bg-[#FFFBF2] text-[#1D232C] hover:bg-stone-100"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Corkboard Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 items-start">
          {filteredArtworks.map((item, index) => {
            const pinColor = pinColorVariants[index % pinColorVariants.length];
            return (
              <div
                key={item.id}
                onClick={() => setSelectedArtwork(item)}
                className={`group relative bg-white p-3.5 pb-5 rounded-md shadow-polaroid border border-black/15 transition-all duration-300 ease-out hover:scale-105 hover:rotate-0 hover:shadow-lifted hover:z-30 cursor-pointer ${item.rotation}`}
                role="button"
                tabIndex={0}
                aria-label={`Lihat ${item.title}`}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") setSelectedArtwork(item);
                }}
              >
                {/* Push Pin */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <PushPin color={pinColor} size="md" />
                </div>

                {/* Artwork Frame */}
                <div className="relative w-full aspect-[3/4] overflow-hidden rounded-xs bg-stone-100 border border-stone-200">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  {/* Hover Overlay with Zoom Icon */}
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-[#FFFBF2] text-[#1D232C] font-fredoka text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 border border-black/20">
                      <Eye className="w-3.5 h-3.5" /> Perbesar
                    </span>
                  </div>
                </div>

                {/* Caption / Label */}
                <div className="mt-3 text-center">
                  <span className="inline-block bg-pink-100 text-[#EA3D91] font-fredoka text-[11px] font-bold px-2 py-0.5 rounded-md uppercase tracking-wider mb-0.5">
                    {item.category}
                  </span>
                  <h4 className="font-barrio text-lg text-[#1D232C] tracking-wide mt-0.5">
                    {item.title}
                  </h4>
                  {item.caption && (
                    <p className="font-caveat text-sm text-[#4A5568] font-bold">
                      {item.caption}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Gallery Footer Note */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-[#FFF8B8] px-6 py-2.5 rounded-xl border-2 border-dashed border-amber-400 shadow-sm rotate-1">
            <p className="font-marker text-sm md:text-base text-[#422006]">
              📌 Menampilkan 11 karya visual otentik yang diekstrak langsung dari portofolio PDF Rosdyanti Br Simarmata.
            </p>
          </div>
        </div>
      </div>

      {/* Fullscreen Artwork Modal */}
      <ArtworkModal
        isOpen={!!selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
        artwork={selectedArtwork}
      />
    </section>
  );
};
