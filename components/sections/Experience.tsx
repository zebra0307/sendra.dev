"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Turbine Builder",
        company: "Turbine",
        period: "Present",
        type: "Web3 Development",
        description: "Building next-gen DeFi protocols and NFT marketplaces on Solana.",
        icon: Code,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        id: 2,
        role: "Ackee Builder",
        company: "Ackee Blockchain",
        period: "Solana season-7, 2025",
        type: "Web3 Infrastructure",
        description: "Contributing to decentralized infrastructure and auditing smart contracts.",
        icon: Briefcase,
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
    // {
    //     id: 3,
    //     role: "Web3 Developer",
    //     company: "Freelance / Independent",
    //     period: "2023 - Present",
    //     type: "dApps & Smart Contracts",
    //     description: "Developing custom dApps, NFT collections, and DeFi solutions for various clients.",
    //     icon: Code,
    //     color: "text-accent",
    //     bg: "bg-accent/10",
    //     border: "border-accent/20",
    // },
    {
        id: 3,
        role: "Web3 Cohort Participant",
        company: "100xDevs / Others",
        period: "2025",
        type: "Intermediate Learning",
        description: "Deep dive into blockchain architecture, consensus mechanisms.",
        icon: GraduationCap,
        color: "text-primary",
        bg: "bg-primary/10",
        border: "border-primary/20",
    },
    {
        id: 4,
        role: "Full Stack Web2 Developer",
        company: "Various Projects",
        period: "2024-present",
        type: "React / Node.js",
        description: "Built scalable full-stack applications using MERN stack and PostgreSQL.",
        icon: Briefcase,
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
    // {
    //     id: 5,
    //     role: "Research Assistant",
    //     company: "University Project",
    //     period: "2023",
    //     type: "Blockchain Research",
    //     description: "Researched blockchain scalability solutions and consensus algorithms.",
    //     icon: GraduationCap,
    //     color: "text-accent",
    //     bg: "bg-accent/10",
    //     border: "border-accent/20",
    // },
];

export function Experience() {
    return (
        <section id="experience" className="py-20 md:py-32 relative">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="font-heading text-4xl md:text-5xl text-white mb-4">
                        Experience & <span className="text-secondary">Education</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey through the web stack.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-6 rounded-xl border ${exp.border} bg-dark-100 hover:bg-dark-200 transition-all duration-300 group`}
                        >
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-lg ${exp.bg} ${exp.color}`}>
                                    <exp.icon size={24} />
                                </div>
                                <span className="text-xs font-medium text-gray-500 bg-dark-200 px-2 py-1 rounded-full">
                                    {exp.period}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary transition-colors">
                                {exp.role}
                            </h3>
                            <p className="text-sm text-gray-400 font-medium mb-3">
                                {exp.company}
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
