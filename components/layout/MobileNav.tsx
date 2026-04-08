"use client";

import * as React from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, socialLinks } from "./Sidebar";

export function MobileNav() {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            {/* Top Bar */}
            <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-black/80 backdrop-blur-md border-b border-white/10 z-50 flex items-center justify-between px-4">
                <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
                        <img src="/satyendra.jpeg" alt="Satyendra Yadav" className="w-full h-full object-cover object-top" />
                    </div>
                    <span className="font-bold text-white tracking-tight">Satyendra Yadav</span>
                </div>
                <button
                    onClick={toggleMenu}
                    className="p-2 text-white/60 hover:text-white transition-colors"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Drawer */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
                        />

                        {/* Drawer Content */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 w-[280px] bg-black border-r border-white/10 z-50 flex flex-col p-6 gap-8 lg:hidden overflow-y-auto"
                        >
                            {/* Profile Section */}
                            <div className="flex items-center gap-4 mt-2">
                                <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-900 border border-white/10">
                                    <img src="/satyendra.jpeg" alt="Satyendra Yadav" className="w-full h-full object-cover" />
                                </div>
                                <div>
                                    <h1 className="text-base font-bold text-white tracking-tight leading-tight">Satyendra Yadav</h1>
                                    <p className="text-xs text-white/50 font-medium">Full Stack Engineer</p>
                                </div>
                            </div>

                            {/* Navigation Section */}
                            <div className="flex-1 flex flex-col gap-6">
                                <div>

                                    <nav className="flex flex-col gap-1">
                                        {navLinks.map((link) => {
                                            const Icon = link.icon;
                                            return (
                                                <a
                                                    key={link.name}
                                                    href={link.href}
                                                    className="group flex items-center gap-3 px-3 py-2 rounded-lg text-white/50 hover:text-white hover:bg-white/5 transition-all duration-200"
                                                    onClick={(e) => {
                                                        e.preventDefault();
                                                        const target = document.querySelector(link.href) as HTMLElement;
                                                        if (!target) return;
                                                        const container = document.getElementById("main-scroll");
                                                        if (container) {
                                                            const containerRect = container.getBoundingClientRect();
                                                            const targetRect = target.getBoundingClientRect();
                                                            const scrollTo = container.scrollTop + (targetRect.top - containerRect.top) - 24;
                                                            container.scrollTo({ top: scrollTo, behavior: "smooth" });
                                                        } else {
                                                            target.scrollIntoView({ behavior: "smooth" });
                                                        }
                                                        setIsOpen(false);
                                                    }}
                                                >
                                                    <Icon size={18} className="text-white/40 group-hover:text-white transition-colors" />
                                                    <span className="text-sm font-medium">{link.name}</span>
                                                </a>
                                            );
                                        })}
                                    </nav>
                                </div>
                            </div>

                            {/* Socials Section */}
                            <div>
                                <h3 className="text-[10px] font-bold text-white/30 uppercase tracking-wider mb-3 px-3">Socials</h3>
                                <div className="grid grid-cols-5 gap-2 px-1">
                                    {socialLinks.map((social) => (
                                        <a
                                            key={social.name}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            title={social.name}
                                            className="aspect-square flex items-center justify-center rounded-lg text-white/40 hover:text-white hover:bg-white/5 transition-all duration-200"
                                        >
                                            <social.icon size={18} />
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
