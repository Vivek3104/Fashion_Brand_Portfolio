"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const ease = [0.25, 0.46, 0.45, 0.94] as const;

export function useSectionInView() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" as "-80px" });
  return { ref, inView };
}

export function FadeUp({
  children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useSectionInView();
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.7, ease }}
      className={className}
    >{children}</motion.div>
  );
}

export function ScaleIn({
  children, delay = 0, className = "",
}: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, inView } = useSectionInView();
  return (
    <motion.div ref={ref}
      initial={{ opacity: 0, scale: 0.92 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay, duration: 0.6, ease }}
      className={className}
    >{children}</motion.div>
  );
}

/* Gold serif section number watermark */
export function SectionNumber({ n, right = false }: { n: string; right?: boolean }) {
  const { ref, inView } = useSectionInView();
  return (
    <motion.span ref={ref}
      initial={{ opacity: 0, scale: 1.1 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ delay: 0.5, duration: 1 }}
      className={`absolute font-playfair select-none pointer-events-none leading-none ${right ? "right-6" : "left-6"} top-6`}
      style={{
        fontSize: "clamp(100px, 16vw, 220px)",
        background: "linear-gradient(to right, #c49a4a, #d4aa5a, #b8863c)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
        backgroundClip: "text",
        opacity: 0.12,
        lineHeight: 1,
      }}
    >{n}</motion.span>
  );
}

/* Dark button (on cream sections) */
export function DarkButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 px-6 py-3 bg-dark text-cream text-sm font-grotesk font-medium tracking-wide rounded-sm hover:bg-[#2a3330] transition-colors duration-200"
    >{children}</motion.button>
  );
}

/* Gold outlined button (on dark sections) */
export function GoldOutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03, backgroundColor: "rgba(196,154,74,0.1)" }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-2 px-6 py-3 text-sm font-grotesk font-medium tracking-wide rounded-sm transition-all duration-200"
      style={{ border: "1px solid #c49a4a", color: "#c49a4a" }}
    >{children}</motion.button>
  );
}
