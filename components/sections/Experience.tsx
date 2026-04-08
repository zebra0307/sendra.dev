"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Code, Building2 } from "lucide-react";

const experiences = [
    {
        id: 1,
        role: "Turbine Builder",
        company: "Turbine (Solana ecosystem)",
        period: "Jan 2025 – Present",
        type: "Web3 / DeFi Development",
        description: "Building next-gen DeFi protocols and NFT marketplaces on Solana using Rust and Anchor framework. Contributed to protocol architecture and on-chain program design.",
        icon: Code,
        color: "text-secondary",
        bg: "bg-secondary/8",
        border: "border-secondary/15",
    },
    {
        id: 2,
        role: "Ackee Builder",
        company: "Ackee Blockchain",
        period: "Solana Season 7, 2025",
        type: "Security & Infrastructure",
        description: "Participated in Ackee Blockchain's builder programme. Focused on smart contract security, audit practices, and decentralized infrastructure on Solana.",
        icon: Briefcase,
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
    {
        id: 3,
        role: "Full Stack Developer",
        company: "Freelance & Personal Projects",
        period: "2024 – Present",
        type: "React / Node.js / MERN",
        description: "Built scalable full-stack applications using the MERN stack and PostgreSQL. Shipped projects including authentication systems, REST APIs, and real-time web apps.",
        icon: Building2,
        color: "text-secondary",
        bg: "bg-secondary/10",
        border: "border-secondary/20",
    },
    {
        id: 4,
        role: "Web3 Cohort Participant",
        company: "100xDevs",
        period: "2024",
        type: "Blockchain & DevOps Learning",
        description: "Completed an intensive cohort covering blockchain architecture, consensus mechanisms, DevOps, and advanced backend engineering patterns.",
        icon: GraduationCap,
        color: "text-secondary",
        bg: "bg-secondary/8",
        border: "border-secondary/15",
    },
];

export function Experience() {
    return (
        <section id="experience" className="py-10 md:py-14 relative">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
                        Experience &amp; <span className="text-secondary">Education</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        My professional journey through Web2 and Web3.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
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
                                <div className="text-right">
                                    <span className="text-xs font-semibold text-white/60 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
                                        {exp.period}
                                    </span>
                                    <p className="text-[10px] text-white/30 mt-1.5 uppercase tracking-widest">{exp.type}</p>
                                </div>
                            </div>

                            <h3 className={`text-xl font-bold text-white mb-1 group-hover:${exp.color} transition-colors`}>
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
