"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Mail, MessageSquare, Twitter } from "lucide-react";

export function Contact() {
    return (
        <section id="contact" className="py-20 md:py-32 relative overflow-hidden">
            {/* Background Gradients */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-[120px]" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="bg-dark-100 border border-white/10 rounded-2xl p-8 md:p-12 backdrop-blur-sm"
                    >
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                            <MessageSquare size={32} />
                        </div>

                        <h2 className="font-heading text-4xl md:text-5xl text-white mb-6">
                            Ready to <span className="text-primary">Collaborate</span>
                        </h2>

                        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                            Whether you're looking to build a decentralized application, smart contracts, or just discussions on Web3, I'm always open to new opportunities.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-[200px] border-white/10 hover:bg-white/5 text-white rounded-full h-14 text-base font-medium flex items-center justify-center gap-2"
                                onClick={() => window.location.href = 'mailto:zzebra0307@gmail.com'}
                            >
                                <Mail className="h-5 w-5" />
                                <span>Send me an Email</span>
                            </Button>
                            <Button
                                variant="outline"
                                size="lg"
                                className="w-full sm:w-[200px] border-white/10 hover:bg-white/5 text-white rounded-full h-14 text-base font-medium flex items-center justify-center gap-2"
                                onClick={() => window.open('https://x.com/zebradotsol', '_blank')}
                            >
                                <Twitter className="h-5 w-5" />
                                <span>DM on Twitter</span>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
