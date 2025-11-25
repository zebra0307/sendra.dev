"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
    { name: "GitHub", href: "https://github.com/zebra0307", icon: Github },
    { name: "LinkedIn", href: "https://linkedin.com/in/satyendra-yadav-8b0140323", icon: Linkedin },
    { name: "Twitter", href: "https://x.com/zebradotsol", icon: Twitter },
    { name: "Email", href: "mailto:zzebra0307@gmail.com", icon: Mail },
];

export function Footer() {
    return (
        <footer className="bg-background border-t border-white/10 py-12">
            <div className="container mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left">
                    <p className="font-heading text-xl text-white mb-2">Satyendra Yadav</p>
                    <p className="text-sm text-gray-400">
                        &copy; {new Date().getFullYear()} All rights reserved.
                    </p>
                </div>

                <div className="flex items-center gap-6">
                    {socialLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-400 hover:text-primary transition-colors transform hover:scale-110 duration-200"
                            aria-label={item.name}
                        >
                            <item.icon size={20} />
                        </Link>
                    ))}
                </div>
            </div>
        </footer>
    );
}
