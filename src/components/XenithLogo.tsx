import React from "react";

interface XenithLogoProps {
  className?: string;
  size?: number | string;
  showText?: boolean;
  textSize?: string;
  textColor?: string;
  textTracking?: string;
  showSubtitle?: boolean;
}

export default function XenithLogo({
  className = "",
  size = 120,
  showText = false,
  textSize = "text-[24px] md:text-[28px]",
  textColor = "text-transparent bg-clip-text bg-gradient-to-r from-[#ffe4a0] via-[#e5c185] to-[#a07a3e] font-semibold",
  textTracking = "tracking-[0.45em] md:tracking-[0.6em]",
  showSubtitle = true,
}: XenithLogoProps) {
  return (
    <div className={`flex flex-col items-center justify-center select-none ${className}`}>
      {/* SVG Blade Graphic */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="drop-shadow-[0_0_35px_rgba(229,193,133,0.15)] filter transition-all duration-500 hover:drop-shadow-[0_0_50px_rgba(229,193,133,0.25)]"
      >
        <defs>
          {/* Highlight/Bright Side Gold Gradient */}
          <linearGradient id="bright-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f6e0b3" />
            <stop offset="35%" stopColor="#e5c185" />
            <stop offset="70%" stopColor="#c49c5e" />
            <stop offset="100%" stopColor="#a07a3e" />
          </linearGradient>

          {/* Shadow/Contrast Side Gold Gradient */}
          <linearGradient id="shadow-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a07a3e" />
            <stop offset="40%" stopColor="#7c5c2d" />
            <stop offset="80%" stopColor="#533d1c" />
            <stop offset="100%" stopColor="#2b1e0a" />
          </linearGradient>

          {/* Soft outer glow or shadow for 3D realism */}
          <filter id="blade-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="10" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* --- BACK GROUND BLADE (Top-Left to Bottom-Right Segment, cut in the middle) --- */}
        <g filter="url(#blade-glow)" opacity="0.95">
          {/* Top-Left Piece - Bright Side */}
          <path
            d="M 120,120 L 185,200 L 211,219 L 215,215 Z"
            fill="url(#bright-gold)"
          />
          {/* Top-Left Piece - Shadow Side */}
          <path
            d="M 120,120 L 215,215 L 219,211 L 200,185 Z"
            fill="url(#shadow-gold)"
          />

          {/* Bottom-Right Piece - Bright Side */}
          <path
            d="M 380,380 L 315,300 L 289,281 L 285,285 Z"
            fill="url(#bright-gold)"
          />
          {/* Bottom-Right Piece - Shadow Side */}
          <path
            d="M 380,380 L 285,285 L 281,289 L 300,315 Z"
            fill="url(#shadow-gold)"
          />
        </g>

        {/* --- FOREGROUND BLADE (Bottom-Left to Top-Right Segment, continuous) --- */}
        <g filter="url(#blade-glow)">
          {/* Continuous Blade - Bright Side (upper-left of main ridge) */}
          <path
            d="M 120,380 L 230,230 L 380,120 L 250,250 Z"
            fill="url(#bright-gold)"
          />
          {/* Continuous Blade - Shadow Side (lower-right of main ridge) */}
          <path
            d="M 120,380 L 250,250 L 380,120 L 270,270 Z"
            fill="url(#shadow-gold)"
          />
        </g>

        {/* Golden Highlight Reflection overlay */}
        <circle cx="250" cy="250" r="1.5" fill="#fcf6e8" opacity="0.9" />
        <ellipse cx="250" cy="250" rx="15" ry="1" fill="#fcf6e8" opacity="0.4" transform="rotate(-45 250 250)" />
        <ellipse cx="250" cy="250" rx="1" ry="15" fill="#fcf6e8" opacity="0.4" transform="rotate(-45 250 250)" />
      </svg>

      {/* Typography representation for "X E N I T H" under the logo */}
      {showText && (
        <div className="flex flex-col items-center mt-5 text-center">
          <span
            className={`font-display uppercase select-none pointer-events-none ${textSize} ${textColor} ${textTracking} pl-[0.45em] md:pl-[0.6em] transition-all`}
          >
            XENITH
          </span>
          {showSubtitle && (
            <span
              className="text-[8px] md:text-[10px] tracking-[0.4em] md:tracking-[0.52em] text-[#f4cf8a]/50 uppercase font-light font-sans mt-3 pl-[0.4em] md:pl-[0.52em] animate-fade-in"
            >
              Sovereign Artificial Intelligence
            </span>
          )}
        </div>
      )}
    </div>
  );
}
