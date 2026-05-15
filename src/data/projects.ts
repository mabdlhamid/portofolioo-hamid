export interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  live?: string;
  github?: string;
  status: "Completed" | "In Development";
}

export const projects: Project[] = [
  {
    title: "Jelang Koffie",
    description:
      "Modern coffee shop website with elegant user interface.",
    tech: [
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
    ],
    image: "/projects/jelang-dashboard.png",
    live: "",
    github:
      "https://github.com/USERNAME/jelang-koffie",
    status: "In Development",
  },
];