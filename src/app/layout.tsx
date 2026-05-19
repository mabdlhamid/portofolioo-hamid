import type { Metadata } from "next";
import { Inter, Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // ✅ Benar
import { Providers } from "./providers"; // ✅ Import dari file baru
import { LanguageProvider } from "./context/language-context";
import FloatingControls from "./components/floating-controls";
// Konfigurasi Font
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadata SEO Lengkap (Punya saya yang sudah ditingkatkan)
export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-hamid.vercel.app"),
  title: {
    default: "Muhammad Abdul Hamid | Fullstack Developer",
    template: "%s | Muhammad Abdul Hamid"
  },
  description: "Information Systems student, Fullstack Developer, and Leader. Exploring the intersection of technology and meaningful impact.",
  keywords: ["Muhammad Abdul Hamid", "Hamid", "Portfolio", "Web Developer", "Banjarmasin", "Sistem Informasi"],
  openGraph: {
    type: "website",
    locale: "id_ID",
    url: "https://portfolio-hamid.vercel.app",
    title: "Muhammad Abdul Hamid | Portfolio",
    description: "Building meaningful web experiences and exploring leadership in technology.",
    
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Muhammad Abdul Hamid Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Abdul Hamid | Portfolio",
    images: ["/public/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning >
      <body
        className={`${inter.variable} ${geistSans.variable} ${geistMono.variable} ${inter.className} bg-white text-gray-800 antialiased transition-colors duration-300 dark:bg-[#0f172a] dark:text-white`}
      >
        <LanguageProvider>
         <Providers>
          {children}
          <FloatingControls />
        </Providers>
        </LanguageProvider>
      </body>
    </html>
  );
}