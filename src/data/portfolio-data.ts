export interface ProfileData {
  name: string;
  nickname: string;
  tagline: string;
  role: string;
  faculty: string;
  university: string;
  cohort: string;
  bio: string;
  creativeSummary: string;
  interests: string[];
  contacts: {
    email: string;
    instagram: string;
    instagramUrl: string;
    tiktok: string;
    tiktokUrl: string;
  };
}

export interface SkillCategory {
  title: string;
  color: 'pink' | 'green' | 'blue' | 'orange' | 'yellow';
  skills: {
    name: string;
    description?: string;
  }[];
}

export interface ExperienceItem {
  id: string;
  title: string;
  organization: string;
  role: string;
  year: string;
  scope: string;
  description: string;
  highlights: string[];
  badgeColor: string;
  rotation?: string;
}

export interface CommitteeItem {
  id: string;
  event: string;
  institution: string;
  role: string;
  division: string;
  year: string;
  scope: string;
  responsibilities: string[];
  color: string;
}

export interface Artwork {
  id: string;
  title: string;
  category: string;
  image: string;
  width: number;
  height: number;
  rotation: string;
  aspectRatio: string;
  caption?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  year: string;
  tier: string;
  category: string;
  description: string;
  certificateImage?: string;
}

export interface EducationItem {
  institution: string;
  facultyStudy?: string;
  period: string;
  location: string;
  status: string;
  notes: string;
  color: string;
}

export interface SupportingApp {
  id: string;
  name: string;
  role: string;
  category: string;
  description: string;
  folderImage: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
  folderColorName: string;
  rotation: string;
}

export const portfolioData: {
  profile: ProfileData;
  skillCategories: SkillCategory[];
  supportingApps: SupportingApp[];
  organizationalExperience: ExperienceItem[];
  committeeExperience: CommitteeItem[];
  artworks: Artwork[];
  achievements: AchievementItem[];
  education: EducationItem[];
} = {
  profile: {
    name: "Rosdyanti Br Simarmata",
    nickname: "ROSEE",
    tagline: "Law Student & Visual Media Enthusiast",
    role: "Mahasiswi Ilmu Hukum & Penggiat Kreatif",
    faculty: "Fakultas Hukum",
    university: "Universitas Jambi",
    cohort: "Angkatan 2025",
    bio: "Halo, saya Rosdyanti Br Simarmata (akrab dipanggil Rosee). Saya merupakan mahasiswi jurusan Ilmu Hukum Fakultas Hukum Universitas Jambi angkatan 2025. Di samping mendalami kajian hukum pidana dan perdata, saya memiliki kegemaran besar dalam eksplorasi visual, desain grafis, fotografi, serta kreasi konten media.",
    creativeSummary: "Saya memiliki keterampilan dalam bidang desain grafis dan sosial media seperti pembuatan konten, desain poster, dan cover buku sejak masa SMA. Berpartisipasi dalam kompetisi desain telah memperluas wawasan saya mengenai komunikasi visual yang komunikatif dan berkarakter. Bagi saya, fotografi adalah sarana terbaik mengabadikan momentum kegiatan, keindahan alam, dan cerita di sekitar.",
    interests: [
      "Hukum Pidana & Perdata",
      "Peradilan Semu (Moot Court)",
      "Penulisan & Analisis Hukum",
      "Desain Grafis & Komunikasi Visual",
      "Fotografi & Sinematografi",
      "Pengembangan Organisasi"
    ],
    contacts: {
      email: "rosdyanti41@gmail.com",
      instagram: "@yyyz3_",
      instagramUrl: "https://instagram.com/yyyz3_",
      tiktok: "@aisdfghjk",
      tiktokUrl: "https://tiktok.com/@aisdfghjk"
    }
  },

  skillCategories: [
    {
      title: "Creative & Visual Media",
      color: "pink",
      skills: [
        { name: "Desain Grafis", description: "Poster, cover buku, visual branding kegiatan" },
        { name: "Menggambar & Ilustrasi", description: "Kreasi ilustrasi dan konsep visual ekspresif" },
        { name: "Fotografi & Dokumentasi", description: "Dokumentasi kegiatan kampus, alam, dan portrait" },
        { name: "Publikasi Visual", description: "Layout publikasi media sosial dan media cetak" },
        { name: "Content Creation", description: "Vlog, tutorial, video dokumentasi, dan media kreatif" }
      ]
    },
    {
      title: "Hukum & Technical Skills",
      color: "blue",
      skills: [
        { name: "Analisis Hukum", description: "Analisis problematika hukum berdasarkan peraturan perundang-undangan" },
        { name: "Penyusunan Dokumen Hukum", description: "Penyusunan draft tulisan & berkas perkara secara sistematis" },
        { name: "Microsoft Word", description: "Penyusunan berkas resmi & karya tulis berstruktur rapi" },
        { name: "Microsoft PowerPoint", description: "Perancangan slide presentasi informatif & visual" },
        { name: "Microsoft Excel", description: "Pengolahan data administratif & pencatatan" }
      ]
    },
    {
      title: "Personal & Leadership Skills",
      color: "green",
      skills: [
        { name: "Teamwork & Kolaborasi", description: "Mampu bekerja sama secara kompak dan sinergis dalam tim" },
        { name: "Komunikasi Interpersonal", description: "Komunikasi persuasif, artikulatif, dan terbuka" },
        { name: "Berpikir Kritis & Analitis", description: "Pemecahan masalah berbasis fakta dan ketelitian" },
        { name: "Adaptabilitas", description: "Cepat menyesuaikan diri pada lingkungan dan dinamika baru" },
        { name: "Manajemen Waktu", description: "Disiplin pembagian waktu akademik dan kepanitiaan" },
        { name: "Tanggung Jawab & Kepemimpinan", description: "Berintegritas tinggi dalam menyelesaikan amanah tim" }
      ]
    }
  ],

  supportingApps: [
    {
      id: "capcut",
      name: "CapCut",
      role: "Video Editing & Content Creation",
      category: "Video Media",
      description: "Pembuatan konten vlog, video wawancara, tutorial edukasi, serta video dokumentasi interaktif.",
      folderImage: "/assets/apps/folder-capcut-clean.png",
      badgeBg: "bg-pink-100",
      badgeBorder: "border-pink-300",
      badgeText: "text-[#EA3D91]",
      folderColorName: "Pink Folder",
      rotation: "-rotate-2"
    },
    {
      id: "picsart",
      name: "Picsart",
      role: "Photo Editing & Visual Collage",
      category: "Photo Creative",
      description: "Eksplorasi edit foto kreatif, filter estetik, stiker visual, dan kolase gambar artistik.",
      folderImage: "/assets/apps/folder-picsart-clean.png",
      badgeBg: "bg-indigo-100",
      badgeBorder: "border-indigo-300",
      badgeText: "text-indigo-700",
      folderColorName: "Blue Folder",
      rotation: "rotate-1"
    },
    {
      id: "pinterest",
      name: "Pinterest",
      role: "Visual Moodboard & Inspiration",
      category: "Ideation & Ref",
      description: "Pencarian inspirasi desain, eksplorasi palet warna scrapbook, ide fotografi, dan layout visual.",
      folderImage: "/assets/apps/folder-pinterest-clean.png",
      badgeBg: "bg-amber-100",
      badgeBorder: "border-amber-300",
      badgeText: "text-amber-800",
      folderColorName: "Yellow Folder",
      rotation: "-rotate-1"
    },
    {
      id: "photoshop",
      name: "Adobe Photoshop",
      role: "Graphic Design & Digital Imaging",
      category: "Graphic Design",
      description: "Desain grafis presisi, pembuatan logo (kompetisi Hari Ozon 2023), poster tematik, dan olah raster.",
      folderImage: "/assets/apps/folder-photoshop-clean.png",
      badgeBg: "bg-emerald-100",
      badgeBorder: "border-emerald-300",
      badgeText: "text-emerald-800",
      folderColorName: "Green Folder",
      rotation: "rotate-2"
    },
    {
      id: "canva",
      name: "Canva",
      role: "Layout, Presentation & Publishing",
      category: "Layout & Editorial",
      description: "Perancangan cover buku sejak SMA, materi presentasi perkuliahan, dan feed media sosial.",
      folderImage: "/assets/apps/folder-canva-clean.png",
      badgeBg: "bg-orange-100",
      badgeBorder: "border-orange-300",
      badgeText: "text-[#F58B25]",
      folderColorName: "Orange Folder",
      rotation: "-rotate-2"
    },
    {
      id: "alightmotion",
      name: "Alight Motion",
      role: "Motion Graphics & Animation",
      category: "Motion & VFX",
      description: "Pembuatan animasi teks dinamis, transisi visual bergerak, efek visual, dan keyframe editing.",
      folderImage: "/assets/apps/folder-alightmotion-clean.png",
      badgeBg: "bg-purple-100",
      badgeBorder: "border-purple-300",
      badgeText: "text-purple-700",
      folderColorName: "Purple Folder",
      rotation: "rotate-1"
    }
  ],

  organizationalExperience: [
    {
      id: "org-1",
      title: "Anggota Komunitas Peradilan Semu",
      organization: "Law Science Organization (LSO)",
      role: "Anggota Aktif",
      year: "2026",
      scope: "Internal Fakultas / Universitas",
      description: "Mengikuti kajian keilmuan hukum, pelatihan pemberkasan perkara, serta simulasi praktik persidangan peradilan semu (moot court) bersama tim di lingkungan Fakultas Hukum Universitas Jambi.",
      highlights: [
        "Pelatihan pemberkasan berkas perkara perdata dan pidana",
        "Simulasi persidangan semu (moot court trial simulation)",
        "Diskusi kajian perundang-undangan dan penegakan hukum"
      ],
      badgeColor: "#1760D5",
      rotation: "-rotate-1"
    },
    {
      id: "org-2",
      title: "Divisi Kreativitas & Media Visual",
      organization: "Cinema — Fakultas Hukum Universitas Jambi",
      role: "Anggota",
      year: "2026",
      scope: "Internal Fakultas",
      description: "Berperan aktif sebagai anggota dalam kegiatan pengembangan kreativitas media visual, sinematografi, dan kolaborasi produksi konten kreatif mahasiswa.",
      highlights: [
        "Produksi karya visual dan dokumentasi sinematik fakultas",
        "Kolaborasi pembuatan konten kreatif mahasiswa",
        "Eksplorasi teknik komposisi foto dan video"
      ],
      badgeColor: "#EA3D91",
      rotation: "rotate-2"
    },
    {
      id: "org-3",
      title: "Pengurus Kesiswaan",
      organization: "Organisasi Siswa Intra Sekolah (OSIS) — SMA Sisingamangaraja",
      role: "Anggota OSIS",
      year: "2023",
      scope: "Sekolah",
      description: "Terlibat dalam perencanaan dan pelaksanaan program kegiatan kesiswaan di lingkungan sekolah serta berkoordinasi aktif bersama pengurus dan siswa.",
      highlights: [
        "Perencanaan dan eksekusi acara kesiswaan sekolah",
        "Koordinasi antar kelas dan perwakilan ekstrakurikuler",
        "Pemberdayaan kreativitas siswa SMA"
      ],
      badgeColor: "#F58B25",
      rotation: "-rotate-2"
    },
    {
      id: "org-4",
      title: "Perwakilan Sekolah",
      organization: "Pramuka Jambore Cabang (Jamcab)",
      role: "Delegasi Sekolah",
      year: "2020",
      scope: "Wilayah / Cabang",
      description: "Mewakili sekolah dalam kegiatan pertemuan Pramuka tingkat cabang/wilayah dengan berpartisipasi aktif pada giat kepemimpinan, ketangkasan, dan kerja sama regu.",
      highlights: [
        "Partisipasi giat ketangkasan dan navigasi regu",
        "Pelatihan kepemimpinan dan kemandirian",
        "Membangun kekompakan dan solidaritas antar delegasi"
      ],
      badgeColor: "#238B68",
      rotation: "rotate-1"
    }
  ],

  committeeExperience: [
    {
      id: "com-1",
      event: "Unja Law Fair 2026",
      institution: "Fakultas Hukum Universitas Jambi",
      division: "Publikasi, Dekorasi, dan Dokumentasi (PDD)",
      role: "Anggota Divisi PDD",
      year: "2026",
      scope: "Nasional",
      responsibilities: [
        "Bertanggung jawab menyusun desain publikasi visual untuk kegiatan kompetisi hukum tingkat nasional",
        "Menata konsep dan instalasi dekorasi lokasi acara agar berkesan meriah dan representatif",
        "Mendokumentasikan seluruh rangkaian pembukaan, perlombaan, hingga penutupan acara"
      ],
      color: "#1760D5"
    },
    {
      id: "com-2",
      event: "Perayaan Natal Fakultas Hukum 2026",
      institution: "Fakultas Hukum Universitas Jambi",
      division: "Publikasi, Dekorasi, dan Dokumentasi (PDD)",
      role: "Anggota Divisi PDD",
      year: "2026",
      scope: "Internal Fakultas Hukum",
      responsibilities: [
        "Mengelola pembuatan materi publikasi informasi acara baik digital maupun cetak",
        "Merancang tata dekorasi perayaan Natal Fakultas Hukum secara estetik dan khidmat",
        "Melaksanakan dokumentasi jalannya acara secara terstruktur dan terarsip rapi"
      ],
      color: "#EA3D91"
    }
  ],

  artworks: [
    {
      id: "art-1",
      title: "Karya Visual 01",
      category: "Desain Grafis / Poster",
      image: "/assets/artworks/artwork-1.png",
      width: 605,
      height: 807,
      rotation: "-rotate-2",
      aspectRatio: "3/4",
      caption: "Komposisi visual editorial"
    },
    {
      id: "art-2",
      title: "Karya Visual 02",
      category: "Cover Buku / Ilustrasi",
      image: "/assets/artworks/artwork-2.png",
      width: 573,
      height: 764,
      rotation: "rotate-1",
      aspectRatio: "3/4",
      caption: "Desain cover & tipografi ekspresif"
    },
    {
      id: "art-3",
      title: "Karya Visual 03",
      category: "Desain Grafis / Publikasi",
      image: "/assets/artworks/artwork-3.png",
      width: 908,
      height: 1210,
      rotation: "rotate-2",
      aspectRatio: "3/4",
      caption: "Poster publikasi tematik"
    },
    {
      id: "art-4",
      title: "Karya Visual 04",
      category: "Karya Seni / Gambar",
      image: "/assets/artworks/artwork-4.png",
      width: 908,
      height: 1210,
      rotation: "-rotate-1",
      aspectRatio: "3/4",
      caption: "Eksplorasi warna & karakter visual"
    },
    {
      id: "art-5",
      title: "Karya Visual 05",
      category: "Desain Grafis",
      image: "/assets/artworks/artwork-5.png",
      width: 689,
      height: 918,
      rotation: "rotate-3",
      aspectRatio: "3/4",
      caption: "Karya grafis komunikasi visual"
    },
    {
      id: "art-6",
      title: "Karya Visual 06",
      category: "Gambar & Seni Rupa",
      image: "/assets/artworks/artwork-6.png",
      width: 612,
      height: 816,
      rotation: "-rotate-2",
      aspectRatio: "3/4",
      caption: "Kreasi gambar dan tekstur"
    },
    {
      id: "art-7",
      title: "Karya Visual 07",
      category: "Publikasi Kreatif",
      image: "/assets/artworks/artwork-7.png",
      width: 689,
      height: 918,
      rotation: "rotate-1",
      aspectRatio: "3/4",
      caption: "Desain tata letak visual"
    },
    {
      id: "art-8",
      title: "Karya Visual 08",
      category: "Desain Poster",
      image: "/assets/artworks/artwork-8.png",
      width: 908,
      height: 1210,
      rotation: "-rotate-3",
      aspectRatio: "3/4",
      caption: "Eksplorasi poster & ilustrasi"
    },
    {
      id: "art-9",
      title: "Karya Visual 09",
      category: "Desain Grafis",
      image: "/assets/artworks/artwork-9.png",
      width: 410,
      height: 512,
      rotation: "rotate-2",
      aspectRatio: "4/5",
      caption: "Karya visual kartu & stiker"
    },
    {
      id: "art-10",
      title: "Karya Visual 10",
      category: "Fotografi / Sinematik",
      image: "/assets/artworks/artwork-10.png",
      width: 432,
      height: 768,
      rotation: "-rotate-1",
      aspectRatio: "9/16",
      caption: "Dokumentasi visual sinematik"
    },
    {
      id: "art-11",
      title: "Karya Visual 11",
      category: "Karya Gambar & Desain",
      image: "/assets/artworks/artwork-11.png",
      width: 689,
      height: 918,
      rotation: "rotate-2",
      aspectRatio: "3/4",
      caption: "Desain visual penuh warna"
    }
  ],

  achievements: [
    {
      id: "ach-1",
      title: "Pelatihan Desain Grafis Universitas Mikroskil",
      year: "2024",
      tier: "Tingkat Universitas / Regional",
      category: "Pelatihan & Sertifikasi Kompetensi",
      description: "Menyelesaikan program pembelajaran intensif desain grafis yang diselenggarakan oleh Universitas Mikroskil untuk mengasah keterampilan komunikasi visual, tata letak, dan penguasaan perangkat lunak desain grafis.",
      certificateImage: "/assets/certificates/certificate-mikroskil.png"
    },
    {
      id: "ach-2",
      title: "Lomba Desain Grafis",
      year: "2024",
      tier: "Tingkat Regional",
      category: "Kompetisi Kreatif",
      description: "Berpartisipasi aktif dalam kompetisi desain grafis tingkat regional, mengasah kemampuan eksplorasi ide kreatif, kecepatan rancang visual, dan pembuatan karya yang komunikatif."
    },
    {
      id: "ach-3",
      title: "Lomba Voli Putri",
      year: "2024",
      tier: "Tingkat Regional",
      category: "Olahraga & Non-Akademik",
      description: "Berpartisipasi dan berkompetisi dalam kejuaraan bola voli putri tingkat regional dengan mengutamakan kekompakan strategi regu, disiplin latihan, ketahanan fisik, dan sportivitas tinggi."
    }
  ],

  education: [
    {
      institution: "Universitas Jambi",
      facultyStudy: "Fakultas Hukum — Program Studi Ilmu Hukum",
      period: "2025 – Sekarang",
      location: "Kota Jambi, Provinsi Jambi",
      status: "Mahasiswi Aktif (Angkatan 2025)",
      notes: "Fokus pendalaman hukum pidana, perdata, serta aktif dalam Komunitas Peradilan Semu (Moot Court) dan Cinema Fakultas Hukum.",
      color: "#1760D5"
    },
    {
      institution: "SMA Sisingamangaraja",
      facultyStudy: "Pendidikan Menengah Atas",
      period: "2023 – 2025",
      location: "Kota Tanjungbalai, Sumatera Utara",
      status: "Lulus (2025)",
      notes: "Aktif dalam Organisasi Siswa Intra Sekolah (OSIS 2023), lomba desain grafis, kejuaraan voli putri, dan perwakilan Jambore Cabang.",
      color: "#EA3D91"
    }
  ]
};
