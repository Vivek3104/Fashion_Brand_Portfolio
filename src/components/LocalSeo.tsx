"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { SectionNumber, FadeUp, GoldOutlineButton, ease } from "./MotionUtils";
import { StitchLineSVG } from "./SvgDecorators";

const StarRow = () => (
  <div className="flex gap-1 text-yellow-400">
    {[1, 2, 3, 4, 5].map((_, i) => (
      <svg key={i} viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    ))}
  </div>
);

const ReviewCard = ({ name, time, text, delay, className }: { name: string, time: string, text: string, delay: number, className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease }}
    className={`absolute z-30 bg-white rounded-xl p-4 shadow-[0_20px_40px_rgba(0,0,0,0.4)] w-[240px] flex flex-col gap-2 border border-black/5 ${className}`}
  >
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#c49a4a] to-[#d4aa5a] flex items-center justify-center text-white font-bold text-xs">
        {name.charAt(0)}
      </div>
      <div>
        <p className="text-black font-grotesk text-[11px] font-bold leading-none">{name}</p>
        <p className="text-black/50 text-[9px] mt-0.5">{time}</p>
      </div>
    </div>
    <StarRow />
    <p className="text-black/70 font-grotesk text-[10px] leading-relaxed">"{text}"</p>
  </motion.div>
);

export default function LocalSeo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full py-32 bg-[#1a1f1c] overflow-hidden flex items-center justify-center border-t border-white/5 font-grotesk">
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" color="rgba(196,154,74,0.12)" />
      <SectionNumber n="09" right />

      {/* Gold Ambient Glow */}
      <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#c49a4a]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        
        {/* Left: Text Content */}
        <div className="flex-1 flex flex-col gap-8">
          <FadeUp>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-[10px] bg-[#c49a4a]/10 border border-[#c49a4a]/30 flex items-center justify-center text-[#c49a4a]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <span className="text-[#c49a4a] text-xs font-grotesk tracking-[0.2em] font-bold">LOCAL SEO / GMB</span>
            </div>
            <h2 className="font-bebas text-white" style={{ fontSize: "clamp(48px, 6vw, 84px)", lineHeight: 0.9 }}>
              Local SEO<br/>
              <span className="text-[#c49a4a]">&amp; GMB.</span>
            </h2>
            <p className="text-white/60 font-grotesk text-sm leading-relaxed mt-6 max-w-md">
              We optimize your Google My Business profile and local citations so your brand is the first choice when customers search nearby. Map the route to your doorstep.
            </p>
          </FadeUp>

          <FadeUp delay={0.2} className="flex gap-8 mt-4 border-t border-white/10 pt-8">
            <div className="flex flex-col gap-2 max-w-[140px]">
              <div className="text-[#c49a4a] w-5 h-5">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
              </div>
              <h4 className="text-white font-grotesk text-[11px] font-bold tracking-wide uppercase leading-tight">5-Star Reputation</h4>
              <p className="text-white/50 font-grotesk text-[10px] leading-relaxed">Automated review generation.</p>
            </div>
            <div className="flex flex-col gap-2 max-w-[140px]">
              <div className="text-[#c49a4a] w-5 h-5">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
              </div>
              <h4 className="text-white font-grotesk text-[11px] font-bold tracking-wide uppercase leading-tight">Top of Search</h4>
              <p className="text-white/50 font-grotesk text-[10px] leading-relaxed">Rank #1 in the map pack.</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.3} className="mt-4">
            <GoldOutlineButton>VIEW STRATEGY →</GoldOutlineButton>
          </FadeUp>
        </div>

        {/* Right: GMB Visual Mockup */}
        <div className="flex-1 relative h-[600px] w-full flex items-center justify-center">
          
          {/* Background Map Simulation */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
            <div className="w-[400px] h-[400px] border border-white/5 rounded-full" />
            <div className="absolute w-[300px] h-[300px] border border-white/10 rounded-full" />
            <div className="absolute w-[200px] h-[200px] border border-[#c49a4a]/20 rounded-full" />
            
            {/* Map Pin */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute z-10 text-[#c49a4a]"
            >
               <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 drop-shadow-[0_10px_10px_rgba(196,154,74,0.4)]"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </motion.div>
          </div>

          {/* Central GMB Card Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative z-20 bg-white w-[320px] rounded-2xl overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.5)] border border-white/10 flex flex-col"
          >
            {/* Cover Image */}
            <div className="h-32 w-full relative bg-gray-200">
               <Image src="/images/mockups/aesthetic-wear.png" alt="Storefront" fill className="object-cover" />
            </div>
            
            <div className="p-5 flex flex-col relative">
              {/* Logo / Avatar */}
              <div className="absolute -top-10 left-5 w-16 h-16 rounded-full border-4 border-white bg-black overflow-hidden shadow-md">
                 <Image src="/images/mockups/brand-kit.png" alt="Logo" fill className="object-cover" />
              </div>
              
              <div className="mt-8 flex flex-col gap-1">
                <h3 className="text-black font-bebas text-2xl tracking-wide leading-none">Threads Culture</h3>
                <div className="flex items-center gap-2">
                  <span className="text-black font-bold text-sm">4.9</span>
                  <StarRow />
                  <span className="text-black/50 text-xs">(1,284)</span>
                </div>
                <p className="text-black/60 text-xs mt-1">Clothing store in New York City, NY</p>
              </div>

              <div className="flex gap-2 mt-4 pt-4 border-t border-black/5">
                <div className="flex-1 bg-blue-50 text-blue-600 rounded-full py-1.5 flex justify-center items-center gap-1 cursor-pointer hover:bg-blue-100 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M21 10.5h-8.5V2h-1v8.5H3v1h8.5V20h1v-8.5H21v-1z" transform="rotate(45 12 12)"/></svg>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Directions</span>
                </div>
                <div className="flex-1 border border-black/10 text-black/70 rounded-full py-1.5 flex justify-center items-center gap-1 cursor-pointer hover:bg-gray-50 transition-colors">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                  <span className="text-[10px] font-bold uppercase tracking-wider">Website</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Reviews */}
          {inView && (
            <>
              <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0 }}>
                <ReviewCard 
                  name="Sarah Jenkins" time="2 weeks ago" 
                  text="Absolutely love the new collection! The staff was super helpful. Best fashion boutique in the area hands down."
                  delay={0.6} className="top-[10%] -left-[10%] rotate-[-4deg]"
                />
              </motion.div>
              
              <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}>
                <ReviewCard 
                  name="Michael Chen" time="1 month ago" 
                  text="Found the perfect fit for my upcoming event. Quality is unmatched and the vibe of the store is incredible."
                  delay={0.8} className="bottom-[15%] -right-[5%] rotate-[3deg]"
                />
              </motion.div>
            </>
          )}

        </div>
      </div>
      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none" color="rgba(196,154,74,0.12)" />
    </section>
  );
}
