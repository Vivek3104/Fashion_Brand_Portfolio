"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionNumber, FadeUp, GoldOutlineButton } from "./MotionUtils";
import { StitchLineSVG } from "./SvgDecorators";

export default function PhotoVideo() {
  const containerRef = useRef(null);

  // Track scroll progress for the shutter reveal
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Shutter Reveal: Panels slide apart
  const shutterLeftX = useTransform(scrollYProgress, [0, 0.5], ["0%", "-100%"]);
  const shutterRightX = useTransform(scrollYProgress, [0, 0.5], ["0%", "100%"]);

  // Content opacity/scale reveal
  const contentOpacity = useTransform(scrollYProgress, [0, 0.4, 0.6], [0, 1, 1]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);

  // Parallax drifts for images
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#0a0a0a] font-grotesk fabric-bg border-t border-white/5"
      style={{ height: "200vh" }}
    >
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none z-[60]" color="rgba(196,154,74,0.12)" />
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center justify-center max-w-7xl mx-auto px-6 gap-16">
        <SectionNumber n="12" right />

        {/* Shutter Panels (The Reveal Mechanism) */}
        <motion.div 
          style={{ x: shutterLeftX }}
          className="absolute top-0 left-0 w-1/2 h-full bg-[#111] z-50 border-r border-white/5 flex items-center justify-end"
        >
          <div className="w-px h-1/2 bg-gradient-to-b from-transparent via-[#c49a4a]/30 to-transparent" />
        </motion.div>
        <motion.div 
          style={{ x: shutterRightX }}
          className="absolute top-0 right-0 w-1/2 h-full bg-[#111] z-50 border-l border-white/5 flex items-center justify-start"
        >
          <div className="w-px h-1/2 bg-gradient-to-b from-transparent via-[#c49a4a]/30 to-transparent" />
        </motion.div>

        {/* Background Visual Montage (Revealed by Shutter) */}
        <motion.div 
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="relative z-10 w-full flex flex-col lg:flex-row items-center gap-16 lg:gap-24"
        >
          
          {/* Left: Content */}
          <div className="flex-1 flex flex-col gap-8">
            <FadeUp>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-[1px] bg-[#c49a4a]" />
                <span className="text-[#c49a4a] text-[10px] font-grotesk tracking-[0.3em] font-bold uppercase">The Visual Narrative</span>
              </div>
              
              <div className="flex flex-col">
                <h2 className="font-bebas text-transparent stroke-text text-white" style={{ fontSize: "clamp(64px, 8vw, 120px)", lineHeight: 0.8, WebkitTextStroke: "1px rgba(255,255,255,0.3)" }}>
                  PHOTOGRAPHY
                </h2>
                <h2 className="font-playfair italic text-[#c49a4a] -mt-4 ml-8" style={{ fontSize: "clamp(48px, 6vw, 90px)", fontWeight: 300 }}>
                  &amp; Videography
                </h2>
              </div>
              
              <p className="text-white/50 font-grotesk text-sm leading-relaxed mt-8 max-w-sm">
                Cinematic storytelling captured through the lens of luxury. We blend high-fashion editorial stills with narrative brand films.
              </p>
            </FadeUp>

            <div className="mt-4">
              <GoldOutlineButton>EXPLORE PORTFOLIO →</GoldOutlineButton>
            </div>
          </div>

          {/* Right: Parallax Montage */}
          <div className="flex-[1.5] relative h-[600px] w-full flex items-center justify-center">
            
          {/* Drifting Stills */}
          <motion.div 
            style={{ y: y1 }}
            className="absolute top-0 left-0 w-60 h-72 rounded-lg overflow-hidden shadow-2xl border border-white/10 rotate-[-4deg] z-10"
          >
             <Image src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80" alt="Men's Wear" fill className="object-cover" />
          </motion.div>

          <motion.div 
            style={{ y: y2 }}
            className="absolute bottom-10 right-0 w-52 h-64 rounded-lg overflow-hidden shadow-2xl border border-white/10 rotate-[3deg] z-10"
          >
             <Image src="/images/mockups/kurti-1.png" alt="Kurti" fill className="object-cover" />
          </motion.div>

          <motion.div 
            style={{ y: y3 }}
            className="absolute top-[20%] left-[-10%] w-44 h-56 rounded-lg overflow-hidden shadow-2xl border border-white/10 rotate-[8deg] z-0 opacity-40"
          >
             <Image src="/images/mockups/kids-hoodie.png" alt="Kids Wear" fill className="object-cover" />
          </motion.div>

            {/* Central Video Frame */}
            <motion.div 
              style={{ y: y3 }}
              className="relative w-full max-w-[480px] aspect-video bg-black rounded-sm overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.8)] border border-white/20 z-20"
            >
               <Image src="/images/mockups/marketing-lookbook.png" alt="Film Preview" fill className="object-cover opacity-70" />
               
               {/* Camera Interface Overlay */}
               <div className="absolute inset-0 p-4 flex flex-col justify-between pointer-events-none">
                  <div className="flex justify-between items-start">
                     <div className="flex items-center gap-1.5">
                        <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
                        <span className="text-white font-mono text-[9px] tracking-widest">REC</span>
                     </div>
                     <span className="text-white/40 font-mono text-[9px]">RAW 8K</span>
                  </div>
                  
                  {/* Center Play Button */}
                  <div className="absolute inset-0 flex items-center justify-center group pointer-events-auto cursor-pointer">
                     <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white backdrop-blur-sm transition-all group-hover:bg-white/10 group-hover:scale-110">
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5"><path d="M8 5v14l11-7z"/></svg>
                     </div>
                  </div>

                  <div className="flex justify-between items-end text-[9px] font-mono text-white/30">
                     <span>TC 00:04:12:00</span>
                     <div className="flex gap-0.5">
                        <div className="w-1 h-3 bg-white/20" />
                        <div className="w-1 h-3 bg-white/20" />
                        <div className="w-1 h-3 bg-white/40" />
                     </div>
                  </div>
               </div>
            </motion.div>

          </div>

        </motion.div>
      </div>

    </section>
  );
}
