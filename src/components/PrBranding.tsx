"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionNumber, DarkButton } from "./MotionUtils";
import { StitchLineSVG } from "./SvgDecorators";

export default function PrBranding() {
  const containerRef = useRef(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Column 1 goes UP (starts at 0, goes to -30%)
  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  
  // Column 2 goes DOWN (starts at -30%, goes to 0%)
  const y2 = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-cream font-grotesk fabric-bg border-t border-dark/5"
      style={{ height: "200vh" }} // Tall enough to scroll
    >
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none z-50" color="rgba(26,31,28,0.1)" />
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 gap-16">
        <SectionNumber n="10" />

        {/* Left: Sticky Text Content */}
        <div className="flex-1 flex flex-col gap-8 z-20 pt-20 lg:pt-0">
          <div>
            <span className="text-dark/40 text-xs font-grotesk tracking-[0.2em] font-bold uppercase mb-4 block">
              Public Relations
            </span>
            <h2 className="font-bebas text-dark" style={{ fontSize: "clamp(64px, 8vw, 110px)", lineHeight: 0.9 }}>
              <span className="text-[#c49a4a]">PR</span> &amp;<br/>
              BRANDING
            </h2>
            <p className="text-dark/60 font-grotesk text-sm leading-relaxed mt-6 max-w-md">
              We secure top-tier editorial placements, craft compelling brand stories, and design high-impact marketing materials that position your brand with undisputed authority.
            </p>
          </div>

          <div className="mt-4">
            <DarkButton>VIEW PRESS KIT →</DarkButton>
          </div>
        </div>

        {/* Right: Parallax Scrolling Columns */}
        <div className="flex-1 relative h-full w-full flex gap-4 lg:gap-8 justify-end items-center pr-4 overflow-visible">
          
          {/* Column 1 (Scrolls Up) */}
          <motion.div 
            style={{ y: y1 }}
            className="flex flex-col gap-4 lg:gap-8 w-1/2 min-w-[200px]"
          >
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-xl border border-dark/5">
              <Image src="/images/mockups/marketing-billboard.png" alt="PR Billboard" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl border border-dark/5">
              <Image src="/images/mockups/marketing-social.png" alt="Social PR" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-xl border border-dark/5">
              <Image src="/images/mockups/marketing-lookbook.png" alt="Lookbook" fill className="object-cover" />
            </div>
          </motion.div>

          {/* Column 2 (Scrolls Down) */}
          <motion.div 
            style={{ y: y2 }}
            className="flex flex-col gap-4 lg:gap-8 w-1/2 min-w-[200px]"
          >
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl border border-dark/5">
              <Image src="/images/mockups/brand-kit.png" alt="Brand Kit" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-[4/5] rounded-lg overflow-hidden shadow-xl border border-dark/5">
              <Image src="/images/mockups/threads-culture.png" alt="Brand Identity" fill className="object-cover" />
            </div>
            <div className="relative w-full aspect-square rounded-lg overflow-hidden shadow-xl border border-dark/5">
              <Image src="/images/mockups/brandkit-cards.png" alt="Business Cards" fill className="object-cover" />
            </div>
          </motion.div>

        </div>
      </div>
      
    </section>
  );
}
