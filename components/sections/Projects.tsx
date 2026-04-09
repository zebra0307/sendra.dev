"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
    title: string;
    description: string;
    tags: string[];
    links: {
        demo: string;
        code: string;
    };
    image: string;
    imageUrl?: string;
}

const projects: Project[] = [
    {
        title: "Blogs Application (MERN)",
        description: "A MERN stack blog application for content creation and consumption with seamless user authentication.",
        tags: ["React", "Node.js", "MongoDB", "Express"],
        links: {
            demo: "#",
            code: "https://github.com/zebra0307/blogs-MERN",
        },
        image: "bg-gradient-to-br from-secondary/10 to-secondary/5",
    },
    {
        title: "Oceanaverse",
        description: "A decentralized Blue Carbon Registry on Solana. It enables transparent monitoring, reporting, and verification (MRV) for blue carbon credits using blockchain.",
        tags: ["Solana", "Rust", "Anchor", "Next.js", "Web3"],
        links: {
            demo: "https://oceanaverse.vercel.app/",
            code: "https://github.com/zebra0307/blue-carbon-registry",
        },
        image: "bg-gradient-to-br from-blue-500/10 to-teal-500/5",
        imageUrl: "/oceanaverse-preview.png",
    },
    {
        title: "Accord Registry",
        description: "A secure protocol for notarizing digital assets and documents. Built to provide an immutable audit trail and verifiable proof of ownership on-chain.",
        tags: ["Rust", "Solana", "Anchor", "TypeScript", "Next.js"],
        links: {
            demo: "https://accordregistry.vercel.app/",
            code: "https://github.com/zebra0307/accord-registry_protocol",
        },
        image: "bg-gradient-to-br from-indigo-500/10 to-purple-500/5",
        imageUrl: "/accord-registry-preview.png",
    },
    {
        title: "XDotSol",
        description: "A decentralized polling and voting application on Solana. Leverages the speed of the blockchain to ensure tamper-proof results and transparent community governance.",
        tags: ["Solana", "Rust", "Anchor", "Next.js", "Tailwind CSS"],
        links: {
            demo: "https://xdotsol.vercel.app/",
            code: "https://github.com/zebra0307/Decentralised-Solana-Poll",
        },
        image: "bg-gradient-to-br from-orange-500/10 to-yellow-500/5",
        imageUrl: "/xdotsol-preview.png",
    }
];

export function Projects() {
    return (
        <section id="projects" className="py-10 md:py-14 bg-background">
            <div className="container px-4 md:px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4"
                >
                    <div>
                        <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
                            <span className="text-secondary">Projects</span>
                        </h2>
                        
                    </div>
                    <Button variant="outline" className="hidden md:flex gap-2 border-white/10 hover:bg-white/5">
                        View All Repositories <Github size={16} />
                    </Button>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group rounded-xl border border-white/8 bg-dark-100 overflow-hidden hover:border-secondary/30 transition-all duration-300 flex flex-col h-full"
                        >
                            {/* Project Image / Preview Area */}
                            <div className={`relative h-48 w-full ${project.imageUrl ? "" : project.image} overflow-hidden`}>
                                {project.imageUrl ? (
                                    <Image
                                        src={project.imageUrl}
                                        alt={project.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    />
                                ) : (
                                    <>
                                        <div className="absolute inset-0 bg-dark-100/10 group-hover:bg-transparent transition-colors duration-500" />
                                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <ArrowUpRight className="text-white w-8 h-8" />
                                        </div>
                                    </>
                                )}
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-secondary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-gray-400 text-sm mb-4 flex-grow leading-relaxed line-clamp-3">
                                    {project.description}
                                </p>

                                <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                                    <a
                                        href={project.links.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-2 text-xs font-medium text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 px-3 py-2 rounded-md"
                                    >
                                        View Project
                                    </a>
                                    <div className="flex gap-2">
                                        {project.links.demo !== "#" && (
                                            <a href={project.links.demo} target="_blank" rel="noopener noreferrer" className="text-white/35 hover:text-secondary transition-colors">
                                                <ExternalLink size={16} />
                                            </a>
                                        )}
                                        <a href={project.links.code} target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-colors">
                                            <Github size={16} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-8 md:hidden text-center">
                    <Button variant="outline" className="w-full gap-2 border-white/10 hover:bg-white/5">
                        View All Repositories <Github size={16} />
                    </Button>
                </div>
            </div>
        </section>
    );
}
