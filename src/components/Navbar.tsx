"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HangerGoldSVG } from "./SvgDecorators";

const links = ["HOME", "OUR WORK"];
const ease = [0.25, 0.46, 0.45, 0.94] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <motion.nav
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled ? "rgba(245,240,235,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,154,74,0.25)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8">
            <HangerGoldSVG className="w-full h-full" />
          </div>
          <span className="font-playfair text-lg font-semibold text-dark tracking-wide">
            Threads Digital
          </span>
        </div>

        {/* Nav Links */}
        <div className="hidden lg:flex items-center gap-7">
          {links.map((link, i) => (
            <motion.a
              key={link}
              href="#"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 + i * 0.07, ease }}
              className={`text-xs font-grotesk tracking-widest transition-colors duration-200 relative group ${
                link === "OUR WORK" ? "text-dark" : "text-light-muted hover:text-dark"
              }`}
            >
              {link}
              {link === "OUR WORK" && (
                <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold" />
              )}
              <span className="absolute -bottom-0.5 left-0 right-0 h-px bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-left" />
            </motion.a>
          ))}
        </div>

        {/* CTA */}
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.55, ease }}
          whileHover={{ scale: 1.03, backgroundColor: "#1a1f1c" }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block px-5 py-2.5 bg-dark text-cream text-xs font-grotesk font-medium tracking-widest rounded-full transition-all duration-200 group"
          style={{ border: "1px solid transparent" }}
          onMouseEnter={e => (e.currentTarget.style.borderColor = "#c49a4a")}
          onMouseLeave={e => (e.currentTarget.style.borderColor = "transparent")}
        >
          LET&apos;S WORK TOGETHER →
        </motion.button>
      </div>
    </motion.nav>
  );
}
