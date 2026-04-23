"use client";
import Image from "next/image";
import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SwingTagSVG, StitchLineSVG } from "./SvgDecorators";
import { FadeUp, SectionNumber, DarkButton, ease } from "./MotionUtils";

const items = [
  { src: "/images/mockups/packaging-shoebox.png", label: "Luxury Shoebox", sub: "Forest Green & Gold", size: 1 },
  { src: "/images/mockups/packaging-unboxing.png", label: "Unboxing Detail", sub: "Vellum & Wax Seal", size: 0.94 },
  { src: "/images/mockups/packaging-garment-bag.png", label: "Canvas Garment Bag", sub: "Embroidered Detail", size: 0.88 },
  { src: "/images/mockups/packaging-velvet-pouch.png", label: "Velvet Pouch", sub: "Gold Drawstring", size: 0.82 },
  { src: "/images/mockups/packaging-box-cluster.png", label: "Shipping Cluster", sub: "Sustainable Mailers", size: 0.76 },
];

function StaircaseCard({ item, index, onHover }: { item: typeof items[0]; index: number; onHover: (item: typeof items[0] | null) => void }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  // Increased offset significantly for the much larger cards
  // Slightly smaller offset to fit more items in the cluster
  const offset = index * 75;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: 120 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.8, ease }}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
      whileHover={{ y: -12, x: -12, scale: 1.05, boxShadow: "0 25px 50px rgba(196,154,74,0.3)", zIndex: 100 }}
      className="absolute flex flex-col items-center justify-center rounded-lg cursor-pointer transition-all duration-400 group overflow-hidden"
      style={{
        // Significantly increased card base size
        width: `${item.size * 300}px`,
        height: `${item.size * 380}px`,
        top: `${offset}px`,
        left: `${offset}px`,
        background: "linear-gradient(145deg, #ede8e1, #e4ddd4)",
        border: "1px solid rgba(196,154,74,0.4)",
        zIndex: index,
        boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
      }}
    >
      <Image
        src={item.src}
        alt={item.label}
        fill
        className="object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-300"
      />
      
      {/* Title overlay on hover */}
      <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent flex flex-col items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <p className="font-bebas text-lg tracking-widest text-white text-center drop-shadow-md">{item.label}</p>
        <p className="text-xs font-grotesk text-white/80 drop-shadow-md">{item.sub}</p>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(to right, #c49a4a, #d4aa5a, #b8863c)" }}
      />
    </motion.div>
  );
}

export default function PackagingDesign() {
  const [hoveredItem, setHoveredItem] = useState<typeof items[0] | null>(null);

  return (
    <section className="relative bg-cream py-32 overflow-hidden fabric-bg">
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" />
      <SectionNumber n="03" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-center">
        {/* Left — text */}
        <div className="lg:w-80 flex-shrink-0 flex flex-col gap-6">
          <FadeUp>
            <p className="text-xs font-grotesk tracking-widest text-light-muted uppercase">Unboxing Experience</p>
            <h2 className="font-bebas text-dark mt-2" style={{ fontSize: "clamp(44px, 5.5vw, 72px)", lineHeight: 1 }}>
              PACKAGING DESIGN
            </h2>
            <p className="text-light-muted font-grotesk text-sm leading-relaxed mt-4">
              Bespoke packaging systems that elevate the unboxing experience. From luxury garment bags and velvet accessory pouches to sustainable mailers, we design sensory touchpoints that define high-end fashion.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <DarkButton>VIEW MORE →</DarkButton>
          </FadeUp>
        </div>

        {/* Right — diagonal staircase */}
        <div className="flex-1 relative w-full flex justify-end" style={{ height: "650px" }}>
          <div className="relative w-[600px] h-full">
            {/* Localized Cinematic Preview Overlay */}
            <AnimatePresence>
              {hoveredItem && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.05 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute inset-0 z-[100] pointer-events-none overflow-hidden rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.3)] border border-white/20 bg-[#ede8e1]"
                >
                  <Image
                    src={hoveredItem.src}
                    alt={hoveredItem.label}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="absolute bottom-8 left-8"
                  >
                    <p className="text-[#c49a4a] text-[10px] font-grotesk tracking-[0.3em] uppercase mb-1">{hoveredItem.sub}</p>
                    <h3 className="text-white font-bebas text-4xl tracking-wide uppercase">{hoveredItem.label}</h3>
                  </motion.div>
                  
                  {/* Corner accent */}
                  <div className="absolute top-6 right-6 w-12 h-12 border-t border-r border-white/30" />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Original Items — Hidden when preview is active to keep it clean */}
            <div className={`transition-opacity duration-500 ${hoveredItem ? 'opacity-0' : 'opacity-100'}`}>
              {items.map((item, i) => (
                <StaircaseCard key={item.label} item={item} index={i} onHover={setHoveredItem} />
              ))}
              {/* Swing tag adjusted for new size */}
              <div className="absolute w-14 pointer-events-none" style={{ top: "380px", left: "480px", zIndex: 10 }}>
                <SwingTagSVG className="w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none" />
    </section>
  );
}
