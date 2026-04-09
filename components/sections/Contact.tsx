"use client";

import React from "react";
import { motion } from "framer-motion";
import { Mail, Twitter, Linkedin, Github, Send, CheckCircle, Loader2 } from "lucide-react";

const socialLinks = [
    { label: "GitHub", icon: Github, href: "https://github.com/zebra0307" },
    { label: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/satyendrayadav0307/" },
    { label: "Twitter / X", icon: Twitter, href: "https://x.com/stndr_0307" },
    { label: "Email", icon: Mail, href: "mailto:y0307satyendra@gmail.com" },
];

type FormState = "idle" | "sending" | "sent" | "error";

export function Contact() {
    const [formState, setFormState] = React.useState<FormState>("idle");
    const [form, setForm] = React.useState({ name: "", email: "", subject: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormState("sending");

        try {
            const res = await fetch("https://formsubmit.co/ajax/y0307satyendra@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify({
                    name: form.name,
                    email: form.email,
                    subject: form.subject || "Portfolio Contact",
                    message: form.message,
                    _replyto: form.email,
                    _subject: `[Portfolio] ${form.subject || "New message"} from ${form.name}`,
                }),
            });

            if (res.ok) {
                setFormState("sent");
                setForm({ name: "", email: "", subject: "", message: "" });
            } else {
                setFormState("error");
            }
        } catch {
            setFormState("error");
        }
    };

    return (
        <section id="contact" className="py-10 md:py-14 relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-secondary/4 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-8"
                >
                    <h2 className="font-heading text-3xl md:text-4xl text-white mb-2">
                        Let&apos;s <span className="text-secondary">Build Together</span>
                    </h2>
                    <p className="text-gray-400 max-w-xl mx-auto">
                        {/* Have a project in mind? Whether it&apos;s DeFi, dApps, or full-stack — I&apos;d love to build it with you. */}
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-100 border border-white/10 rounded-2xl p-6 md:p-8"
                    >
                        {formState === "sent" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center py-12 gap-4">
                                <CheckCircle size={56} className="text-secondary" />
                                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                                <p className="text-gray-400">Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                                <button
                                    onClick={() => setFormState("idle")}
                                    className="mt-4 text-sm text-secondary hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                                <h3 className="text-xl font-bold text-white mb-2">Send a Message</h3>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Name *</label>
                                        <input
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            required
                                            placeholder="Your name"
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-secondary/40 focus:bg-secondary/5 transition-all"
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Email *</label>
                                        <input
                                            name="email"
                                            type="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            required
                                            placeholder="your@email.com"
                                            className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-secondary/40 focus:bg-secondary/5 transition-all"
                                        />
                                    </div>
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Subject</label>
                                    <input
                                        name="subject"
                                        value={form.subject}
                                        onChange={handleChange}
                                        placeholder="Project idea, collaboration, etc."
                                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-secondary/40 focus:bg-secondary/5 transition-all"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label className="text-xs font-semibold text-white/50 uppercase tracking-wider">Message *</label>
                                    <textarea
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        required
                                        rows={5}
                                        placeholder="Tell me about your project or idea..."
                                        className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/30 focus:outline-none focus:border-secondary/40 focus:bg-secondary/5 transition-all resize-none"
                                    />
                                </div>

                                {formState === "error" && (
                                    <p className="text-sm text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg px-4 py-2">
                                        Something went wrong. Please try emailing directly at y0307satyendra@gmail.com
                                    </p>
                                )}

                                <button
                                    type="submit"
                                    disabled={formState === "sending"}
                                    className="mt-2 w-full flex items-center justify-center gap-2 bg-secondary hover:bg-secondary/80 disabled:opacity-50 disabled:cursor-not-allowed text-black font-semibold px-6 py-3 rounded-xl transition-all duration-300 text-sm"
                                >
                                    {formState === "sending" ? (
                                        <><Loader2 size={18} className="animate-spin" /> Sending...</>
                                    ) : (
                                        <><Send size={18} /> Send Message</>
                                    )}
                                </button>
                            </form>
                        )}
                    </motion.div>

                    {/* Right side: Info + Social Links */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col gap-6"
                    >
                        {/* Info card */}
                        <div className="bg-dark-100 border border-white/10 rounded-2xl p-6">
                            <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary mb-4">
                                <Mail size={24} />
                            </div>
                            <h3 className="text-lg font-bold text-white mb-2">Open to Opportunities</h3>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Whether it&apos;s a full-time role, freelance project, or an exciting Web3 collaboration — I&apos;m always open to discussing new opportunities.
                            </p>
                            <a
                                href="mailto:y0307satyendra@gmail.com"
                                className="inline-flex items-center gap-2 mt-4 text-sm font-medium text-secondary hover:text-white transition-colors"
                            >
                                <Mail size={14} />
                                y0307satyendra@gmail.com
                            </a>
                        </div>

                        {/* Social Links Grid */}
                        <div className="bg-dark-100 border border-white/10 rounded-2xl p-6">
                            <h3 className="text-sm font-semibold text-white/50 uppercase tracking-wider mb-4">Find me on</h3>
                            <div className="grid grid-cols-2 gap-3">
                                {socialLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith("mailto") ? undefined : "_blank"}
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl px-4 py-3 transition-all duration-200 group"
                                    >
                                        <link.icon size={18} className="text-white/50 group-hover:text-white transition-colors" />
                                        <span className="text-sm font-medium text-white/70 group-hover:text-white transition-colors">{link.label}</span>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Location + availability */}
                        <div className="flex items-center gap-3 px-4 py-3 rounded-xl border border-secondary/20 bg-secondary/5">
                            <div className="w-2.5 h-2.5 rounded-full bg-secondary animate-pulse" />
                            <span className="text-sm text-secondary font-medium">Available for remote work worldwide</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
