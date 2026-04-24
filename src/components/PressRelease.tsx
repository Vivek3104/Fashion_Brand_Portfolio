"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import { SectionNumber, FadeUp, GoldOutlineButton, ease } from "./MotionUtils";
import { StitchLineSVG } from "./SvgDecorators";

const MediaBadge = ({ text, delay }: { text: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.5, delay, ease }}
    className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-[10px] font-bold text-white/80 uppercase tracking-widest backdrop-blur-md"
  >
    {text}
  </motion.div>
);

const NewsItem = ({ publication, title, summary, time, delay }: { publication: string, title: string, summary: string, time: string, delay: number }) => (
  <motion.div
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay, ease }}
    className="flex flex-col gap-2 border-b border-white/10 pb-6 mb-6 last:border-0"
  >
    <div className="flex items-center gap-2">
      <div className="w-4 h-4 bg-white/20 rounded flex items-center justify-center">
        <span className="text-[8px] font-bold text-white">{publication.charAt(0)}</span>
      </div>
      <span className="text-white/40 text-[10px] font-bold uppercase tracking-wider">{publication}</span>
    </div>
    <h4 className="text-white font-grotesk text-lg font-medium leading-tight hover:text-[#c49a4a] cursor-pointer transition-colors line-clamp-2">
      {title}
    </h4>
    <p className="text-white/50 text-[11px] leading-relaxed line-clamp-2">{summary}</p>
    <span className="text-white/30 text-[9px]">{time}</span>
  </motion.div>
);

const FeatureCard = ({ title, date, image, delay, className }: { title: string, date: string, image: string, delay: number, className: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay, ease }}
    className={`absolute z-30 bg-white rounded-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)] w-[280px] border border-black/5 ${className}`}
  >
    <div className="relative h-40 w-full">
      <Image src={image} alt={title} fill className="object-cover" />
    </div>
    <div className="p-4 flex flex-col gap-1">
      <p className="text-[#c49a4a] text-[9px] font-bold uppercase tracking-wider">{date}</p>
      <h4 className="text-black font-bebas text-xl leading-tight">{title}</h4>
      <p className="text-black/50 text-[10px] leading-relaxed">Exclusive coverage of our brand's latest expansion into international markets.</p>
    </div>
  </motion.div>
);

export default function PressRelease() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative w-full py-32 bg-[#1a1f1c] overflow-hidden flex items-center justify-center border-t border-white/5 font-grotesk">
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none z-50" color="rgba(196,154,74,0.12)" />
      <SectionNumber n="10" right />

      {/* Gold Ambient Glow */}
      <div className="absolute right-[5%] top-[10%] w-[600px] h-[600px] bg-[#c49a4a]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute left-[10%] bottom-[15%] w-[400px] h-[400px] bg-[#c49a4a]/5 rounded-full blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl w-full mx-auto px-6 flex flex-col lg:flex-row items-start gap-16 lg:gap-24">

        {/* Left: News Feed Style Content */}
        <div className="flex-1 flex flex-col gap-8 order-2 lg:order-1 pt-12">
          <FadeUp>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-[10px] bg-[#c49a4a]/10 border border-[#c49a4a]/30 flex items-center justify-center text-[#c49a4a]">
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M20 2H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1 14H5V5h14v11z" />
                  <rect x="7" y="7" width="10" height="2" />
                  <rect x="7" y="10" width="10" height="2" />
                  <rect x="7" y="13" width="7" height="2" />
                </svg>
              </div>
              <span className="text-[#c49a4a] text-xs font-grotesk tracking-[0.2em] font-bold">LATEST PRESS UPDATES</span>
            </div>
          </FadeUp>

          <div className="flex flex-col">
            <NewsItem
              publication="FashionNetwork India"
              title="Threads Culture lead Europe's cross-border minimalist fashion trends"
              summary="According to the latest industry reports, the brand is now at the top of the 500 largest luxury startups in the region."
              time="14 hours ago"
              delay={0.2}
            />
            <NewsItem
              publication="NDTV Profit"
              title="Retail King To Fashion Titan: Why Threads Culture Is Betting Big On Global Markets"
              summary="The brand invested over $500M in 2026, acquiring key retail spaces across North America and Europe."
              time="16 hours ago"
              delay={0.3}
            />
            <NewsItem
              publication="Vogue Business"
              title="Threads Culture's Minimalist Ethos: A New Paradigm for Sustainability"
              summary="The creative direction focuses on timelessness over trends, disrupting the traditional seasonal model."
              time="1 day ago"
              delay={0.4}
            />
          </div>

          <FadeUp delay={0.5} className="mt-4">
            <GoldOutlineButton>VIEW FULL PRESS ROOM →</GoldOutlineButton>
          </FadeUp>
        </div>

        {/* Right: Article & Profile Visuals */}
        <div className="flex-1 relative h-[700px] w-full flex items-center justify-center order-1 lg:order-2">

          {/* Background Decorative Rings */}
          <div className="absolute inset-0 z-0 flex items-center justify-center opacity-30">
            <div className="w-[500px] h-[500px] border border-white/5 rounded-full" />
            <div className="absolute w-[400px] h-[400px] border border-[#c49a4a]/10 rounded-full" />
          </div>

          {/* Central Featured Article Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease, delay: 0.2 }}
            className="relative z-20 bg-white w-[380px] rounded-2xl overflow-hidden shadow-[0_50px_100px_rgba(0,0,0,0.7)] border border-white/10 flex flex-col"
          >
            {/* News Header */}
            <div className="px-6 py-4 border-b border-black/5 flex justify-between items-center bg-gray-50/50">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center text-[10px] text-white font-bold">F</div>
                <span className="text-black font-bold text-[11px] uppercase tracking-wider">FashionNetwork India</span>
              </div>
              <span className="text-black/30 text-[9px]">April 24, 2026</span>
            </div>

            {/* Featured Image */}
            <div className="h-56 w-full relative">
              <Image src="/images/mockups/fashion-network-article.png" alt="Featured Press" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-4 left-6">
                <span className="bg-[#c49a4a] text-white text-[9px] font-bold px-2 py-0.5 rounded uppercase tracking-tighter">Main Feature</span>
              </div>
            </div>

            <div className="p-8 flex flex-col relative bg-white">
              {/* Author Info */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-gray-100 overflow-hidden relative">
                  <Image src="/images/mockups/kurti-2.png" alt="Author" fill className="object-cover" />
                </div>
                <div>
                  <p className="text-black font-bold text-xs">Matthieu Guinebault</p>
                  <p className="text-black/40 text-[10px]">International Editor</p>
                </div>
              </div>

              <div className="flex flex-col gap-4">
                <h3 className="text-black font-grotesk text-2xl font-bold leading-tight">
                  Threads Culture leads Europe's cross-border luxury e-commerce.
                </h3>
                <p className="text-black/60 text-[12px] leading-relaxed">
                  In the European cross-border commerce barometer, Threads Culture remains at the top of the 500 largest luxury startups, in a ranking where minimalist fashion retains a significant presence.
                </p>

                <div className="flex gap-4 mt-4 pt-6 border-t border-black/5">
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-black/30 text-[9px] uppercase font-bold tracking-widest">Growth</span>
                    <span className="text-[#c49a4a] font-bebas text-2xl">+42% YoY</span>
                  </div>
                  <div className="flex-1 flex flex-col gap-1">
                    <span className="text-black/30 text-[9px] uppercase font-bold tracking-widest">Global Rank</span>
                    <span className="text-black font-bebas text-2xl">#1 Minimalist</span>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <button className="w-full bg-black text-white rounded-xl py-3 text-[11px] font-bold uppercase tracking-widest hover:bg-[#c49a4a] transition-all duration-300">
                  Read Full Article
                </button>
              </div>
            </div>
          </motion.div>

          {/* Floating News Item Thumbnails */}
          {inView && (
            <>
              <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0 }}>
                <FeatureCard
                  title="NDTV Profit Spotlight" date="16h ago"
                  image="/images/mockups/ndtv-profit-news.png"
                  delay={0.6} className="top-[0%] -right-[15%] rotate-[6deg]"
                />
              </motion.div>

              <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 1 }}>
                <FeatureCard
                  title="Press Room Feed" date="Live Now"
                  image="/images/mockups/press-feed-list.png"
                  delay={0.8} className="bottom-[5%] -left-[20%] rotate-[-4deg]"
                />
              </motion.div>
            </>
          )}

        </div>
      </div>
      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none z-50" color="rgba(196,154,74,0.12)" />
    </section>
  );
}
