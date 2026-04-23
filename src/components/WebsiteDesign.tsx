"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { SectionNumber, FadeUp, DarkButton } from "./MotionUtils";
import { StitchLineSVG } from "./SvgDecorators";

export default function WebsiteDesign() {
  const containerRef = useRef(null);

  // Track scroll progress within this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to the website image position
  // Adjust "-60%" depending on how long the image is
  const websiteY = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section 
      ref={containerRef} 
      className="relative w-full bg-[#f9f7f4] font-grotesk fabric-bg border-t border-dark/5"
      style={{ height: "200vh" }} // Tall enough to scroll and see the mockup move
    >
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none z-50" color="rgba(26,31,28,0.08)" />
      
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col lg:flex-row items-center max-w-7xl mx-auto px-6 gap-16">
        <SectionNumber n="11" />

        {/* Left: Sticky Text Content */}
        <div className="flex-1 flex flex-col gap-8 z-20">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-dark/40 text-xs font-grotesk tracking-[0.2em] font-bold uppercase">Digital Experience</span>
            </div>
            
            <h2 className="font-bebas text-dark" style={{ fontSize: "clamp(54px, 7vw, 96px)", lineHeight: 0.9 }}>
              <span className="text-[#c49a4a]">WEBSITE</span><br/>
              DESIGN.
            </h2>
            
            <p className="text-dark/60 font-grotesk text-sm leading-relaxed mt-6 max-w-md">
              High-performance e-commerce experiences that scroll as beautifully as they look. Seamless, fast, and engineered for the modern web.
            </p>
          </FadeUp>

          <div className="mt-4">
            <DarkButton>START PROJECT →</DarkButton>
          </div>
        </div>

        {/* Right: Laptop Mockup with Internal Scroll */}
        <div className="flex-[1.2] relative h-full w-full flex items-center justify-center pt-20 lg:pt-0">
          
          <div className="relative w-full max-w-[650px] perspective-[1000px]">
            
            {/* Laptop Body / Frame */}
            <div className="relative bg-[#1a1a1a] rounded-2xl p-1.5 shadow-[0_50px_100px_rgba(0,0,0,0.15)] border-4 border-[#2a2a2a]">
              
              {/* Screen Top Bar / Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#1a1a1a] rounded-b-xl z-30 flex items-center justify-center">
                <div className="w-1.5 h-1.5 rounded-full bg-white/10" />
              </div>

              {/* Screen Display Area */}
              <div className="relative w-full aspect-[16/10] bg-white rounded-lg overflow-hidden border border-black/20">
                
                {/* The Scrolling Website Content */}
                <motion.div
                  style={{ y: websiteY }}
                  className="absolute top-0 left-0 w-full h-[300%] pointer-events-none"
                >
                  <div className="relative w-full h-full">
                    <Image 
                      src="/images/mockups/nexora.png" 
                      alt="Website Preview" 
                      fill 
                      className="object-cover object-top"
                      priority
                    />
                  </div>
                </motion.div>

                {/* Glass Reflection overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-transparent pointer-events-none z-10" />
              </div>
            </div>

            {/* Laptop Base / Shadow */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-6 bg-dark/10 blur-2xl rounded-full" />
            <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-[95%] h-2 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-b-xl border-t border-white/5" />
          </div>

        </div>
      </div>
      
    </section>
  );
}
