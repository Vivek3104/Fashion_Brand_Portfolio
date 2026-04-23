"use client";

const g = "rgba(196,154,74,0.10)";
const gs = "rgba(196,154,74,0.08)";

export function HangerSVG({ className = "", stroke = g }: { className?: string; stroke?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 30 C100 20 112 14 118 22 C124 30 116 40 100 40" stroke={stroke} strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M100 40 L100 62" stroke={stroke} strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M100 62 L18 148 Q6 164 24 168 L176 168 Q194 164 182 148 Z" stroke={stroke} strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
    </svg>
  );
}

export function HangerGoldSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 180" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M100 30 C100 20 112 14 118 22 C124 30 116 40 100 40" stroke="#c49a4a" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
      <path d="M100 40 L100 62" stroke="#c49a4a" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M100 62 L18 148 Q6 164 24 168 L176 168 Q194 164 182 148 Z" stroke="#c49a4a" strokeWidth="2.5" fill="none" strokeLinejoin="round"/>
    </svg>
  );
}

export function HangerLargeSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M200 60 C200 40 222 28 232 42 C242 56 228 74 200 74" stroke={gs} strokeWidth="3" fill="none"/>
      <path d="M200 74 L200 114" stroke={gs} strokeWidth="3"/>
      <path d="M200 114 L36 288 Q18 316 48 324 L352 324 Q382 316 364 288 Z" stroke={gs} strokeWidth="3" fill="none"/>
    </svg>
  );
}

export function SwingTagSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 80 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="30" width="60" height="80" rx="5" stroke={g} strokeWidth="1.5" fill="none"/>
      <circle cx="40" cy="30" r="6" stroke={g} strokeWidth="1.5" fill="none"/>
      <line x1="40" y1="8" x2="40" y2="24" stroke={g} strokeWidth="1.5"/>
      <line x1="20" y1="56" x2="60" y2="56" stroke={g} strokeWidth="1"/>
      <line x1="20" y1="72" x2="52" y2="72" stroke={g} strokeWidth="1"/>
      <line x1="20" y1="88" x2="56" y2="88" stroke={g} strokeWidth="1"/>
    </svg>
  );
}

export function ThreadSpoolSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="50" cy="25" rx="35" ry="12" stroke={g} strokeWidth="1.5" fill="none"/>
      <ellipse cx="50" cy="95" rx="35" ry="12" stroke={g} strokeWidth="1.5" fill="none"/>
      <line x1="15" y1="25" x2="15" y2="95" stroke={g} strokeWidth="1.5"/>
      <line x1="85" y1="25" x2="85" y2="95" stroke={g} strokeWidth="1.5"/>
      <ellipse cx="50" cy="60" rx="20" ry="8" stroke={g} strokeWidth="1" fill="none"/>
      <path d="M30 60 Q50 45 70 60 Q50 75 30 60" stroke={g} strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function NeedlePathSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 30 Q30 10 50 30 Q70 50 90 30 Q110 10 130 30 Q150 50 170 30 L190 20" stroke={g} strokeWidth="1.5" strokeDasharray="4 3"/>
      <path d="M185 15 L195 20 L185 25" stroke={g} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export function StitchLineSVG({ className = "", color = g }: { className?: string; color?: string }) {
  return (
    <svg className={className} viewBox="0 0 400 10" fill="none" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="5" x2="400" y2="5" stroke={color} strokeWidth="1.5" strokeDasharray="8 6"/>
    </svg>
  );
}

export function BillboardSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 300 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="20" width="260" height="140" rx="4" stroke={gs} strokeWidth="2" fill="none"/>
      <line x1="100" y1="160" x2="100" y2="190" stroke={gs} strokeWidth="3"/>
      <line x1="200" y1="160" x2="200" y2="190" stroke={gs} strokeWidth="3"/>
      <line x1="80" y1="190" x2="220" y2="190" stroke={gs} strokeWidth="3"/>
      <rect x="40" y="40" width="220" height="100" rx="2" stroke={gs} strokeWidth="1" fill="none"/>
    </svg>
  );
}

export function InstagramFrameSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="10" y="10" width="180" height="180" rx="40" stroke={g} strokeWidth="2" fill="none"/>
      <rect x="30" y="30" width="140" height="140" rx="30" stroke={gs} strokeWidth="1.5" fill="none"/>
      <circle cx="100" cy="100" r="35" stroke={gs} strokeWidth="1.5" fill="none"/>
      <circle cx="145" cy="55" r="8" stroke={gs} strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

export function GrowthArrowSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <polyline points="10,100 50,70 90,80 130,40 170,20" stroke="rgba(196,154,74,0.2)" strokeWidth="2" fill="none"/>
      <polyline points="160,15 170,20 165,30" stroke="rgba(196,154,74,0.2)" strokeWidth="2" fill="none"/>
    </svg>
  );
}

export function ScissorsSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="20" cy="20" r="10" stroke={g} strokeWidth="1.5" fill="none"/>
      <circle cx="20" cy="40" r="10" stroke={g} strokeWidth="1.5" fill="none"/>
      <line x1="28" y1="14" x2="110" y2="5" stroke={g} strokeWidth="1.5"/>
      <line x1="28" y1="46" x2="110" y2="55" stroke={g} strokeWidth="1.5"/>
    </svg>
  );
}

export function MeasuringTapeSVG({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="5" y="10" width="190" height="20" rx="10" stroke={g} strokeWidth="1.5" fill="none"/>
      {[20,40,60,80,100,120,140,160,180].map((x, i) => (
        <line key={i} x1={x} y1="14" x2={x} y2={i % 2 === 0 ? "26" : "22"} stroke={g} strokeWidth="1"/>
      ))}
    </svg>
  );
}
