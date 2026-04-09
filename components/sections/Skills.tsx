"use client";

import { motion } from "framer-motion";
import { Github } from "lucide-react";

const skillCategories = [
    {
        title: "Languages",
        color: "border-secondary/20",
        bar: "bg-secondary",
        skills: [
            { name: "Rust", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/rust/rust-original.svg" },
            { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
            { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "Solidity", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/solidity/solidity-original.svg" },
            { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
            { name: "C++", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
        ],
    },
    {
        title: "Blockchain / Web3",
        color: "border-secondary/30",
        bar: "bg-secondary",
        skills: [
            { name: "Solana", icon: "https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/So11111111111111111111111111111111111111112/logo.png" },
            { name: "Ethereum", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/ethereum/ethereum-original.svg" },
            { name: "Anchor", icon: "https://raw.githubusercontent.com/coral-xyz/anchor/master/docs/static/img/anchor.png" },
            { name: "Web3.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
            { name: "Hardhat", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/hardhat/hardhat-original.svg" },
            { name: "IPFS", icon: "https://docs.ipfs.tech/images/ipfs-logo.svg" },
        ],
    },
    {
        title: "Frontend",
        color: "border-secondary/20",
        bar: "bg-secondary",
        skills: [
            { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
            { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
            { name: "Tailwind", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
            { name: "Redux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redux/redux-original.svg" },
            { name: "HTML5", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
        ],
    },
    {
        title: "Backend",
        color: "border-secondary/20",
        bar: "bg-secondary",
        skills: [
            { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
            { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
            { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
            { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
            { name: "Prisma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prisma/prisma-original.svg" },
        ],
    },
    {
        title: "Tools & DevOps",
        color: "border-secondary/30",
        bar: "bg-secondary",
        skills: [
            { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" },
            { name: "GitHub", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" },
            { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
            { name: "Linux", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linux/linux-original.svg" },
            { name: "VS Code", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg" },
        ],
    },
];

export function Skills() {
    return (
        <section id="skills" className="py-10 md:py-14 relative overflow-hidden">
            <div className="container px-4 md:px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-left mb-8"
                >
                    <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
                        Technical <span className="text-secondary">Skills</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        {/* The tools and technologies I use to build the future. */}
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {skillCategories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.08 }}
                            className={`bg-dark-100 border ${category.color} rounded-xl p-5 hover:bg-dark-200 transition-all duration-300 group`}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-3 mb-5">
                                <div className={`w-1.5 h-7 rounded-full ${category.bar}`} />
                                <h3 className="text-base font-bold text-white">{category.title}</h3>
                            </div>

                            {/* Skill Icons Grid */}
                            <div className="flex flex-wrap gap-4">
                                {category.skills.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center gap-2 group/skill"
                                        title={skill.name}
                                    >
                                        <div className="w-12 h-12 bg-white/5 rounded-xl p-2 border border-white/5 hover:border-white/20 hover:bg-white/10 transition-all duration-200 flex items-center justify-center">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img
                                                src={skill.icon}
                                                alt={skill.name}
                                                width={32}
                                                height={32}
                                                className="w-8 h-8 object-contain transition-transform duration-200 group-hover/skill:scale-110"
                                                loading="lazy"
                                                onError={(e) => {
                                                    const el = e.target as HTMLImageElement;
                                                    el.style.display = "none";
                                                    const parent = el.parentElement;
                                                    if (parent && !parent.querySelector("span")) {
                                                        const fallback = document.createElement("span");
                                                        fallback.className = "text-xs font-bold text-white/60";
                                                        fallback.textContent = skill.name.slice(0, 2).toUpperCase();
                                                        parent.appendChild(fallback);
                                                    }
                                                }}
                                            />
                                        </div>
                                        <span className="text-[11px] text-white/40 group-hover/skill:text-white/70 transition-colors text-center leading-tight">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub Activity Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-8"
                >
                    <h3 className="text-center text-sm font-semibold text-white/40 uppercase tracking-wider mb-6">
                        GitHub Activity
                    </h3>
                    <div className="bg-dark-100 border border-white/5 rounded-2xl p-6 max-w-3xl mx-auto">
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            {/* Streak Stats — more reliable than github-readme-stats */}
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://streak-stats.demolab.com?user=zebra0307&theme=transparent&hide_border=true&ring=14F195&fire=0eb87f&currStreakLabel=FFFFFF&sideLabels=FFFFFF&dates=FFFFFF80&currStreakNum=FFFFFF&sideNums=FFFFFF"
                                alt="GitHub Streak"
                                className="rounded-xl"
                                style={{ maxWidth: "500px", width: "100%" }}
                                loading="lazy"
                            />
                        </div>
                        <div className="text-center mt-4 pt-4 border-t border-white/5">
                            <a
                                href="https://github.com/zebra0307"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm font-medium text-white/40 hover:text-white transition-colors"
                            >
                                <Github size={14} />
                                View full profile on GitHub →
                            </a>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
