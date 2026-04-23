"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { BillboardSVG, StitchLineSVG } from "./SvgDecorators";
import { FadeUp, SectionNumber, GoldOutlineButton, ease } from "./MotionUtils";

import Image from "next/image";

function OverlapStack() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="relative w-full" style={{ height: "600px" }}>
      {/* Base billboard */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 40 }}
        animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ delay: 0.1, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-x-0 top-6 rounded-xl overflow-hidden cursor-pointer group"
        style={{
          height: "540px",
          background: "#1a1f1c",
          boxShadow: "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,154,74,0.2)",
          zIndex: 1,
        }}
      >
        <Image
          src="/images/mockups/marketing-billboard.png"
          alt="Outdoor Billboard"
          fill
          className="object-cover object-[center_35%] opacity-90 transition-transform duration-[1.5s] ease-out group-hover:scale-105 group-hover:opacity-100"
        />
        {/* Glassmorphism reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c49a4a]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none mix-blend-screen" />
        <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5 pointer-events-none" />
      </motion.div>

      {/* Floating card 1 — lookbook, bottom-right */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: 50, rotate: 15 }}
        animate={inView ? { opacity: 1, x: 0, y: 0, rotate: 6 } : {}}
        transition={{ delay: 0.4, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotate: 0, scale: 1.15, zIndex: 50, transition: { duration: 0.5, ease: "easeOut" } }}
        className="absolute bottom-[-10px] right-[-20px] rounded-lg overflow-hidden cursor-pointer group"
        style={{
          width: "220px", height: "280px",
          background: "#232a26",
          boxShadow: "0 20px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(196,154,74,0.3)",
          zIndex: 2,
        }}
      >
        <Image
          src="/images/mockups/marketing-lookbook.png"
          alt="Lookbook"
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c49a4a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
      </motion.div>

      {/* Floating card 2 — social posts, top-right */}
      <motion.div
        initial={{ opacity: 0, x: 80, y: -50, rotate: -15 }}
        animate={inView ? { opacity: 1, x: 0, y: 0, rotate: -8 } : {}}
        transition={{ delay: 0.6, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ rotate: 0, scale: 1.15, zIndex: 50, transition: { duration: 0.5, ease: "easeOut" } }}
        className="absolute top-[-30px] right-12 rounded-lg overflow-hidden cursor-pointer group"
        style={{
          width: "200px", height: "260px",
          background: "#2a3330",
          boxShadow: "0 20px 40px rgba(0,0,0,0.8), 0 0 0 1px rgba(196,154,74,0.25)",
          zIndex: 3,
        }}
      >
        <Image
          src="/images/mockups/marketing-social.png"
          alt="Social Cards"
          fill
          className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors duration-700 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c49a4a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen" />
      </motion.div>
    </div>
  );
}

export default function MarketingMaterials() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#1a1f1c", borderTop: "1px solid rgba(196,154,74,0.1)" }}
    >
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" color="rgba(196,154,74,0.12)" />
      <SectionNumber n="04" right />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left — overlap stack */}
        <div className="flex-1">
          <OverlapStack />
        </div>

        {/* Right — text */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6">
          <FadeUp>
            <p className="text-xs font-grotesk tracking-widest text-dark-muted uppercase">Print &amp; Digital</p>
            <h2 className="font-bebas text-dark-text mt-2" style={{ fontSize: "clamp(36px, 4.5vw, 62px)", lineHeight: 1 }}>
              MARKETING MATERIALS
            </h2>
            <p className="text-dark-muted font-grotesk text-sm leading-relaxed mt-4">
              From hoardings to brochures, we create eye-catching designs that communicate your brand message powerfully.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <GoldOutlineButton>VIEW MORE →</GoldOutlineButton>
          </FadeUp>
        </div>
      </div>
      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none" color="rgba(196,154,74,0.12)" />
    </section>
  );
}
