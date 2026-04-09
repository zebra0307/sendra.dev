"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail, Download } from "lucide-react";

function useTypewriter(words: string[], speed = 90, deleteSpeed = 55, pauseMs = 1800) {
    const [text, setText] = React.useState("");
    const [wordIndex, setWordIndex] = React.useState(0);
    const [isDeleting, setIsDeleting] = React.useState(false);
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        if (isPaused) return;
        const currentWord = words[wordIndex % words.length];
        const timeout = setTimeout(() => {
            if (!isDeleting) {
                const next = currentWord.slice(0, text.length + 1);
                setText(next);
                if (next === currentWord) {
                    setIsPaused(true);
                    setTimeout(() => { setIsPaused(false); setIsDeleting(true); }, pauseMs);
                }
            } else {
                const next = currentWord.slice(0, text.length - 1);
                setText(next);
                if (next === "") { setIsDeleting(false); setWordIndex((p) => p + 1); }
            }
        }, isDeleting ? deleteSpeed : speed);
        return () => clearTimeout(timeout);
    }, [text, isDeleting, isPaused, wordIndex, words, speed, deleteSpeed, pauseMs]);
    return text;
}

const ROLES = [
    "Full-Stack Engineer",
    "React & Next.js Developer",
    "Node.js & API Architect",
    "Web3 & Solana Dev",
    "TypeScript Specialist",
];

const TECH_STACK = [
    { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
    { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    // { name: "Rust", icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/rust/rust-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
];

function scrollTo(id: string) {
    const target = document.querySelector(id) as HTMLElement;
    if (!target) return;
    const container = document.getElementById("main-scroll");
    if (container) {
        const scrollPos = container.scrollTop + target.getBoundingClientRect().top - container.getBoundingClientRect().top;
        container.scrollTo({ top: Math.max(0, scrollPos), behavior: "smooth" });
    } else {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
}

export function Hero() {
    const typedRole = useTypewriter(ROLES);

    return (
        <section id="hero" className="relative flex items-center justify-center overflow-hidden py-14 md:py-20 min-h-[90vh]">
            <div className="container relative z-10 px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* Left: Text */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                    >
                        {/* Identity badges */}
                        <div className="flex flex-wrap items-center gap-2 mb-4">
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-secondary/10 border border-secondary/20 text-secondary">
                                <span className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse" />
                                Full-Stack Engineer
                            </span>
                            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-white/5 border border-white/8 text-white/35">
                                + Web3 / Solana
                            </span>
                        </div>

                        <h1 className="font-heading text-4xl md:text-6xl text-white mb-3 tracking-tight leading-tight">
                            Hey, I&apos;m<br />Satyendra!
                        </h1>

                        {/* Typing Animation */}
                        <div className="flex items-center gap-2 mb-4 h-8">
                            <span className="text-base md:text-lg font-semibold text-secondary">
                                {typedRole}
                            </span>
                            <span className="w-0.5 h-5 bg-secondary animate-pulse" />
                        </div>

                        <p className="max-w-lg text-gray-500 text-sm leading-relaxed mb-7">
                            I engineer <span className="text-white/80 font-medium">production-grade full-stack applications</span> — React frontends, Node.js backends, and cloud-ready APIs. With a rare edge in{" "}
                            <span className="text-secondary/80 font-medium">Solana smart contracts</span>, I bridge Web2 engineering and Web3.
                        </p>

                        {/* Tech Stack strip */}
                        <div>
                            <p className="text-[9px] font-bold text-white/20 uppercase tracking-wider mb-2">Core Stack</p>
                            <div className="flex flex-wrap gap-1.5">
                                {TECH_STACK.map((tech) => (
                                    <div
                                        key={tech.name}
                                        title={tech.name}
                                        className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/4 border border-white/5 hover:bg-white/8 hover:border-white/12 transition-all duration-150 cursor-default"
                                    >
                                        {/* eslint-disable-next-line @next/next/no-img-element */}
                                        <img src={tech.icon} alt={tech.name} width={14} height={14} className="w-3.5 h-3.5 object-contain" loading="eager" />
                                        <span className="text-[11px] text-white/40">{tech.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Right: Photo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.15 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-sm mx-auto rounded-[24px] overflow-hidden border border-white/8 bg-neutral-900 shadow-xl shadow-black/70">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                                src="/satyendra.jpeg"
                                alt="Satyendra Yadav — Full-Stack & Web3 Engineer"
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                            <div className="absolute bottom-4 left-4 right-4">
                                <div className="bg-black/65 backdrop-blur-md border border-white/8 rounded-xl px-3 py-2 flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-secondary animate-pulse flex-shrink-0" />
                                    <span className="text-xs text-white/75">Available for full-time roles</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
