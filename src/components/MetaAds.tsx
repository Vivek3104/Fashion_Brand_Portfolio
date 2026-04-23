"use client";
import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { StitchLineSVG } from "./SvgDecorators";
import { FadeUp, SectionNumber, GoldOutlineButton, ease } from "./MotionUtils";
import Image from "next/image";

const ads = [
  { platform: "FACEBOOK ADS", color: "#1877F2", tilt: 14, scale: 0.85, center: false, src: "/images/mockups/marketing-social.png" },
  { platform: "INSTAGRAM ADS", color: "#E1306C", tilt: 0, scale: 1.1, center: true, src: "/images/mockups/aesthetic-wear.png" },
  { platform: "WHATSAPP ADS", color: "#25D366", tilt: -14, scale: 0.85, center: false, src: "/images/mockups/urban-drip.png" },
];

function PhoneArc() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [isReady, setIsReady] = useState(false);
  const [hovered, setHovered] = useState<number | null>(null);

  if (inView && !isReady) {
    setTimeout(() => setIsReady(true), 1200);
  }

  return (
    <div ref={ref} className="relative flex items-end justify-center lg:justify-start gap-4 lg:gap-8 lg:-ml-6" style={{ height: "480px" }}>
      {ads.map((ad, i) => {
        const isHovered = hovered === i;
        const isDimmed = hovered !== null && !isHovered;
        const bottomOffset = Math.abs(ad.tilt) * 3.5;

        // Calculate translation to slide to the center index (1)
        let hoverX = 0;
        if (i === 0) hoverX = 157;
        if (i === 2) hoverX = -157;

        return (
          <motion.div
            key={ad.platform}
            initial={{ opacity: 0, y: 60, rotate: 0, scale: 0.5 }}
            animate={inView ? {
              opacity: isDimmed ? 0.3 : 1,
              y: isHovered ? -30 : 0,
              x: isHovered ? hoverX : 0,
              rotate: isHovered ? 0 : ad.tilt,
              scale: isHovered ? (ad.center ? 1.3 : 1.6) : ad.scale,
              zIndex: isHovered ? 50 : (ad.center ? 10 : 1),
            } : {}}
            transition={{ delay: isReady ? 0 : Math.abs(i - 1) * 0.15, duration: 0.5, ease: "easeOut" }}
            onHoverStart={() => setHovered(i)}
            onHoverEnd={() => setHovered(null)}
            className="flex flex-col items-center gap-2 cursor-pointer relative"
            style={{ marginBottom: `${bottomOffset}px`, transformOrigin: "bottom center" }}
          >
            <span
              className="px-3 py-1 rounded-full text-[10px] font-grotesk font-semibold text-white whitespace-nowrap shadow-lg tracking-wider"
              style={{ background: ad.color + "e6" }}
            >
              {ad.platform}
            </span>
            <div
              className="relative rounded-[20px] overflow-hidden flex items-center justify-center"
              style={{
                width: ad.center ? "150px" : "120px",
                height: ad.center ? "300px" : "240px",
                background: "#232a26",
                border: `2px solid ${ad.color}55`,
                boxShadow: ad.center ? `0 0 40px ${ad.color}33` : `0 8px 24px rgba(0,0,0,0.5)`,
              }}
            >
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-10 h-1.5 rounded-full bg-[#111] z-20" />
              <Image src={ad.src} alt={ad.platform} fill className="object-cover opacity-90" />
              <div className="absolute inset-0 pointer-events-none" style={{ background: `linear-gradient(to bottom, transparent 60%, ${ad.color}44)` }} />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}

export default function MetaAds() {
  return (
    <section
      className="relative py-28 overflow-hidden"
      style={{ background: "#1a1f1c", borderTop: "1px solid rgba(196,154,74,0.1)" }}
    >
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" color="rgba(196,154,74,0.12)" />
      <SectionNumber n="06" right />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left — phone arc */}
        <div className="flex-1">
          <PhoneArc />
        </div>

        {/* Right — text */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6">
          <FadeUp>
            <p className="text-xs font-grotesk tracking-widest text-dark-muted uppercase">Performance Marketing</p>
            <h2 className="font-bebas text-dark-text mt-2" style={{ fontSize: "clamp(32px, 4vw, 58px)", lineHeight: 1 }}>
              META ADS
            </h2>
            <p className="text-dark-muted font-grotesk text-sm leading-relaxed mt-4">
              High-converting ad creatives tailored for the Meta ecosystem. Every pixel engineered to stop the scroll and drive conversions.
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
