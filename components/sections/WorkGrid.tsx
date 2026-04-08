"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";

const works = [
    {
        id: 1,
        title: "Solana Twitter dApp",
        description: "A fully decentralized social media platform built on Solana. Features real-time on-chain interactions and wallet-based authentication.",
        link: "https://github.com/zebra0307/solana-twitter-dapp",
        demo: "https://decentralised-solana-poll.vercel.app/",
        tags: ["Rust", "Anchor", "Solana", "React"],
        gradient: "from-purple-500/20 via-primary/10 to-transparent",
        accent: "border-primary/30",
    },
    {
        id: 2,
        title: "Blogs Application (MERN)",
        description: "A full-stack blog application for content creation and consumption with seamless user authentication and rich text editing.",
        link: "https://github.com/zebra0307/blogs-MERN",
        demo: null,
        tags: ["React", "Node.js", "MongoDB", "Express"],
        gradient: "from-blue-500/20 via-accent/10 to-transparent",
        accent: "border-accent/30",
    },
    {
        id: 3,
        title: "NFT Marketplace Escrow",
        description: "A marketplace program where tokens can be traded for other tokens or SOL. Implements an escrow mechanism for trustless trading.",
        link: "https://github.com/zebra0307/NFT-Marketplace",
        demo: null,
        tags: ["Rust", "Anchor", "Solana", "IPFS"],
        gradient: "from-green-500/20 via-secondary/10 to-transparent",
        accent: "border-secondary/30",
    },
    {
        id: 4,
        title: "Solana Token",
        description: "A collection of Solana blockchain projects demonstrating token standards, SPL token creation, and NFT implementations.",
        link: "https://github.com/zebra0307/Solana-Token",
        demo: null,
        tags: ["Next.js", "Web3.js", "DeFi", "Solana"],
        gradient: "from-orange-500/20 via-yellow-500/10 to-transparent",
        accent: "border-yellow-500/30",
    },
    {
        id: 5,
        title: "Keep Notes dApp",
        description: "A decentralized note-taking application on Solana. Store and manage your notes immutably on-chain with full ownership.",
        link: "https://github.com/zebra0307/Keep_Notes-dapp",
        demo: null,
        tags: ["Rust", "Anchor", "Solana", "React"],
        gradient: "from-pink-500/20 via-purple-500/10 to-transparent",
        accent: "border-pink-500/30",
    },
    {
        id: 6,
        title: "Decentralised Poll",
        description: "A trustless on-chain polling system on Solana. Create and vote on polls with full transparency and censorship resistance.",
        link: "https://github.com/zebra0307",
        demo: "https://decentralised-solana-poll.vercel.app/",
        tags: ["Rust", "Anchor", "Solana", "Next.js"],
        gradient: "from-cyan-500/20 via-blue-500/10 to-transparent",
        accent: "border-cyan-500/30",
    },
];

export function WorkGrid() {
    return (
        <section className="py-20 md:py-28 px-4 md:px-10">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                    Featured <span className="text-primary">Projects</span>
                </h2>
                <p className="text-white/50 text-lg max-w-xl">
                    A selection of decentralized applications and web systems I&apos;ve engineered.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {works.map((work, index) => (
                    <motion.div
                        key={work.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className={`group rounded-2xl border bg-dark-100 overflow-hidden hover:bg-dark-200 transition-all duration-300 flex flex-col ${work.accent} hover:shadow-lg hover:shadow-primary/5`}
                    >
                        {/* Gradient top area */}
                        <div className={`h-40 w-full bg-gradient-to-br ${work.gradient} relative overflow-hidden`}>
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <ArrowUpRight className="text-white w-10 h-10" />
                            </div>
                            {/* Tags floating on the gradient */}
                            <div className="absolute bottom-3 left-3 flex flex-wrap gap-1.5">
                                {work.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 text-xs font-semibold bg-black/50 backdrop-blur-sm text-white/80 rounded-full border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                {work.title}
                            </h3>
                            <p className="text-white/50 text-sm leading-relaxed line-clamp-3 flex-grow">
                                {work.description}
                            </p>

                            {/* Links */}
                            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
                                <a
                                    href={work.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs font-medium text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-2 rounded-lg"
                                >
                                    <Github size={14} />
                                    View Code
                                </a>
                                {work.demo && (
                                    <a
                                        href={work.demo}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 text-xs font-medium text-primary hover:text-white transition-colors"
                                    >
                                        <ExternalLink size={14} />
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="mt-10 text-center">
                <a
                    href="https://github.com/zebra0307"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-white/50 hover:text-white transition-colors border border-white/10 hover:border-white/30 px-6 py-3 rounded-xl bg-white/5 hover:bg-white/10"
                >
                    <Github size={16} />
                    View All Repositories
                </a>
            </div>
        </section>
    );
}
