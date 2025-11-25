"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowDown, Terminal, Code2 } from "lucide-react";

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-10 md:pt-0">
            <div className="container relative z-10 px-6 md:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex items-center gap-3 mb-6 text-xs font-bold tracking-widest uppercase">
                            <span className="text-primary">Building on Solana</span>
                            <span className="text-white/20">|</span>
                            <span className="text-white/60">Smart Contract Developer</span>
                        </div>

                        <h1 className="font-heading text-5xl md:text-7xl text-white mb-6 tracking-tight">
                            Hey, I'm Satyendra!
                        </h1>

                        <p className="max-w-xl text-gray-400 text-lg leading-relaxed mb-12">
                            I am a versatile <span className="text-white font-medium">Full-Stack Engineer</span> specializing in developing <span className="text-white font-medium">highly scalable and performant web applications</span>. My expertise spans the <span className="text-primary font-medium">MERN stack</span> (MongoDB, Express.js, React, Node.js) for building robust, high-performance web architecture, and <span className="text-white font-medium">smart contract development</span> for decentralized applications. Currently, I'm leveraging these skills to engineer next-generation <span className="text-accent font-medium">DeFi protocols</span> on <span className="text-secondary font-medium">Solana</span>, focusing on <span className="text-white font-medium">speed, security, and low-latency</span> dApp delivery.
                        </p>

                        {/* Companies Section */}
                        <div>
                            {/* <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-6">Organizations I've Learnt and learnnig From</h3> */}
                            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                                {/* Using text placeholders for logos to match the clean look */}
                                <span className="text-xl font-bold text-white">Solana</span>
                                <span className="text-xl font-bold text-white">Ackee</span>
                                <span className="text-xl font-bold text-white">Turbine</span>
                                {/* <span className="text-xl font-bold text-white">100xDevs</span> */}
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Side - Profile Image Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-[4/5] w-full max-w-md mx-auto rounded-[32px] overflow-hidden border border-white/10 bg-neutral-900 shadow-2xl">
                            <img
                                src="/satyendra.jpeg"
                                alt="Satyendra Yadav"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

                            {/* Floating Badge (Optional, matching reference 'IMG' tag style) */}

                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
