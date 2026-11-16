import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rosdyanti Br Simarmata | Digital School Scrapbook Portfolio",
  description: "Portofolio Kreatif & Riwayat Akademik Rosdyanti Br Simarmata — Mahasiswi Ilmu Hukum Universitas Jambi & Penggiat Desain Visual",
  keywords: ["Rosdyanti Br Simarmata", "Rosee", "Portofolio", "Hukum UNJA", "Desain Grafis", "Universitas Jambi"],
  authors: [{ name: "Rosdyanti Br Simarmata" }],
  openGraph: {
    title: "Rosdyanti Br Simarmata | School Scrapbook Portfolio",
    description: "Digital Interactive Scrapbook Portfolio — Law Student & Creative Designer",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className="min-h-screen bg-[#FDFBF7] text-[#1D232C] antialiased selection:bg-[#EA3D91] selection:text-white">
        {children}
      </body>
    </html>
  );
}
