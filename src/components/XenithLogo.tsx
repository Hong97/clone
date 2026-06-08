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
      {/* Gold X mark */}
      <img
        src="/ximage.png"
        alt="Xenith"
        width={size}
        height={size}
        draggable={false}
        className="object-contain drop-shadow-[0_0_35px_rgba(229,193,133,0.15)] filter transition-all duration-500 hover:drop-shadow-[0_0_50px_rgba(229,193,133,0.25)]"
      />

      {/* Typography representation for "X E N I T H" under the logo */}
      {showText && (
        <div className="flex flex-col items-center mt-5 text-center">
          <span
            className={`font-display uppercase select-none pointer-events-none ${textSize} ${textColor} ${textTracking} pl-[0.45em] md:pl-[0.6em] transition-all`}
            style={{ letterSpacing: "1.25em" }}
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
