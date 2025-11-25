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
            primary: "bg-berserk-red text-white border border-transparent hover:bg-red-900",
            secondary: "bg-berserk-gray text-white border border-berserk-steel/20 hover:border-berserk-red/50",
            outline: "bg-transparent text-white border border-berserk-steel/40 hover:border-berserk-red hover:text-berserk-red",
            ghost: "bg-transparent text-berserk-steel hover:text-white hover:bg-berserk-gray/20",
        };

        const sizes = {
            sm: "px-3 py-1.5 text-sm",
            md: "px-6 py-3 text-base",
            lg: "px-8 py-4 text-lg",
        };

        return (
            <motion.button
                ref={ref}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={cn(
                    "relative overflow-hidden font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-berserk-red/50 focus:ring-offset-2 focus:ring-offset-berserk-black",
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
