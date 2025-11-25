import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Sidebar } from "@/components/layout/Sidebar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Satyendra Yadav",
  description: "Responsive Portfolio",
};

import { MobileNav } from "@/components/layout/MobileNav";

// ... imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={cn(
          inter.variable,
          "min-h-screen bg-black text-white antialiased font-sans selection:bg-white/20 selection:text-white"
        )}
      >
        <MobileNav />
        <div className="min-h-screen lg:flex">
          {/* Sidebar Column */}
          <Sidebar />

          {/* Main Content Column */}
          <main className="flex-1 lg:ml-[280px] p-0 lg:p-0 pt-16 lg:pt-0">
            {/* Floating Card Container - Desktop Only Styles applied via class */}
            <div className="min-h-[calc(100vh-64px)] lg:min-h-0 lg:h-[calc(100vh-40px)] lg:m-5 lg:rounded-[40px] lg:overflow-y-auto lg:bg-neutral-900 lg:shadow-lg lg:shadow-neutral-800/40 transition-all duration-300 ease-in-out bg-neutral-900 lg:bg-transparent">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
