import { Code, Database, Wrench } from "lucide-react";

export default function Skills() {
    const skillCategories = [
        {
            title: "Frontend",
            icon: <Code size={28} />,
            skills: ["Next.js", "React", "Tailwind CSS", "JavaScript", "TypeScript"],
        },
        {
            title: "Backend",
            icon: <Database size={28} />,
            skills: ["Node.js", "API Routes", "Laravel", "MySQL"],
        },
        {
            title: "Tools",
            icon: <Wrench size={28} />,
            skills: ["Git", "GitHub", "VS Code", "Figma", "Vercel"],
        },
    ];

    return (
        <section id="skills" className="py-24 px-6 bg-gray-50 border-t border-gray-100">            <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-blue-900 text-center mb-16">
                Skills & Technologies
            </h2>

            <div className="grid gap-10 md:grid-cols-3">
                {skillCategories.map((category, index) => (
                    <div
                        key={index}
                        className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300"
                    >
                        <div className="flex justify-center mb-4 text-blue-900">
                            {category.icon}
                        </div>
                        <h3 className="text-xl font-semibold text-blue-900 mb-6 text-center">
                            {category.title}
                        </h3>

                        <div className="flex flex-wrap gap-3 justify-center">
                            {category.skills.map((skill, i) => (
                                <span
                                    key={i}
                                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium hover:bg-blue-200 transition"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
        </section>
    );
}