"use client";
import { motion } from "framer-motion";
import { ThreadSpoolSVG, NeedlePathSVG, HangerGoldSVG } from "./SvgDecorators";

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "#1a1f1c", borderTop: "1px solid rgba(196,154,74,0.15)" }}
    >
      {/* Decorators */}
      <ThreadSpoolSVG className="absolute left-6 top-8 w-16 pointer-events-none" />
      <NeedlePathSVG className="absolute top-14 left-1/2 -translate-x-1/2 w-56 pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">

        {/* Left — model placeholder */}
        <div className="flex justify-center lg:justify-start">
          <div
            className="relative w-44 h-60 rounded-xl overflow-hidden flex items-end justify-center"
            style={{
              background: "linear-gradient(170deg, #2a3330, #1a1f1c)",
              border: "1px solid rgba(196,154,74,0.2)",
            }}
          >
            {/* Gradient fade edges */}
            <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, transparent 40%, #1a1f1c 100%)" }} />
            <svg viewBox="0 0 100 150" className="absolute inset-0 w-full h-full" fill="none">
              <ellipse cx="50" cy="28" rx="16" ry="18" fill="rgba(232,228,220,0.12)" />
              <path d="M26 60 Q28 44 50 44 Q72 44 74 60 L80 130 Q65 138 50 138 Q35 138 20 130 Z" fill="rgba(232,228,220,0.10)" />
              <text x="50" y="90" textAnchor="middle" fontSize="5" fill="rgba(196,154,74,0.5)" fontFamily="monospace" letterSpacing="1">THREADS CULTURE</text>
            </svg>
            <span className="relative z-10 pb-4 font-bebas text-sm gold-text tracking-widest">EDITORIAL</span>
          </div>
        </div>

        {/* Center — Thank You */}
        <div className="flex flex-col items-center gap-5 text-center">
          <motion.h2
            className="font-playfair font-bold gold-cycle leading-none"
            style={{ fontSize: "clamp(56px, 9vw, 110px)" }}
          >
            THANK YOU
          </motion.h2>
          <p className="font-bebas text-lg tracking-widest text-dark-muted">
            LET&apos;S BUILD SOMETHING ICONIC TOGETHER.
          </p>
          <motion.button
            whileHover={{ scale: 1.03, backgroundColor: "rgba(196,154,74,0.1)" }}
            whileTap={{ scale: 0.97 }}
            className="px-8 py-3 text-sm font-grotesk font-medium tracking-widest rounded-sm transition-all duration-200"
            style={{ border: "1px solid #c49a4a", color: "#c49a4a" }}
          >
            LET&apos;S WORK TOGETHER →
          </motion.button>
        </div>

        {/* Right — contact */}
        <div className="flex flex-col gap-5 lg:items-end">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7"><HangerGoldSVG className="w-full h-full" /></div>
            <span className="font-playfair text-base font-semibold gold-text">Threads Digital</span>
          </div>
          <div className="flex flex-col gap-2 text-sm font-grotesk text-dark-muted lg:text-right">
            <a href="tel:+91" className="hover:text-dark-text transition-colors">📞 +91 XXXXX XXXXX</a>
            <a href="mailto:hello@threadsdigital.in" className="hover:text-dark-text transition-colors">✉ hello@threadsdigital.in</a>
            <a href="#" className="hover:text-dark-text transition-colors">🌐 www.threadsdigital.in</a>
            <p>📍 India • Worldwide</p>
          </div>
        </div>
      </div>

      {/* Gold shimmer divider */}
      <div
        className="h-px mx-6"
        style={{ background: "linear-gradient(to right, transparent, #c49a4a, #d4aa5a, #c49a4a, transparent)" }}
      />

      {/* Copyright */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <p className="text-xs font-grotesk text-dark-muted">© 2024 Threads Digital. All rights reserved.</p>
        <p className="text-xs font-grotesk text-dark-muted">Fashion • Identity • Growth</p>
      </div>

      {/* Wordmark stamp */}
      <div className="overflow-hidden py-1" style={{ borderTop: "1px solid rgba(196,154,74,0.06)" }}>
        <p
          className="font-bebas text-center whitespace-nowrap select-none pointer-events-none"
          style={{
            fontSize: "clamp(44px, 11vw, 150px)",
            color: "rgba(245,240,235,0.04)",
            letterSpacing: "0.05em",
            lineHeight: 1,
          }}
        >
          THREADS DIGITAL
        </p>
      </div>
    </footer>
  );
}
