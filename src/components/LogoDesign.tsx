"use client";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { StitchLineSVG } from "./SvgDecorators";
import { FadeUp, SectionNumber, DarkButton } from "./MotionUtils";

const items = [
  { src: "/images/mockups/logo-wall.png", title: "Identity Sculpting", sub: "Concrete Engraving", parallax: -40, x: "0%", y: "0%", w: "400px", h: "280px", rotate: -2 },
  { src: "/images/mockups/logo-tshirt.png", title: "Apparel Branding", sub: "Screen-printed Detail", parallax: 30, x: "55%", y: "10%", w: "320px", h: "420px", rotate: 3 },
  { src: "/images/mockups/logo-box.png", title: "Packaging Mark", sub: "Embossed Gold Foil", parallax: -20, x: "15%", y: "45%", w: "300px", h: "380px", rotate: -5 },
  { src: "/images/mockups/logo-storefront.png", title: "Physical Presence", sub: "Glass Storefront", parallax: 50, x: "60%", y: "60%", w: "420px", h: "280px", rotate: 2 },
];

function IdentityCard({ item, index, scrollYProgress }: { item: typeof items[0], index: number, scrollYProgress: any }) {
  const y = useTransform(scrollYProgress, [0, 1], [0, item.parallax]);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      style={{ 
        y, 
        left: item.x, 
        top: item.y, 
        width: item.w, 
        height: item.h,
        rotate: item.rotate
      }}
      className="absolute rounded-lg overflow-hidden border border-dark/10 shadow-2xl group cursor-pointer"
      onMouseMove={handleMouseMove}
      whileHover={{ rotate: 0, scale: 1.02, zIndex: 50, transition: { duration: 0.4 } }}
    >
      <Image src={item.src} alt={item.title} fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
      
      {/* Dynamic Spotlight Effect */}
      <motion.div 
        className="absolute inset-0 z-10 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle 150px at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.15), transparent)`
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 flex flex-col justify-end p-8">
        <span className="text-white font-bebas text-2xl tracking-[0.2em]">{item.title}</span>
        <span className="text-white/60 font-grotesk text-xs tracking-widest uppercase mt-2">{item.sub}</span>
      </div>
      
      {/* Decorative Spec Lines */}
      <div className="absolute top-4 left-4 z-20 flex flex-col gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <div className="w-12 h-[1px] bg-white/40" />
        <span className="text-[8px] font-mono text-white/50 uppercase tracking-tighter">SPEC: IDENTITY_0{index + 1}</span>
      </div>
    </motion.div>
  );
}

export default function LogoDesign() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="relative bg-cream py-32 overflow-hidden fabric-bg">
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" />
      <SectionNumber n="01" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-24 items-start h-[750px]">

        
        {/* Sticky Left: Branding Narrative */}
        <div className="lg:sticky lg:top-40 lg:w-80 flex-shrink-0 flex flex-col gap-8">
          <FadeUp>
            <div className="flex items-center gap-3">
              <div className="w-10 h-[1px] bg-[#c49a4a]" />
              <span className="text-[#c49a4a] text-[10px] font-grotesk font-bold tracking-[0.3em] uppercase">Visual Identity</span>
            </div>
            
            <h2 className="font-bebas text-dark mt-4" style={{ fontSize: "clamp(52px, 6vw, 88px)", lineHeight: 0.9 }}>
              ICONIC <br/>
              <span className="gold-shimmer">LOGO DESIGN</span>
            </h2>
            
            <p className="text-dark/60 font-grotesk text-sm leading-relaxed mt-6">
              We design fashion identifiers that transition seamlessly from boutique walls to luxury apparel. Every mark is engineered for versatility and high-fidelity presence.
            </p>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="flex flex-col gap-4 mt-4 p-6 border border-dark/10 rounded-sm bg-white/5 backdrop-blur-sm">
               <div className="flex justify-between items-center border-b border-dark/5 pb-2">
                  <span className="text-[10px] font-bold text-dark/40 uppercase tracking-widest">Process</span>
                  <span className="text-[10px] font-bold text-[#c49a4a]">PHASE 01</span>
               </div>
               <p className="text-[11px] text-dark/50 italic leading-relaxed">
                  Conceptualizing the brand DNA through minimalist geometry and timeless typography.
               </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.3}>
            <DarkButton>START YOUR PROJECT →</DarkButton>
          </FadeUp>
        </div>

        {/* Right: Floating Identity Montage */}
        <div className="flex-1 relative w-full h-full">
           {items.map((item, i) => (
             <IdentityCard key={i} item={item} index={i} scrollYProgress={scrollYProgress} />
           ))}
           
           {/* Center Background Decorative Text */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
             <span className="font-bebas text-[30vw] text-dark select-none">IDENTITY</span>
           </div>
        </div>

      </div>

      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none" />
    </section>
  );
}
