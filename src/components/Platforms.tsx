"use client";
import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue, AnimatePresence } from "framer-motion";
import { SectionNumber, FadeUp } from "./MotionUtils";
import { StitchLineSVG } from "./SvgDecorators";

const platforms = [
  { name: "Facebook", color: "#1877F2", icon: "f" },
  { name: "Instagram", color: "#E1306C", icon: "◉" },
  { name: "WhatsApp", color: "#25D366", icon: "✆" },
  { name: "YouTube", color: "#FF0000", icon: "▶" },
  { name: "Google Ads", color: "#4285F4", icon: "G" },
  { name: "LinkedIn", color: "#0A66C2", icon: "in" },
  { name: "Pinterest", color: "#E60023", icon: "P" },
  { name: "X (Twitter)", color: "#1DA1F2", icon: "𝕏" },
  { name: "Snapchat", color: "#FFFC00", icon: "👻" },
];

function PlatformCard({ p }: { p: typeof platforms[0] }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [15, -15]), { stiffness: 300, damping: 30 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-15, 15]), { stiffness: 300, damping: 30 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
  }

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      whileHover={{ scale: 1.1, z: 20 }}
      className="flex-shrink-0 w-32 h-32 relative group"
    >
      <div 
        className="absolute inset-0 rounded-2xl transition-all duration-500 opacity-0 group-hover:opacity-100 blur-xl"
        style={{ background: `${p.color}44` }}
      />
      <div
        className="relative w-full h-full rounded-2xl flex flex-col items-center justify-center gap-3 border border-white/5 bg-[#232a26]/80 backdrop-blur-md overflow-hidden transition-colors duration-500 group-hover:border-white/20 shadow-2xl"
      >
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at center, ${p.color}, transparent)` }}
        />
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center text-xl font-bold transition-all duration-500 group-hover:scale-110"
          style={{ background: "rgba(255,255,255,0.03)", color: p.color, textShadow: `0 0 20px ${p.color}66` }}
        >
          {p.icon}
        </div>
        <span className="text-[10px] font-grotesk tracking-widest text-white/40 uppercase group-hover:text-white/80 transition-colors duration-500">
          {p.name}
        </span>
      </div>
    </motion.div>
  );
}

export default function Platforms() {
  const [isHovered, setIsHovered] = useState(false);
  
  // Quadruple the platforms for a very long seamless marquee
  const marqueeItems = [...platforms, ...platforms, ...platforms, ...platforms];

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#1a1f1c" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" color="rgba(196,154,74,0.08)" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 mb-16 text-center">
        <FadeUp>
          <p className="text-xs font-grotesk tracking-[0.4em] text-white/30 uppercase mb-4">Digital Ecosystem</p>
          <h2 className="font-bebas text-white" style={{ fontSize: "clamp(44px, 6vw, 82px)", lineHeight: 1 }}>
            PLATFORMS WE HANDLE
          </h2>
        </FadeUp>
      </div>

      <div className="relative w-full h-48 flex items-center overflow-hidden">
        {/* Gradient Fades for Marquee */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-[#1a1f1c] to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-40 bg-gradient-to-l from-[#1a1f1c] to-transparent z-20 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4"
          animate={{ x: isHovered ? "-15%" : "-50%" }}
          initial={{ x: "0%" }}
          transition={{
            x: {
              duration: isHovered ? 60 : 30,
              repeat: Infinity,
              ease: "linear",
            }
          }}
        >
          {marqueeItems.map((p, i) => (
            <PlatformCard key={`${p.name}-${i}`} p={p} />
          ))}
        </motion.div>
      </div>

      <div className="mt-16 text-center">
        <FadeUp delay={0.2}>
          <p className="text-white/40 font-grotesk text-sm max-w-md mx-auto leading-relaxed">
            Strategic growth and data-driven management across every major digital touchpoint.
          </p>
        </FadeUp>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-10 pointer-events-none">
        <SectionNumber n="13" />
      </div>
      
      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none" color="rgba(196,154,74,0.08)" />
    </section>
  );
}
