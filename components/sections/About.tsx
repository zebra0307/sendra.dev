"use client";

import { motion } from "framer-motion";
import { Code2, Cpu, Globe, Zap } from "lucide-react";

export function About() {
    return (
        <section id="about" className="py-20 md:py-32 relative overflow-hidden">
            <div className="container px-4 md:px-6">
                <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="font-heading text-4xl md:text-5xl text-white mb-8">
                            About <span className="text-primary">Me</span>
                        </h2>

                        <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
                            <p>
                                I am <span className="text-white font-medium">Satyendra Yadav</span>, a Computer Science undergraduate with a passion for building decentralized systems. My journey bridges the gap between traditional <span className="text-primary">Web2</span> engineering and the frontier of <span className="text-secondary">Web3</span>.
                            </p>
                            <p>
                                From architecting scalable dApps on Solana to focusing on creating high-performance, secure, and user-centric solutions.
                            </p>
                            <p>
                                I don't just write code; I build <span className="text-white italic">digital infrastructure</span> that empowers users.
                            </p>
                        </div>

                        {/* Stats / Highlights */}
                        <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
                            <div>
                                <h3 className="text-3xl font-heading text-white">10+</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Projects</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-heading text-white">Web3</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Native</p>
                            </div>
                            <div>
                                <h3 className="text-3xl font-heading text-white">2028</h3>
                                <p className="text-sm text-gray-500 uppercase tracking-wider">Graduation</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual / Symbolic Side */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10 border border-white/10 backdrop-blur-sm p-8 flex items-center justify-center">
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

                            <div className="grid grid-cols-2 gap-4 w-full h-full">
                                <div className="bg-background/50 rounded-xl p-6 flex flex-col items-center justify-center border border-white/5 hover:border-primary/50 transition-colors group">
                                    <Code2 size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium text-gray-300">Full Stack</span>
                                </div>
                                <div className="bg-background/50 rounded-xl p-6 flex flex-col items-center justify-center border border-white/5 hover:border-secondary/50 transition-colors group">
                                    <Cpu size={40} className="text-secondary mb-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium text-gray-300">Smart Contracts</span>
                                </div>
                                <div className="bg-background/50 rounded-xl p-6 flex flex-col items-center justify-center border border-white/5 hover:border-accent/50 transition-colors group">
                                    <Globe size={40} className="text-accent mb-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium text-gray-300">DeFi</span>
                                </div>
                                <div className="bg-background/50 rounded-xl p-6 flex flex-col items-center justify-center border border-white/5 hover:border-primary/50 transition-colors group">
                                    <Zap size={40} className="text-primary mb-4 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm font-medium text-gray-300">Performance</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
