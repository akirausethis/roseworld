"use client";

import React, { useState, useEffect } from "react";
import { Menu, X, Sparkles } from "lucide-react";

const navItems = [
  { href: "#cover", label: "Cover", color: "bg-[#1760D5] text-white hover:bg-blue-700" },
  { href: "#about", label: "Tentang", color: "bg-[#EA3D91] text-white hover:bg-pink-700" },
  { href: "#skills", label: "Keahlian", color: "bg-[#F58B25] text-white hover:bg-orange-600" },
  { href: "#organizations", label: "Organisasi", color: "bg-[#238B68] text-white hover:bg-emerald-700" },
  { href: "#committees", label: "Kepanitiaan", color: "bg-[#1760D5] text-white hover:bg-blue-700" },
  { href: "#gallery", label: "Karya Visual", color: "bg-[#EA3D91] text-white hover:bg-pink-700" },
  { href: "#certificates", label: "Prestasi", color: "bg-[#238B68] text-white hover:bg-emerald-700" },
  { href: "#education", label: "Pendidikan", color: "bg-[#F58B25] text-white hover:bg-orange-600" },
  { href: "#contact", label: "Kontak", color: "bg-[#1D232C] text-white hover:bg-black" }
];

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("cover");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const sections = navItems.map(item => item.href.substring(1));
      const scrollPos = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 pointer-events-none transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 py-3 md:py-4 flex items-center justify-between pointer-events-auto">
        {/* Brand Sticker Badge */}
        <a
          href="#cover"
          className="group flex items-center gap-2 bg-[#FFFBF2] px-3.5 py-1.5 md:px-4 md:py-2 rounded-full shadow-scrapbook border-2 border-[#1D232C] -rotate-2 hover:rotate-0 hover:scale-105 transition-transform"
        >
          <span className="w-3 h-3 rounded-full bg-[#EA3D91] animate-pulse" />
          <span className="font-barrio text-lg md:text-xl text-[#1D232C] tracking-wide">
            ROSEE
          </span>
          <span className="hidden sm:inline font-marker text-xs font-bold text-[#EA3D91] bg-pink-100 px-2 py-0.5 rounded-full">
            2026
          </span>
        </a>

        {/* Desktop Paper Tab Navigation */}
        <nav
          className={`hidden lg:flex items-center gap-1.5 bg-[#FFFBF2]/95 backdrop-blur-md px-3 py-1.5 rounded-full shadow-scrapbook border-2 border-[#1D232C] transition-all duration-300 ${
            scrolled ? "scale-95 shadow-lifted" : ""
          }`}
          aria-label="Navigasi Utama"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.href.substring(1);
            return (
              <a
                key={item.href}
                href={item.href}
                className={`font-fredoka text-xs xl:text-sm font-semibold px-3 py-1 rounded-full transition-all duration-200 ${
                  isActive
                    ? `${item.color} shadow-sm scale-105 -rotate-1`
                    : "text-[#1D232C] hover:bg-stone-200/70"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        {/* Mobile Menu Toggle Button */}
        <div className="lg:hidden flex items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-center w-11 h-11 rounded-full bg-[#FFFBF2] text-[#1D232C] border-2 border-[#1D232C] shadow-scrapbook hover:scale-105 active:scale-95 transition-transform"
            aria-label={isOpen ? "Tutup Menu" : "Buka Menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] bg-black/40 backdrop-blur-sm z-40 pointer-events-auto animate-in fade-in duration-200">
          <div className="bg-[#FFFBF2] m-4 p-6 rounded-2xl shadow-lifted border-3 border-[#1D232C] max-w-sm mx-auto bg-grid-pink">
            <div className="flex items-center justify-between pb-3 mb-3 border-b-2 border-dashed border-stone-300">
              <span className="font-fredoka text-lg font-bold text-[#EA3D91] flex items-center gap-2">
                <Sparkles className="w-4 h-4" /> Buku Scrapbook Rosee
              </span>
              <span className="font-marker text-xs text-stone-500">Pilih Halaman</span>
            </div>

            <div className="grid grid-cols-2 gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`font-fredoka text-sm font-semibold p-2.5 rounded-xl text-center border-2 border-[#1D232C] shadow-sm transition-transform active:scale-95 ${item.color}`}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
