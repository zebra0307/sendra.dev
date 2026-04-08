"use client";

import * as React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends HTMLMotionProps<"button"> {
    variant?: "primary" | "secondary" | "outline" | "ghost";
    size?: "sm" | "md" | "lg";
    children: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
        const variants = {
            primary: "bg-secondary text-black border border-transparent hover:bg-secondary/80",
            secondary: "bg-neutral-800 text-white border border-white/10 hover:border-white/30",
            outline: "bg-transparent text-white border border-white/20 hover:border-white/60 hover:bg-white/5",
            ghost: "bg-transparent text-white/60 hover:text-white hover:bg-white/5",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm rounded-lg",
            md: "px-6 py-3 text-base rounded-xl",
            lg: "px-8 py-4 text-lg rounded-xl",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative overflow-hidden font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-secondary/30 focus:ring-offset-2 focus:ring-offset-black",
                    variants[variant],
                    sizes[size],
                    className
                )}
                {...props}
            >
                <span className="relative z-10 flex items-center gap-2">{children}</span>
                {variant === "primary" && (
                    <motion.div
                        className="absolute inset-0 -z-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                        initial={{ x: "-100%" }}
                        whileHover={{ x: "100%" }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    />
                )}
            </motion.button>
        );
    }
);
Button.displayName = "Button";

export { Button };
