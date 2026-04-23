"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SwingTagSVG, StitchLineSVG } from "./SvgDecorators";
import { FadeUp, SectionNumber, GoldOutlineButton, ease } from "./MotionUtils";

const brandImages = [
  { src: "/images/mockups/brandkit-bag.png", alt: "Shopping Bag", width: 310, height: 400, z: 10, rotate: -6, x: -110, y: -60, delay: 0.1 },
  { src: "/images/mockups/brandkit-cards.png", alt: "Business Cards", width: 275, height: 350, z: 20, rotate: 8, x: 110, y: -110, delay: 0.2 },
  { src: "/images/mockups/brandkit-materials.png", alt: "Luxury Materials", width: 350, height: 450, z: 5, rotate: 2, x: 40, y: 60, delay: 0.3 },
  { src: "/images/mockups/brandkit-tags.png", alt: "Garment Tags", width: 300, height: 390, z: 30, rotate: -8, x: -50, y: 90, delay: 0.4 },
  { src: "/images/mockups/brandkit-packaging.png", alt: "Bespoke Packaging", width: 320, height: 380, z: 25, rotate: 4, x: -160, y: 120, delay: 0.5 },
];

function FloatingImage({ item, onHover }: { item: typeof brandImages[0]; onHover: (src: string | null) => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.6, x: 0, y: 80, rotate: 0 }}
      animate={inView ? { opacity: 1, scale: 1, x: item.x, y: item.y, rotate: item.rotate } : {}}
      transition={{ delay: item.delay, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => onHover(item.src)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ scale: 1.08, rotate: 0, zIndex: 100, transition: { duration: 0.5, ease: "easeOut" } }}
      className="absolute rounded-xl overflow-hidden cursor-pointer group"
      style={{
        width: item.width,
        height: item.height,
        zIndex: item.z,
        left: "50%",
        top: "50%",
        marginLeft: -item.width / 2,
        marginTop: -item.height / 2,
        boxShadow: "0 30px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(196,154,74,0.15)",
      }}
    >
      <div className="absolute inset-0 bg-[#1a1f1c] z-0" />
      <Image
        src={item.src}
        alt={item.alt}
        fill
        className="object-cover z-10 transition-transform duration-[1.5s] ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-700 z-20" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#c49a4a]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-screen z-30" />
      <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10 pointer-events-none z-40" />
    </motion.div>
  );
}

export default function BrandKit() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  return (
    <section
      className="relative py-32 overflow-hidden"
      style={{ background: "#1a1f1c", borderTop: "1px solid rgba(196,154,74,0.1)" }}
    >
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" color="rgba(196,154,74,0.12)" />
      <SectionNumber n="02" right />
      <SwingTagSVG className="absolute left-[52%] top-12 w-14 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left — floating cluster */}
        <div className="flex-1 relative w-full flex justify-center items-center" style={{ height: "700px" }}>
          <div className="relative w-full h-full max-w-lg">
            <AnimatePresence>
              {hoveredImage && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 z-[100] pointer-events-none flex items-center justify-center overflow-hidden rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.6)] border border-white/10"
                >
                  <Image
                    src={hoveredImage}
                    alt="Preview"
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="absolute bottom-10 left-10 text-left"
                  >
                    <p className="text-[#c49a4a] text-[10px] font-grotesk tracking-[0.4em] uppercase mb-1">Detailed View</p>
                    <h3 className="text-white font-bebas text-4xl tracking-wide uppercase">STUDIO MOCKUP</h3>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Original Items — Hidden when preview is active */}
            <div className={`transition-opacity duration-500 ${hoveredImage ? 'opacity-0' : 'opacity-100'}`}>
              {brandImages.map((item, i) => (
                <FloatingImage key={i} item={item} onHover={setHoveredImage} />
              ))}
            </div>
          </div>
        </div>


        {/* Right — text */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6">
          <FadeUp>
            <p className="text-xs font-grotesk tracking-widest text-dark-muted uppercase">Brand Identity</p>
            <h2 className="font-bebas text-dark-text mt-2" style={{ fontSize: "clamp(44px, 5.5vw, 72px)", lineHeight: 1 }}>
              BRAND KIT
            </h2>
            <p className="text-dark-muted font-grotesk text-sm leading-relaxed mt-4">
              Luxury brand identity across every touchpoint. From premium hangtags and woven labels to bespoke packaging, we craft every detail to define your brand's presence.
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
