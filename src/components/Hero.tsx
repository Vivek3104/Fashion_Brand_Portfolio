"use client";
import { motion } from "framer-motion";
import { HangerLargeSVG, StitchLineSVG } from "./SvgDecorators";

const ease = [0.25, 0.46, 0.45, 0.94] as const;

const brands = [
  { name: "Urban Drip", mark: "UD" },
  { name: "Nexora Apparel", mark: "NA" },
  { name: "Voguefit Clothing", mark: "VC" },
  { name: "Threads Culture", mark: "TC" },
  { name: "Aesthetic Wear", mark: "AW" },
  { name: "Urban Drip", mark: "UD" },
  { name: "Nexora Apparel", mark: "NA" },
  { name: "Voguefit Clothing", mark: "VC" },
  { name: "Threads Culture", mark: "TC" },
  { name: "Aesthetic Wear", mark: "AW" },
];

const FloatingImage = ({ src, alt, category, delay, className, rotate, x, y }: {
  src: string, alt: string, category: string, delay: number, className: string, rotate: number, x: number | string, y: number | string
}) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate }}
    animate={{ opacity: 1, scale: 1, rotate }}
    transition={{ delay, duration: 1, ease }}
    whileHover={{ scale: 1.05, rotate: 0, zIndex: 50, transition: { duration: 0.3 } }}
    className={`absolute rounded-sm overflow-hidden shadow-2xl cursor-pointer group border-4 border-white ${className}`}
    style={{ left: x, top: y }}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
      <span className="text-white font-bebas text-lg tracking-widest">{category}</span>
    </div>
  </motion.div>
);

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-cream overflow-hidden flex flex-col fabric-bg border-b border-dark/5">

      {/* Background Monogram */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 select-none pointer-events-none font-playfair leading-none opacity-[0.03]"
        style={{ fontSize: "50vw", fontWeight: 700 }}
      >
        THREADS
      </div>

      <StitchLineSVG className="absolute top-[76px] left-0 w-full pointer-events-none" />

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 w-full flex flex-col items-center justify-center px-6 pt-20">

        {/* CENTER TEXT BLOCK */}
        <div className="relative z-20 flex flex-col items-center text-center max-w-4xl mx-auto gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, ease }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-grotesk font-bold tracking-[0.3em] uppercase"
            style={{ background: "rgba(196,154,74,0.12)", border: "1px solid rgba(196,154,74,0.3)", color: "#c49a4a" }}
          >
            <span className="w-1 h-1 rounded-full bg-gold animate-pulse" />
            2024 COLLECTION SHOWCASE
          </motion.div>

          <div className="flex flex-col gap-2">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease }}
              className="font-bebas text-dark leading-[0.85]"
              style={{ fontSize: "clamp(60px, 10vw, 140px)" }}
            >
              FASHION BRAND <br />
              <span className="gold-shimmer">DIGITAL MARKETING</span> <br />
              PORTFOLIO
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, ease }}
            className="text-dark/60 font-grotesk text-base md:text-lg max-w-2xl leading-relaxed"
          >
            We help global clothing brands build their legacy, attract high-intent audiences, and scale their digital footprint with precision and style.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, ease }}
            className="flex flex-col sm:flex-row gap-4 mt-4"
          >
            <button className="px-10 py-4 bg-dark text-cream text-xs font-grotesk font-bold tracking-widest rounded-sm hover:bg-dark/90 transition-all shadow-xl">
              SCALE YOUR BRAND →
            </button>
            <button className="px-10 py-4 border border-dark/20 text-dark text-xs font-grotesk font-bold tracking-widest rounded-sm hover:bg-dark/5 transition-all">
              VIEW WORK
            </button>
          </motion.div>
        </div>

        {/* FLOATING COLLAGE - LEFT SIDE */}
        <div className="absolute left-0 top-0 w-[30%] h-full pointer-events-none hidden lg:block">
          <FloatingImage
            src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=600&q=80"
            alt="Men's Wear"
            category="MEN'S WEAR"
            delay={1.0}
            className="w-52 h-72 z-10 pointer-events-auto"
            rotate={-10}
            x="20%" y="10%"
          />
          <FloatingImage
            src="/images/mockups/kids-hoodie.png"
            alt="Kids Wear"
            category="KIDS WEAR"
            delay={1.2}
            className="w-44 h-56 z-20 pointer-events-auto"
            rotate={5}
            x="5%" y="45%"
          />
          <FloatingImage
            src="/images/mockups/kids-denim.png"
            alt="Kids Wear 2"
            category="KIDS FASHION"
            delay={1.3}
            className="w-36 h-48 z-0 pointer-events-auto opacity-80"
            rotate={-12}
            x="55%" y="25%"
          />
          <FloatingImage
            src="https://images.unsplash.com/photo-1549298916-b41d501d3772?auto=format&fit=crop&w=600&q=80"
            alt="Footwear"
            category="FOOTWEAR"
            delay={1.4}
            className="w-48 h-64 z-30 pointer-events-auto"
            rotate={-4}
            x="40%" y="65%"
          />
        </div>

        {/* FLOATING COLLAGE - RIGHT SIDE */}
        <div className="absolute right-0 top-0 w-[30%] h-full pointer-events-none hidden lg:block">
          <FloatingImage
            src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=600&q=80"
            alt="Women's Wear"
            category="WOMEN'S WEAR"
            delay={1.0}
            className="w-52 h-72 z-10 pointer-events-auto"
            rotate={10}
            x="20%" y="10%"
          />
          <FloatingImage
            src="/images/mockups/kurti-1.png"
            alt="Kurti"
            category="KURTI"
            delay={1.2}
            className="w-44 h-56 z-20 pointer-events-auto"
            rotate={-5}
            x="5%" y="45%"
          />
          <FloatingImage
            src="/images/mockups/kurti-2.png"
            alt="Kurti 2"
            category="DESIGNER KURTI"
            delay={1.3}
            className="w-36 h-48 z-0 pointer-events-auto opacity-80"
            rotate={12}
            x="55%" y="25%"
          />
          <FloatingImage
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=600&q=80"
            alt="Saree"
            category="SAREE"
            delay={1.4}
            className="w-48 h-64 z-30 pointer-events-auto"
            rotate={4}
            x="40%" y="65%"
          />
        </div>

        {/* Mobile View Collage (Simplified) */}
        <div className="lg:hidden mt-16 grid grid-cols-2 gap-4 w-full">
          <div className="rounded-lg overflow-hidden h-40 relative border-2 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=400" className="w-full h-full object-cover" alt="Men" />
          </div>
          <div className="rounded-lg overflow-hidden h-40 relative border-2 border-white shadow-lg">
            <img src="https://images.unsplash.com/photo-1539008835657-9e8e9680c956?auto=format&fit=crop&w=400" className="w-full h-full object-cover" alt="Women" />
          </div>
        </div>

      </div>

      {/* Brand Ticker Bar */}
      <div
        className="relative z-30 py-5 overflow-hidden"
        style={{ background: "#1a1f1c", borderTop: "1px solid rgba(196,154,74,0.15)" }}
      >
        <div className="flex items-center gap-6 px-6 mb-3">
          <span className="text-[10px] font-grotesk tracking-[0.3em] whitespace-nowrap text-[#c49a4a] uppercase font-bold">
            Trusted By Luxury Labels
          </span>
          <div className="flex-1 h-px" style={{ background: "rgba(196,154,74,0.2)" }} />
        </div>
        <div className="flex overflow-hidden">
          <div className="marquee-track flex gap-12 whitespace-nowrap items-center">
            {brands.map((b, i) => (
              <span key={i} className="flex items-center gap-3">
                <span className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bebas bg-[#c49a4a]/10 text-[#c49a4a] border border-[#c49a4a]/30">
                  {b.mark}
                </span>
                <span className="font-grotesk text-sm tracking-widest text-white/40 hover:text-white transition-colors duration-200 cursor-default uppercase">
                  {b.name}
                </span>
                <span className="w-1 h-1 rounded-full bg-gold opacity-40" />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
