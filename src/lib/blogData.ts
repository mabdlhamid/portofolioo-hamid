// 1. Definisikan struktur data blog agar TypeScript 'cerdas'
export interface BlogPost {
    slug: string;
    title: string;
    category: "Professional" | "Profile" | "Leadership"; // Membatasi kategori agar konsisten
    date: string;
    image: string;
    excerpt: string;
    layout: "landscape" | "portrait";
    content: string;
}

export const blogPosts: BlogPost[] = [
    {
        slug: "internship-telkom-akses",
        title: "Internship Experience at Telkom Akses",
        category: "Professional",
        date: "2025",
        image: "/blog/telkomakses.jpg",
        excerpt:
            "Hands-on experience working within a structured telecommunications infrastructure environment.",
        layout: "landscape",
        content: `Di Telkom Akses, saya belajar banyak mengenai infrastruktur jaringan skala besar. 
        
        Pengalaman ini mencakup:
        1. Analisis sistem transmisi data.
        2. Koordinasi tim lapangan.
        3. Dokumentasi teknis berbasis standar korporat.
        
        Sangat menantang dan membuka wawasan saya tentang bagaimana internet didistribusikan secara nasional.`,
    },
    {
        slug: "about-me",
        title: "About Me & Professional Overview",
        category: "Profile",
        date: "2026",
        image: "/blog/profile.jpg",
        excerpt:
            "An overview of my academic journey, leadership experience, and professional development as a fullstack developer.",
        layout: "portrait",
        content: "Saya adalah seorang mahasiswa Sistem Informasi yang fokus pada pengembangan Fullstack Web dan kecerdasan buatan...",
    },
    {
        slug: "internship-dprd",
        title: "Internship at DPRD Kota Banjarmasin",
        category: "Professional",
        date: "2025",
        image: "/blog/dprd.jpg",
        excerpt:
            "Exposure to public policy systems and institutional workflow management.",
        layout: "landscape",
        content: "Magang di DPRD memberikan perspektif unik tentang bagaimana sistem birokrasi dan administrasi publik berjalan di Kota Banjarmasin...",
    },
    {
        slug: "chairman-hmsi",
        title: "Chairman of Information Systems Student Association",
        category: "Leadership",
        date: "2025",
        image: "/blog/hmsi.jpg",
        excerpt:
            "Leading structured student programs and coordinating multi-division organizational strategy.",
        layout: "portrait",
        content: "Menjadi ketua himpunan adalah perjalanan kepemimpinan paling berharga selama masa kuliah saya...",
    },
];