"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

type Work = {
    id: number;
    title: string;
    description: string;
    link: string;
    demo: string | null;
    tags: string[];
    imageUrl: string;
};

const works: Work[] = [
    {
        id: 1,
        title: "Blogs Application (MERN)",
        description: "A MERN stack blog application for content creation and consumption with seamless user authentication.",
        link: "https://github.com/zebra0307/blogs-MERN",
        demo: null,
        tags: ["React", "Node.js", "MongoDB", "Express"],
        imageUrl: "/projects/zblog.png",
    },
    {
        id: 2,
        title: "Oceanaverse",
        description: "A decentralized Blue Carbon Registry on Solana. It enables transparent monitoring, reporting, and verification (MRV) for blue carbon credits using blockchain.",
        link: "https://github.com/zebra0307/blue-carbon-registry",
        demo: "https://oceanaverse.vercel.app/",
        tags: ["Solana", "Rust", "Anchor", "Next.js", "Web3"],
        imageUrl: "/projects/oceanaverse.png",
    },
    {
        id: 3,
        title: "Accord Registry",
        description: "A secure protocol for notarizing digital assets and documents. Built to provide an immutable audit trail and verifiable proof of ownership on-chain.",
        link: "https://github.com/zebra0307/accord-registry_protocol",
        demo: "https://accordregistry.vercel.app/",
        tags: ["Rust", "Solana", "Anchor", "TypeScript", "Next.js"],
        imageUrl: "/projects/accord-registry.png",
    },
    {
        id: 4,
        title: "XDotSol",
        description: "A decentralized polling and voting application on Solana. Leverages the speed of the blockchain to ensure tamper-proof results and transparent community governance.",
        link: "https://github.com/zebra0307/Decentralised-Solana-Poll",
        demo: "https://xdotsol.vercel.app/",
        tags: ["Solana", "Rust", "Anchor", "Next.js", "Tailwind CSS"],
        imageUrl: "/projects/xdotsol-preview.png",
    },
];

export function WorkGrid() {
    return (
        <section className="py-20 md:py-28 px-4 md:px-10">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">
                    My <span className="text-primary">Projects</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {works.map((work, index) => (
                    <motion.div
                        key={work.id}
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.08 }}
                        className="group rounded-2xl border border-white/10 bg-dark-100 overflow-hidden hover:bg-dark-200 hover:border-white/20 transition-all duration-300 flex flex-col hover:shadow-lg hover:shadow-primary/5"
                    >
                        {/* Project image */}
                        <div className="h-40 w-full relative overflow-hidden bg-dark-200">
                            <img
                                src={work.imageUrl}
                                alt={`${work.title} preview`}
                                loading="lazy"
                                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                                {work.title}
                            </h3>
                            <div className="mb-3 flex flex-wrap gap-1.5">
                                {work.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-0.5 text-xs font-semibold bg-white/5 text-white/70 rounded-full border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
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
