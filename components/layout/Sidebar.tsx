"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail, Home, User, Briefcase, Folder, Zap, MessageSquare } from "lucide-react";

export const navLinks = [
    { name: "Home", href: "#hero", icon: Home },
    { name: "About", href: "#about", icon: User },
    { name: "Experience", href: "#experience", icon: Briefcase },
    { name: "Projects", href: "#projects", icon: Folder },
    { name: "Skills", href: "#skills", icon: Zap },
    { name: "Contact", href: "#contact", icon: MessageSquare },
];

export const socialLinks = [
    { name: "GitHub", href: "https://github.com/zebra0307", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/satyendra-yadav-8b0140323", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/zebradotsol", icon: Twitter },
    { name: "Email", href: "mailto:y0307satyendra@gmail.com", icon: Mail },
];

export function Sidebar() {
    const [activeSection, setActiveSection] = React.useState("hero");

    React.useEffect(() => {
        const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
        const observers: IntersectionObserver[] = [];

        sectionIds.forEach((id) => {
            const el = document.getElementById(id);
            if (!el) return;
            const observer = new IntersectionObserver(
                ([entry]) => { if (entry.isIntersecting) setActiveSection(id); },
                { threshold: 0.3 }
            );
            observer.observe(el);
            observers.push(observer);
        });

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const id = href.replace("#", "");
        const target = document.getElementById(id);
        if (!target) return;
        const container = document.getElementById("main-scroll");
        if (container) {
            // Scroll without any extra offset — align section to very top of container
            const scrollPos = container.scrollTop + target.getBoundingClientRect().top - container.getBoundingClientRect().top;
            container.scrollTo({ top: Math.max(0, scrollPos), behavior: "smooth" });
        } else {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    };

    return (
        <aside className="w-full lg:w-[240px] lg:fixed lg:left-0 lg:top-0 lg:bottom-0 bg-black hidden lg:flex flex-col px-4 py-5 gap-5 z-50 border-r border-white/5">
            {/* Profile */}
            <div className="flex items-center gap-3 px-1">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-900 border border-white/10 flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src="/satyendra.jpeg" alt="Satyendra Yadav" className="w-full h-full object-cover object-top" />
                </div>
                <div className="min-w-0">
                    <h2 className="text-sm font-bold text-white tracking-tight leading-tight truncate">Sendra.dev</h2>
                    {/* <p className="text-[11px] text-white/40 truncate">Full Stack · Web3</p> */}
                </div>
            </div>

            {/* Navigation */}
            <nav className="flex-1 flex flex-col gap-0.5">
                {navLinks.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href.replace("#", "");
                    return (
                        <a
                            key={link.name}
                            href={link.href}
                            aria-label={`Navigate to ${link.name}`}
                            className={cn(
                                "flex items-center gap-2.5 px-2.5 py-1.5 rounded-md text-[13px] font-medium transition-all duration-150",
                                isActive
                                    ? "text-white bg-white/8 border border-white/10"
                                    : "text-white/45 hover:text-white hover:bg-white/5 border border-transparent"
                            )}
                            onClick={(e) => handleNavClick(e, link.href)}
                        >
                            <Icon
                                size={14}
                                className={cn(isActive ? "text-secondary" : "text-white/35 group-hover:text-white")}
                            />
                            {link.name}
                            {isActive && <span className="ml-auto w-1 h-1 rounded-full bg-secondary flex-shrink-0" />}
                        </a>
                    );
                })}
            </nav>

            {/* Socials */}
            <div>
                <p className="text-[9px] font-bold text-white/25 uppercase tracking-wider mb-2 px-2">Socials</p>
                <div className="flex gap-1 px-1">
                    {socialLinks.map((social) => (
                        <a
                            key={social.name}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.name}
                            title={social.name}
                            className="w-8 h-8 flex items-center justify-center rounded-md text-white/35 hover:text-white hover:bg-white/5 transition-all duration-150"
                        >
                            <social.icon size={14} />
                        </a>
                    ))}
                </div>
            </div>

            {/* Resume */}
            <a
                href="/Satyendra_Yadav- resume.pdf"
                download="Satyendra_Yadav_Resume.pdf"
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-md border border-white/10 bg-white/5 hover:bg-white/8 text-white/60 hover:text-white transition-all duration-150 text-[11px] font-semibold"
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                Download Resume
            </a>
        </aside>
    );
}
