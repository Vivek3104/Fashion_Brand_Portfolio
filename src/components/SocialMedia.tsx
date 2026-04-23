"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { InstagramFrameSVG, StitchLineSVG } from "./SvgDecorators";
import { FadeUp, SectionNumber, DarkButton } from "./MotionUtils";

import Image from "next/image";

const gridImages = [
  'marketing-lookbook.png',
  'voguefit.png',
  'brandkit-bag.png',
  'packaging-box.png',
  'marketing-billboard.png',
  'aesthetic-wear.png',
  'marketing-social.png',
  'threads-culture.png',
  'urban-drip.png',
];

export default function SocialMedia() {
  return (
    <section className="relative bg-cream py-6 lg:py-8 overflow-hidden fabric-bg">
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" />
      <SectionNumber n="05" />
      <InstagramFrameSVG className="absolute right-6 top-6 w-44 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start lg:items-center">
        {/* Left — text */}
        <div className="lg:w-96 flex-shrink-0 flex flex-col gap-6 pt-12 lg:pt-0 z-20">
          <FadeUp>
            <p className="text-sm font-grotesk tracking-widest text-light-muted uppercase">Content Creation</p>
            <h2 className="font-bebas text-dark mt-2" style={{ fontSize: "clamp(46px, 6vw, 82px)", lineHeight: 0.95 }}>
              SOCIAL MEDIA CONTENT
            </h2>
            <p className="text-light-muted font-grotesk text-base lg:text-lg leading-relaxed mt-4">
              Scroll-stopping content designed for fashion audiences. Every post crafted to convert followers into loyal customers.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <DarkButton>VIEW MORE →</DarkButton>
          </FadeUp>
        </div>

        {/* Right — Instagram Grid UI */}
        <div className="flex-1 w-full flex justify-center lg:justify-end pt-12 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[700px] xl:max-w-[740px] bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] rounded-xl overflow-hidden font-sans border border-gray-100"
          >
            {/* Header / Profile Info */}
            <div className="px-5 pt-6 pb-4">
              <div className="flex items-start gap-6 lg:gap-8 mb-5">
                {/* Profile Pic */}
                <div className="relative flex-shrink-0 w-20 h-20 rounded-full p-[3px] bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500">
                  <div className="bg-white rounded-full p-[2px] w-full h-full">
                    <div className="w-full h-full rounded-full bg-gray-900 flex items-center justify-center text-white overflow-hidden relative">
                       <Image src="/images/mockups/urban-drip.png" alt="Profile" fill className="object-cover" />
                    </div>
                  </div>
                </div>

                {/* Profile Details */}
                <div className="flex-1 min-w-0 pt-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-lg text-gray-900 truncate">threads.culture</h3>
                    <svg aria-label="Verified" className="w-4 h-4 text-blue-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1.9 14.7L6 12.6l1.5-1.5 2.6 2.6 6.4-6.4 1.5 1.5-7.9 7.9z"></path></svg>
                  </div>
                  
                  <div className="flex items-center gap-2 flex-wrap mb-3">
                    <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm px-4 py-1.5 rounded-lg transition-colors">Follow</button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 font-semibold text-sm px-4 py-1.5 rounded-lg transition-colors">Message</button>
                    <button className="bg-gray-100 hover:bg-gray-200 text-gray-900 p-1.5 rounded-lg transition-colors flex items-center justify-center">
                      <svg fill="currentColor" className="w-4 h-4" viewBox="0 0 24 24"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg>
                    </button>
                  </div>
                  
                  {/* Desktop Stats */}
                  <div className="hidden lg:flex items-center gap-5 text-[14px] text-gray-900">
                    <div><span className="font-semibold">2,265</span> posts</div>
                    <div><span className="font-semibold">322K</span> followers</div>
                    <div><span className="font-semibold">16</span> following</div>
                  </div>
                </div>
              </div>

              {/* Mobile Stats */}
              <div className="flex lg:hidden items-center justify-around mb-4 text-[13px] text-gray-900 border-t border-gray-100 pt-3">
                <div className="text-center"><div className="font-semibold">2,265</div><div className="text-gray-500 text-[11px]">posts</div></div>
                <div className="text-center"><div className="font-semibold">322K</div><div className="text-gray-500 text-[11px]">followers</div></div>
                <div className="text-center"><div className="font-semibold">16</div><div className="text-gray-500 text-[11px]">following</div></div>
              </div>

              {/* Bio */}
              <div className="text-[13px] text-gray-900 lg:px-1">
                <p className="font-semibold text-[14px]">Threads Culture®</p>
                <p className="text-gray-500 text-[13px] my-0.5">Clothing (Brand)</p>
                <p className="whitespace-pre-wrap leading-tight mt-1 mb-1 text-[14px]">Crafting a premium lifestyle with less.</p>
                <a href="#" className="text-blue-900 font-medium text-[14px] no-underline hover:underline">threadsculture.com</a>
              </div>
            </div>

            {/* Highlights */}
            <div className="flex gap-4 overflow-x-auto px-5 pb-5 pt-1 scrollbar-hide" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
              {['New Arrivals', 'Lookbook', 'Behind', 'Events', 'Store'].map((highlight, i) => (
                <div key={i} className="flex flex-col items-center gap-1 flex-shrink-0 cursor-pointer group">
                  <div className="w-16 h-16 rounded-full border border-gray-300 p-[2px] group-hover:border-gray-400 transition-colors">
                    <div className="w-full h-full rounded-full bg-gray-100 overflow-hidden relative">
                       <Image src={`/images/mockups/${['packaging-box.png', 'marketing-lookbook.png', 'brandkit-bag.png', 'marketing-billboard.png', 'brand-kit.png'][i]}`} alt={highlight} fill className="object-cover" />
                    </div>
                  </div>
                  <span className="text-[11px] text-gray-900 font-medium">{highlight}</span>
                </div>
              ))}
            </div>

            {/* Tabs */}
            <div className="flex border-t border-gray-200">
              <div className="flex-1 flex justify-center items-center gap-2 py-3 border-t-[1px] border-gray-900 -mt-[1px] cursor-pointer">
                <svg fill="currentColor" className="w-4 h-4 text-gray-900" viewBox="0 0 24 24"><path d="M22 2v20H2V2h20zm-2 2H4v16h16V4zm-6 2v4h4V6h-4zm-6 0v4h4V6H8zM2 6v4h4V6H2zm12 6v4h4v-4h-4zm-6 0v4h4v-4H8zM2 12v4h4v-4H2zm12 6v4h4v-4h-4zm-6 0v4h4v-4H8zM2 18v4h4v-4H2z"></path></svg>
                <span className="text-[12px] font-semibold text-gray-900 tracking-wider">POSTS</span>
              </div>
              <div className="flex-1 flex justify-center items-center gap-2 py-3 cursor-pointer">
                <svg fill="currentColor" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"></path></svg>
                <span className="text-[12px] font-semibold text-gray-400 tracking-wider">REELS</span>
              </div>
              <div className="flex-1 flex justify-center items-center gap-2 py-3 cursor-pointer">
                <svg fill="currentColor" className="w-4 h-4 text-gray-400" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15h2v-6h-2v6zm0-8h2V7h-2v2z"></path></svg>
                <span className="text-[12px] font-semibold text-gray-400 tracking-wider">TAGGED</span>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-3 gap-0.5 bg-white">
              {gridImages.slice(0, 6).map((img, i) => (
                <div key={i} className="relative aspect-square bg-gray-100 group cursor-pointer overflow-hidden">
                  <Image src={`/images/mockups/${img}`} alt={`Post ${i+1}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none" />
    </section>
  );
}

