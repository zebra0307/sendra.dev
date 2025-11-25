"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Github, Linkedin, Twitter, Mail, MapPin, Code2, Home, User, Briefcase, Folder, Zap, MessageSquare } from "lucide-react";

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
    { name: "Email", href: "mailto:zzebra0307@gmail.com", icon: Mail },
];

export function Sidebar() {
    const pathname = usePathname();
    const [time, setTime] = React.useState("");

    React.useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            setTime(now.toLocaleString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
                hour: "2-digit",
                minute: "2-digit",
            }));
        };
        updateTime();
        const interval = setInterval(updateTime, 60000);
        return () => clearInterval(interval);
    }, []);

    return (
        <aside className="w-full lg:w-[280px] lg:fixed lg:left-0 lg:top-0 lg:bottom-0 bg-black hidden lg:flex flex-col p-6 gap-8 z-50">
            {/* Profile Section */}
            <div className="flex items-center gap-4">
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
                                        document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" });
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

            {/* Location & Time
            <div className="text-[10px] text-white/20 font-mono px-3 mt-2">
                <div className="flex items-center gap-1.5 mb-1">
                    <MapPin size={10} />
                    <span>28.6139° N, 77.2090° E</span>
                </div>
                <div>{time}</div>
            </div> */}
        </aside>
    );
}
