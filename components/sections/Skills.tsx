"use client";

import { motion } from "framer-motion";

const skillCategories = [
    {
        title: "Languages",
        skills: ["Rust", "Solidity", "TypeScript", "JavaScript", "Python", "C++"],
        color: "bg-primary",
    },
    {
        title: "Blockchain",
        skills: ["Solana", "Ethereum", "Anchor", "Web3.js", "Smart Contracts", "Hardhat"],
        color: "bg-secondary",
    },
    {
        title: "Frontend",
        skills: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Redux"],
        color: "bg-accent",
    },
    {
        title: "Backend",
        skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs"],
        color: "bg-primary",
    },
    {
        title: "Tools",
        skills: ["Git", "Docker", "Linux", "VS Code", "Postman"],
        color: "bg-secondary",
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                        Technical <span className="text-accent">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        The tools and technologies I use to build the future.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-dark-100 border border-white/5 rounded-xl p-6 hover:border-white/10 transition-colors duration-300"
                        >
                            <div className="flex items-center gap-3 mb-6">
                                <div className={`w-2 h-8 rounded-full ${category.color}`} />
                                <h3 className="text-xl font-bold text-white">
                                    {category.title}
                                </h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-3 py-1.5 text-sm font-medium text-gray-300 bg-white/5 rounded-md border border-white/5 hover:bg-white/10 hover:text-white transition-all duration-200 cursor-default"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
