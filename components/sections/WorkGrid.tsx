"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

// Using the data from the previous Projects component, adapted for the new format
const works = [
    {
        id: 1,
        title: "Solana Twitter dApp",
        description: "A fully decentralized social media platform built on Solana. Features real-time on-chain interactions.",
        image: null, // Placeholder for now, or use a gradient
        link: "https://github.com/zebra0307",
        tags: ["Rust", "Solana", "React"],
    },
    {
        id: 2,
        title: "DeFi Exchange Interface",
        description: "Modern swap interface for a decentralized exchange with real-time price feeds.",
        image: null,
        link: "https://github.com/zebra0307",
        tags: ["Next.js", "Web3.js", "DeFi"],
    },
    {
        id: 3,
        title: "NFT Marketplace",
        description: "A marketplace for trading ERC-721 and SPL tokens with auction mechanisms.",
        image: null,
        link: "https://github.com/zebra0307",
        tags: ["Solidity", "React", "IPFS"],
    },
    {
        id: 4,
        title: "Portfolio V1",
        description: "The previous iteration of this portfolio, featuring a dark fantasy theme.",
        image: null,
        link: "#",
        tags: ["Next.js", "Tailwind", "Framer"],
    },
];

export function WorkGrid() {
    return (
        <section className="p-6 md:p-10">
            <div className="mb-8">
                <h2 className="text-3xl font-bold text-white mb-2">Projects</h2>
                <p className="text-white/60">A collection of projects and experiments.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {works.map((work) => (
                    <a
                        key={work.id}
                        href={work.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block"
                    >
                        <div className="aspect-[4/5] bg-neutral-900 rounded-xl shadow-md overflow-hidden relative flex flex-col justify-between transition-all duration-200 ease-in transform hover:scale-[1.02] hover:brightness-110 hover:-translate-y-1 hover:border hover:border-white/20 border border-transparent">

                            {/* Image / Gradient Placeholder */}
                            <div className="h-1/2 w-full bg-neutral-800 relative overflow-hidden">
                                {work.image ? (
                                    <img
                                        src={work.image}
                                        alt={work.title}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-neutral-800 to-neutral-900 flex items-center justify-center">
                                        <ArrowUpRight className="text-white/20 group-hover:text-white/40 transition-colors" size={48} />
                                    </div>
                                )}
                            </div>

                            {/* Content */}
                            <div className="p-6 flex flex-col justify-between flex-1">
                                <div>
                                    <h3 className="text-white font-bold text-lg mb-3 group-hover:underline underline-offset-4 decoration-white/30">
                                        {work.title}
                                    </h3>
                                    <p className="text-white/60 text-sm leading-relaxed line-clamp-3">
                                        {work.description}
                                    </p>
                                </div>

                                <div className="mt-4">
                                    <button className="text-white/70 bg-white/10 rounded-md px-4 py-2 text-sm font-medium transition-colors group-hover:bg-white/20 group-hover:text-white">
                                        View Project
                                    </button>
                                </div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </section>

        
    );
}
