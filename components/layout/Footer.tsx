// "use client";

// import Link from "next/link";
// import { Github, Linkedin, Twitter, Mail } from "lucide-react";

// const socialLinks = [
//     { name: "GitHub", href: "https://github.com/zebra0307", icon: Github },
//     { name: "LinkedIn", href: "https://linkedin.com/in/satyendra-yadav-8b0140323", icon: Linkedin },
//     { name: "Twitter", href: "https://x.com/zebradotsol", icon: Twitter },
//     { name: "Email", href: "mailto:y0307satyendra@gmail.com", icon: Mail },
// ];

// export function Footer() {
//     return (
//         <footer className="border-t border-white/5 py-3 bg-black">
//             <div className="container mx-auto px-4 md:px-6 flex items-center justify-between gap-4">
//                 <p className="text-xs text-white/25">
//                     © {new Date().getFullYear()} Satyendra Yadav
//                 </p>
//                 <div className="flex items-center gap-4">
//                     {socialLinks.map((item) => (
//                         <Link
//                             key={item.name}
//                             href={item.href}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="text-white/25 hover:text-secondary transition-colors duration-200"
//                             aria-label={item.name}
//                         >
//                             <item.icon size={14} />
//                         </Link>
//                     ))}
//                 </div>
//             </div>
//         </footer>
//     );
// }
