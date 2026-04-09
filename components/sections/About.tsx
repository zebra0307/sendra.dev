"use client";

import { motion } from "framer-motion";
import {
    Github, ExternalLink, Code2, Database, Globe, Cpu,
    GraduationCap, Calendar, MapPin
} from "lucide-react";

const quickFacts = [
    { icon: GraduationCap, label: "B.Tech CS", value: "Graduation 2028" },
    { icon: MapPin, label: "Location", value: "India" },
    { icon: Calendar, label: "Experience", value: "2+ Years Building" },
    { icon: Globe, label: "Focus", value: "Full Stack + Web3" },
];

const expertise = [
    {
        icon: Code2,
        title: "Full-Stack Development",
        desc: "React, Next.js, Node.js, REST APIs, PostgreSQL, MongoDB",
        color: "text-primary",
        border: "border-primary/20",
    },
    {
        icon: Cpu,
        title: "Smart Contracts",
        desc: "Solana · Anchor · Rust · Solidity · Hardhat",
        color: "text-secondary",
        border: "border-secondary/20",
    },
    {
        icon: Database,
        title: "Backend & Database",
        desc: "Node.js · Express · Prisma · PostgreSQL · MongoDB",
        color: "text-primary",
        border: "border-primary/20",
    },
    {
        icon: Globe,
        title: "Web3 & DeFi",
        desc: "dApps · NFT protocols · DeFi architecture · IPFS",
        color: "text-secondary",
        border: "border-secondary/20",
    },
];

export function About() {
    return (
        <section id="about" className="py-16 md:py-24 relative overflow-hidden">
            <div className="container px-4 md:px-8">

                {/* Section header */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12"
                >
                    <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
                        About <span className="text-primary">Me</span>
                    </h2>
                    {/* <p className="text-sm text-white/30">Who I am and what I bring to the table</p> */}
                </motion.div>

                <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-start">

                    {/* ── Left: Bio + stats ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        {/* Bio paragraphs */}
                        <div className="space-y-4 text-[15px] leading-relaxed text-gray-400">
                            <p>
                                I&apos;m <span className="text-white font-semibold">Satyendra Yadav</span>, a Computer Science undergraduate
                                who engineers <span className="text-white font-medium">production-grade full-stack applications</span> — from
                                pixel-perfect React UIs to high-performance Node.js backends and cloud-ready APIs.
                            </p>
                            <p>
                                On top of that, I hold a rare edge in <span className="text-primary font-medium">Web3 & Solana smart contracts</span>.
                                I&apos;ve participated in the <span className="text-white font-medium">Turbine Builder program</span> and the{" "}
                                <span className="text-white font-medium">Ackee Blockchain Security cohort</span>, building DeFi protocols, NFT
                                marketplaces, and secure on-chain programs in Rust.
                            </p>
                            <p className="text-white/30 text-sm">
                                I don&apos;t just write code — I ship clean, documented, tested software that solves real problems.
                            </p>
                        </div>

                        {/* Quick facts strip */}
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                            {quickFacts.map((fact) => (
                                <div key={fact.label} className="flex flex-col gap-1 p-3 rounded-xl bg-white/3 border border-white/5">
                                    <fact.icon size={14} className="text-white/30 mb-0.5" />
                                    <p className="text-[10px] text-white/30 uppercase tracking-wide">{fact.label}</p>
                                    <p className="text-xs font-semibold text-white/80">{fact.value}</p>
                                </div>
                            ))}
                        </div>

                        {/* Stats row */}
                        <div className="flex gap-8 pt-2 border-t border-white/5">
                            <div>
                                <p className="text-2xl font-bold text-white">10+</p>
                                <p className="text-[11px] text-white/35 uppercase tracking-wide">Projects Shipped</p>
                            </div>
                            <div className="border-l border-white/5 pl-8">
                                <p className="text-2xl font-bold text-white">381</p>
                                <p className="text-[11px] text-white/35 uppercase tracking-wide">GitHub Contributions</p>
                            </div>
                            <div className="border-l border-white/5 pl-8">
                                <p className="text-2xl font-bold text-secondary">2+</p>
                                <p className="text-[11px] text-white/35 uppercase tracking-wide">Years Building</p>
                            </div>
                        </div>

                        {/* GitHub CTA */}
                        <a
                            href="https://github.com/zebra0307"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white transition-colors border border-white/8 hover:border-white/20 px-3 py-2 rounded-lg bg-white/3 hover:bg-white/8"
                        >
                            <Github size={13} />
                            github.com/zebra0307
                            <ExternalLink size={10} className="opacity-40" />
                        </a>
                    </motion.div>

                    {/* ── Right: Expertise cards ── */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.15 }}
                        className="flex flex-col gap-3"
                    >
                        <p className="text-[10px] font-bold text-white/25 uppercase tracking-wider mb-1">Core Expertise</p>
                        {expertise.map((item, i) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 + i * 0.07 }}
                                className={`flex items-start gap-3 p-4 rounded-xl bg-dark-100 border ${item.border} hover:bg-dark-200 transition-colors duration-200 group`}
                            >
                                <div className={`w-8 h-8 rounded-lg bg-white/5 border ${item.border} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                                    <item.icon size={15} className={item.color} />
                                </div>
                                <div className="min-w-0">
                                    <p className="text-sm font-semibold text-white mb-0.5">{item.title}</p>
                                    <p className="text-[11px] text-white/35 leading-relaxed">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}

                        {/* GitHub contribution chart */}
                        <div className="mt-2 p-3 rounded-xl bg-dark-100 border border-white/5">
                            <p className="text-[9px] font-bold text-white/25 uppercase tracking-wider mb-2">GitHub Activity · @zebra0307</p>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="https://ghchart.rshah.org/14F195/zebra0307"
                                alt="GitHub contributions"
                                className="w-full rounded"
                                loading="lazy"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
