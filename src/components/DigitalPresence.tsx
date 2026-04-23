"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { GrowthArrowSVG, StitchLineSVG } from "./SvgDecorators";
import { FadeUp, SectionNumber, DarkButton, ease } from "./MotionUtils";

const cards = [
  { title: "SEO SERVICES", desc: "+156% Organic Traffic", icon: "📈", rotate: -1, x: -20, y: 30, accent: "#b8863c", highlight: true },
];

function TiltedCard({ card, index }: { card: typeof cards[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, rotate: card.rotate + (card.rotate > 0 ? 10 : -10), y: 40 }}
      animate={inView ? { opacity: 1, rotate: card.rotate, y: 0, x: card.x } : {}}
      transition={{ delay: index * 0.1, duration: 0.7, ease }}
      whileHover={{
        rotate: 0, y: -8,
        boxShadow: "0 16px 48px rgba(196,154,74,0.22)",
        zIndex: 10,
      }}
      className="relative rounded-lg p-5 flex flex-col gap-3 cursor-pointer"
      style={{
        background: "#ede8e1",
        border: "1px solid rgba(196,154,74,0.2)",
        boxShadow: "0 4px 20px rgba(26,31,28,0.08)",
        transformOrigin: "center center",
      }}
    >
      {/* Gold top-border accent */}
      <div
        className="absolute top-0 left-0 right-0 h-0.5 rounded-t-lg"
        style={{ background: `linear-gradient(to right, ${card.accent}, transparent)` }}
      />
      <span className="text-2xl">{card.icon}</span>
      <p className="font-bebas text-sm tracking-widest text-dark">{card.title}</p>
      <p className="text-xs font-grotesk text-light-muted leading-relaxed">{card.desc}</p>
      {card.highlight && (
        <>
          <p className="font-playfair text-xl font-bold gold-text">{card.desc}</p>
          <GrowthArrowSVG className="absolute bottom-2 right-2 w-20 pointer-events-none" />
        </>
      )}
    </motion.div>
  );
}

export default function DigitalPresence() {
  return (
    <section className="relative bg-cream py-28 overflow-hidden fabric-bg">
      <StitchLineSVG className="absolute top-0 left-0 w-full pointer-events-none" />
      <SectionNumber n="13" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col lg:flex-row gap-16 items-start">
        {/* Left — text */}
        <div className="lg:w-72 flex-shrink-0 flex flex-col gap-6 pt-12">
          <FadeUp>
            <p className="text-xs font-grotesk tracking-widest text-light-muted uppercase">Online Visibility</p>
            <h2 className="font-bebas text-dark mt-2" style={{ fontSize: "clamp(36px, 4.5vw, 62px)", lineHeight: 1 }}>
              DIGITAL PRESENCE
            </h2>
            <p className="text-light-muted font-grotesk text-sm leading-relaxed mt-4">
              Complete digital presence solutions to make your brand discoverable and trustworthy across every platform.
            </p>
          </FadeUp>
          <FadeUp delay={0.15}>
            <DarkButton>VIEW MORE →</DarkButton>
          </FadeUp>
        </div>

        {/* Right — tilted card showcase */}
        <div className="flex-1 grid grid-cols-2 gap-4 pt-12">
          {cards.map((card, i) => (
            <TiltedCard key={card.title} card={card} index={i} />
          ))}
        </div>
      </div>
      <StitchLineSVG className="absolute bottom-0 left-0 w-full pointer-events-none" />
    </section>
  );
}
