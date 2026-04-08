"use client";

import React from "react";
import { motion } from "framer-motion";

export function ScrollProgress() {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const container = document.getElementById("main-scroll");
        if (!container) return;

        const handleScroll = () => {
            const { scrollTop, scrollHeight, clientHeight } = container;
            const total = scrollHeight - clientHeight;
            const pct = total > 0 ? (scrollTop / total) * 100 : 0;
            setProgress(pct);
        };

        container.addEventListener("scroll", handleScroll, { passive: true });
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="fixed top-0 left-0 right-0 h-[3px] z-[200]">
            <motion.div
                className="h-full bg-gradient-to-r from-secondary/60 to-secondary"
                style={{ width: `${progress}%` }}
                transition={{ ease: "linear", duration: 0.05 }}
            />
        </div>
    );
}
