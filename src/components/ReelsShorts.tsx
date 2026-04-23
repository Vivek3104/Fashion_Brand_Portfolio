"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { SectionNumber, FadeUp } from "./MotionUtils";

const Bullet = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="flex flex-col gap-2 max-w-[140px]">
    <div className="text-white/70 w-5 h-5">{icon}</div>
    <h4 className="text-white font-grotesk text-[11px] font-bold tracking-wide uppercase leading-tight">{title}</h4>
    <p className="text-white/50 font-grotesk text-[10px] leading-relaxed">{desc}</p>
  </div>
);

const FloatingCard = ({ src, title, time, delay, className, size = 160 }: { src: string, title: React.ReactNode, time: string, delay: number, className: string, size?: number }) => (
  <motion.div
    animate={{ y: [0, -15, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay }}
    className={`absolute rounded-xl overflow-hidden border border-white/10 bg-[#111] shadow-[0_20px_40px_rgba(0,0,0,0.5)] ${className}`}
    style={{ width: size, height: size * 1.1 }}
  >
    <Image src={src} alt={title} fill className="object-cover opacity-80" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
      <span className="text-white font-grotesk text-[10px] font-bold leading-tight">{title}</span>
      <span className="text-white/60 font-mono text-[9px]">{time}</span>
    </div>
  </motion.div>
);

export default function ReelsShorts() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full overflow-hidden flex flex-col font-grotesk">

      {/* ---------------- YOUTUBE ROW ---------------- */}
      <div className="relative w-full py-32 bg-[#0a0a0a] border-t border-white/5 flex items-center justify-center">
        <SectionNumber n="08" right />

        {/* Red Glow */}
        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: YouTube Visuals */}
          <div className="flex-1 relative h-[600px] w-full flex items-center justify-center">

            {/* Background floating cards */}
            <FloatingCard
              src="/images/mockups/urban-drip.png"
              title={<>Mindset<br /><span className="font-normal text-white/60">Over Everything</span></>}
              time="0:45"
              delay={0}
              className="top-[10%] left-[5%] -rotate-6 z-0"
              size={140}
            />
            <FloatingCard
              src="/images/mockups/aesthetic-wear.png"
              title={<>Behind The<br /><span className="font-normal text-white/60">Scenes</span></>}
              time="0:59"
              delay={1.5}
              className="top-[30%] right-[5%] rotate-6 z-0"
              size={150}
            />
            <FloatingCard
              src="/images/mockups/marketing-social.png"
              title={<>Content<br /><span className="font-normal text-white/60">That Connects</span></>}
              time="0:30"
              delay={0.7}
              className="bottom-[10%] left-[10%] -rotate-3 z-20"
              size={140}
            />

            {/* Main YouTube Phone */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: -15 }}
              animate={inView ? { opacity: 1, y: 0, rotate: -8 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-[260px] h-[520px] rounded-[40px] bg-[#111] border-[6px] border-[#222] shadow-[-20px_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col"
            >
              {/* Phone Header */}
              <div className="absolute top-0 w-full h-12 flex justify-between items-center px-6 pt-2 z-30">
                <span className="text-[10px] text-white/80 font-medium">11:31</span>
                <div className="w-16 h-5 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-1" />
                <div className="flex gap-1.5 opacity-80">
                  <div className="w-3 h-2.5 border border-white rounded-[2px]" />
                  <div className="w-3 h-2.5 bg-white rounded-[2px]" />
                </div>
              </div>

              {/* YouTube Shorts UI Overlay */}
              <div className="absolute top-10 left-4 z-30 flex items-center gap-1">
                <svg viewBox="0 0 24 24" fill="red" className="w-4 h-4"><path d="M21.582,6.186c-0.23-0.86-0.908-1.538-1.768-1.768C18.254,4,12,4,12,4S5.746,4,4.186,4.418 c-0.86,0.23-1.538,0.908-1.768,1.768C2,7.746,2,12,2,12s0,4.254,0.418,5.814c0.23,0.86,0.908,1.538,1.768,1.768 C5.746,20,12,20,12,20s6.254,0,7.814-0.418c0.86-0.23,1.538-0.908,1.768-1.768C22,16.254,22,12,22,12S22,7.746,21.582,6.186z M10,15.464V8.536L16,12L10,15.464z" /></svg>
                <span className="text-white text-[11px] font-bold">Shorts</span>
              </div>

              {/* Video Content */}
              <video 
                src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-setting-34568-large.mp4"
                poster="/images/mockups/urban-drip.png" 
                autoPlay loop muted playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-90" 
              />

              <div className="absolute inset-0 bg-gradient-to-t from-red-900/40 via-transparent to-transparent pointer-events-none" />

              {/* Play Button Center Overlay */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-16 h-11 bg-red-600 rounded-xl flex items-center justify-center shadow-[0_0_30px_rgba(255,0,0,0.4)]"
                >
                  <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-1"><path d="M8 5v14l11-7z" /></svg>
                </motion.div>
              </div>
            </motion.div>

            {/* Floating 3D Play Button */}
            <motion.div
              animate={{ y: [0, 15, 0], rotate: [10, 15, 10] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute bottom-[20%] right-[10%] z-30 w-16 h-12 bg-red-600 rounded-xl flex items-center justify-center shadow-[0_10px_30px_rgba(255,0,0,0.5)] border border-white/20"
            >
              <svg viewBox="0 0 24 24" fill="white" className="w-5 h-5 ml-1"><path d="M8 5v14l11-7z" /></svg>
            </motion.div>

          </div>

          {/* Right: YouTube Text Content */}
          <div className="flex-1 flex flex-col gap-8">
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-7 bg-red-600 rounded-md flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="white" className="w-3.5 h-3.5 ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                </div>
                <span className="text-red-500 text-xs font-grotesk tracking-[0.2em] font-bold">YOUTUBE SHORTS</span>
              </div>
              <h2 className="font-bebas text-white" style={{ fontSize: "clamp(48px, 6vw, 84px)", lineHeight: 0.9 }}>
                Short Videos.<br />
                <span className="text-red-600">Big</span> Impact.
              </h2>
              <p className="text-white/60 font-grotesk text-sm leading-relaxed mt-6 max-w-md">
                Quick bites of information, entertainment and inspiration — straight from our YouTube strategy designed to capture algorithmic trends.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="flex gap-8 mt-4 border-t border-white/10 pt-8">
              <Bullet
                icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>}
                title="Quick & Engaging"
                desc="Short videos that grab attention."
              />
              <Bullet
                icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="Value Packed"
                desc="Every second delivers value."
              />
              <Bullet
                icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>}
                title="Made for Everyone"
                desc="Content that informs and inspires."
              />
            </FadeUp>

            <FadeUp delay={0.3} className="flex items-center gap-6 mt-4">
              <button className="bg-red-600 hover:bg-red-700 text-white font-grotesk text-sm font-bold py-3.5 px-6 rounded-lg transition-colors flex items-center gap-2">
                Watch on YouTube <span className="text-lg leading-none mt-[-2px]">›</span>
              </button>

              {/* Pagination lines */}
              <div className="flex gap-2 items-center">
                <div className="w-6 h-0.5 bg-red-600 rounded-full" />
                <div className="w-6 h-0.5 bg-white/20 rounded-full" />
                <div className="w-6 h-0.5 bg-white/20 rounded-full" />
                <div className="w-6 h-0.5 bg-white/20 rounded-full" />
              </div>
            </FadeUp>
          </div>
        </div>
      </div>

      {/* ---------------- INSTAGRAM ROW ---------------- */}
      <div className="relative w-full py-32 bg-[#0d0a11] border-t border-white/5 flex items-center justify-center">

        {/* Purple Glow */}
        <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl w-full mx-auto px-6 flex flex-col-reverse lg:flex-row items-center gap-16 lg:gap-24">

          {/* Left: Instagram Text Content */}
          <div className="flex-1 flex flex-col gap-8">
            <FadeUp>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[10px] flex items-center justify-center" style={{ background: "linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)" }}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                </div>
                <span className="text-[#cc2366] text-xs font-grotesk tracking-[0.2em] font-bold">INSTAGRAM REEL</span>
              </div>
              <h2 className="font-bebas text-white" style={{ fontSize: "clamp(48px, 6vw, 84px)", lineHeight: 0.9 }}>
                Reels That<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#bc1888] to-[#dc2743]">Inspire.</span>
              </h2>
              <p className="text-white/60 font-grotesk text-sm leading-relaxed mt-6 max-w-md">
                Short, trendy and engaging reels that connect, inspire and keep your audience coming back for more high-fidelity fashion content.
              </p>
            </FadeUp>

            <FadeUp delay={0.2} className="flex gap-8 mt-4 border-t border-white/10 pt-8">
              <Bullet
                icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" /></svg>}
                title="Trendy & Fresh"
                desc="Always up to date with the trend."
              />
              <Bullet
                icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>}
                title="Connect & Engage"
                desc="Reels that build real connections."
              />
              <Bullet
                icon={<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>}
                title="Inspire Daily"
                desc="Motivation and ideas in every reel."
              />
            </FadeUp>

            <FadeUp delay={0.3} className="flex items-center gap-6 mt-4">
              <button className="bg-gradient-to-r from-[#e6683c] via-[#dc2743] to-[#bc1888] hover:opacity-90 text-white font-grotesk text-sm font-bold py-3.5 px-6 rounded-lg transition-opacity flex items-center gap-2">
                Follow on Instagram <span className="text-lg leading-none mt-[-2px]">›</span>
              </button>

              {/* Pagination lines */}
              <div className="flex gap-2 items-center">
                <div className="w-6 h-0.5 bg-[#bc1888] rounded-full" />
                <div className="w-6 h-0.5 bg-white/20 rounded-full" />
                <div className="w-6 h-0.5 bg-white/20 rounded-full" />
                <div className="w-6 h-0.5 bg-white/20 rounded-full" />
              </div>
            </FadeUp>
          </div>

          {/* Right: Instagram Visuals */}
          <div className="flex-1 relative h-[600px] w-full flex items-center justify-center">

            {/* Background floating cards */}
            <FloatingCard
              src="/images/mockups/voguefit.png"
              title=""
              time=""
              delay={0.5}
              className="top-[15%] left-[5%] -rotate-6 z-0 border-none shadow-[0_10px_30px_rgba(188,24,136,0.2)]"
              size={180}
            />
            <FloatingCard
              src="/images/mockups/nexora.png"
              title=""
              time=""
              delay={1.2}
              className="bottom-[15%] right-[5%] rotate-6 z-0 border-none shadow-[0_10px_30px_rgba(188,24,136,0.2)]"
              size={170}
            />

            {/* Main Instagram Phone */}
            <motion.div
              initial={{ opacity: 0, y: 50, rotate: 15 }}
              animate={inView ? { opacity: 1, y: 0, rotate: 8 } : {}}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              className="relative z-10 w-[260px] h-[520px] rounded-[40px] bg-[#111] border-[6px] border-[#d8d8d8] shadow-[20px_30px_60px_rgba(0,0,0,0.8)] overflow-hidden flex flex-col ring-1 ring-white/10"
            >
              {/* Phone Header */}
              <div className="absolute top-0 w-full h-12 flex justify-between items-center px-6 pt-2 z-30">
                <span className="text-[10px] text-white/80 font-medium">13:01</span>
                <div className="w-16 h-5 bg-black rounded-full absolute left-1/2 -translate-x-1/2 top-1" />
                <div className="flex gap-1.5 opacity-80">
                  <div className="w-3 h-2.5 border border-white rounded-[2px]" />
                  <div className="w-3 h-2.5 bg-white rounded-[2px]" />
                </div>
              </div>

              {/* Instagram Reels UI Overlay */}
              <div className="absolute top-10 left-4 z-30">
                <span className="text-white text-[16px] font-bold">Reels</span>
              </div>
              <div className="absolute top-10 right-4 z-30 flex gap-3 text-white">
                <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
              </div>

              {/* Video Content */}
              <video 
                src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-posing-in-a-studio-setting-34568-large.mp4"
                poster="/images/mockups/aesthetic-wear.png" 
                autoPlay loop muted playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-90" 
              />

              {/* Bottom Gradient overlay */}
              <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-20 pointer-events-none" />

              {/* Reels Footer UI */}
              <div className="absolute bottom-6 left-4 right-16 z-30 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full overflow-hidden relative border border-white/50">
                    <Image src="/images/mockups/urban-drip.png" fill alt="avatar" className="object-cover" />
                  </div>
                  <span className="text-white text-[11px] font-bold">@youraccount</span>
                </div>
                <p className="text-white text-[11px]">Chase dreams not people.</p>
                <div className="flex items-center gap-1 mt-1">
                  <svg viewBox="0 0 24 24" fill="white" className="w-3 h-3"><path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" /></svg>
                  <span className="text-white/80 text-[9px]">Original Audio</span>
                </div>
              </div>

              {/* Reels Side Interactions */}
              <div className="absolute bottom-8 right-3 z-30 flex flex-col gap-4 items-center">
                <div className="flex flex-col items-center gap-1">
                  <svg fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                  <span className="text-white text-[9px]">12K</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <svg fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                  <span className="text-white text-[9px]">895</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                  <svg fill="none" viewBox="0 0 24 24" stroke="white" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" /></svg>
                  <span className="text-white text-[9px]">Share</span>
                </div>
                <div className="w-6 h-6 rounded-sm bg-white/20 border border-white/50 flex items-center justify-center mt-2">
                  <div className="w-3 h-3 rounded-full bg-white animate-pulse" />
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>

      <div className="w-full h-px bg-white/5" />
    </section>
  );
}
