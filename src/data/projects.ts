export type Locale = "en" | "id";

export interface ProjectTranslation {
  title: string;

  description: string;

  features: string[];
}

export interface Project {
  id: string;

  content: {
    en: ProjectTranslation;
    id: ProjectTranslation;
  };

  tech: string[];

  image: string;

  live?: string;

  github?: string;

  status: "live" | "demo" | "development";
}

export const projects: Project[] = [
  {
    id: "ai-cybersecurity-dashboard",

    content: {
      en: {
        title: "AI Cybersecurity Dashboard",

        description:
          "AI-powered anomaly detection dashboard for cybersecurity monitoring with real-time analytics and intelligent threat detection.",

        features: [
          "AI anomaly detection",
          "Real-time monitoring",
          "Interactive analytics",
        ],
      },

      id: {
        title: "Dashboard Keamanan Siber AI",

        description:
          "Dashboard deteksi anomali berbasis AI untuk monitoring keamanan siber dengan analitik realtime dan deteksi ancaman cerdas.",

        features: [
          "Deteksi anomali AI",
          "Monitoring realtime",
          "Analitik interaktif",
        ],
      },
    },

    tech: [
      "Next.js",
      "Python",
      "TensorFlow",
    ],

    image: "/projects/camping.png",

    live: "https://your-demo.com",

    github:
      "https://github.com/USERNAME/cyber-ai",

    status: "live",
  },

  {
    id: "jelang-koffie",

    content: {
      en: {
        title: "Jelang Koffie",

        description:
          "Modern coffee shop platform with elegant digital branding and responsive customer experience.",

        features: [
          "Responsive modern UI",
          "Animated interactions",
          "Smooth animations",
        ],
      },

      id: {
        title: "Jelang Koffie",

        description:
          "Platform coffee shop modern dengan branding digital elegan dan pengalaman pengguna responsif.",

        features: [
          "UI modern responsif",
          "Interaksi animasi",
          "Animasi halus",
        ],
      },
    },

    tech: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],

    image: "/projects/jelang-dashboard.png",

    live: "https://your-demo-link.com",

    github:
      "https://github.com/USERNAME/jelang-koffie",

    status: "demo",
  },

  {
    id: "student-information-system",

    content: {
      en: {
        title: "Student Information System",

        description:
          "Academic management dashboard with authentication and modern admin experience for managing student data efficiently.",

        features: [
          "Authentication system",
          "Student dashboard",
          "Academic management",
        ],
      },

      id: {
        title: "Sistem Informasi Mahasiswa",

        description:
          "Dashboard manajemen akademik dengan autentikasi dan pengalaman admin modern untuk mengelola data mahasiswa secara efisien.",

        features: [
          "Sistem autentikasi",
          "Dashboard mahasiswa",
          "Manajemen akademik",
        ],
      },
    },

    tech: [
      "Laravel",
      "MySQL",
      "Bootstrap",
    ],

    image: "/projects/perpus..png",

    github:
      "https://github.com/USERNAME/PERPUS",

    status: "development",
  },
];