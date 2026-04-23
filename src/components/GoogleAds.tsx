"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { StitchLineSVG } from "./SvgDecorators";
import { FadeUp, SectionNumber, DarkButton, ease } from "./MotionUtils";
import Image from "next/image";

export default function GoogleAds() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <section className="relative bg-[#f5f0eb] py-28 overflow-hidden fabric-bg">
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" />
      <SectionNumber n="07" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left — text */}
        <div className="lg:w-96 flex-shrink-0 flex flex-col gap-6 pt-12">
          <FadeUp>
            <p className="text-xs font-grotesk tracking-widest text-light-muted uppercase">Search Engine Marketing</p>
            <h2 className="font-bebas text-dark mt-2" style={{ fontSize: "clamp(36px, 4.5vw, 62px)", lineHeight: 1 }}>
              GOOGLE ADS
            </h2>
            <p className="text-light-muted font-grotesk text-sm leading-relaxed mt-4">
              Dominate search intent and capture attention with dynamic display and high-retention YouTube Shorts. We put your brand where your customers are searching.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <DarkButton>VIEW MORE →</DarkButton>
          </FadeUp>
        </div>

        {/* Right — Google Display Showcase */}
        <div ref={ref} className="flex-1 w-full flex items-center justify-center lg:justify-end pt-12 relative min-h-[300px]">
          
          {/* Billboard / Display Ad */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -10, rotate: 2 }}
            animate={inView ? { opacity: 1, x: 0, y: 0, rotate: -2 } : {}}
            transition={{ duration: 1, ease, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
            className="relative z-10 rounded-lg overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.2)] cursor-pointer border-[6px] border-white"
            style={{ width: "480px", height: "300px", maxWidth: "100%" }}
          >
            <div className="absolute top-3 left-3 bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded z-20 shadow-sm">GOOGLE DISPLAY</div>
            <Image src="/images/mockups/marketing-billboard.png" alt="Google Display Ad" fill className="object-cover" />
          </motion.div>

        </div>
      </div>
      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none" />
    </section>
  );
}
