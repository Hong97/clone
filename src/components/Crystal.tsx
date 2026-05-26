interface CrystalProps {
  variant?: "gold" | "white" | "outline";
  size?: number;
  className?: string;
}

export function Crystal({
  variant = "gold",
  size = 200,
  className = "",
}: CrystalProps) {
  const fill =
    variant === "gold"
      ? "url(#crystal-gold)"
      : variant === "white"
        ? "url(#crystal-white)"
        : "none";
  const stroke = variant === "outline" ? "rgba(255,255,255,0.6)" : "none";

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="crystal-gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#fde68a" />
          <stop offset="40%" stopColor="#f59e0b" />
          <stop offset="100%" stopColor="#78350f" />
        </linearGradient>
        <linearGradient id="crystal-white" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffffff" />
          <stop offset="50%" stopColor="#e5e7eb" />
          <stop offset="100%" stopColor="#6b7280" />
        </linearGradient>
      </defs>
      {/* Rhombus / diamond shape */}
      <path
        d="M100 10 L180 100 L100 190 L20 100 Z"
        fill={fill}
        stroke={stroke}
        strokeWidth="1.5"
      />
      {/* Inner facets for depth */}
      <path
        d="M100 10 L100 190"
        stroke="rgba(255,255,255,0.2)"
        strokeWidth="0.5"
      />
      <path
        d="M20 100 L180 100"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="0.5"
      />
      <path
        d="M100 10 L60 60 L100 100 L140 60 Z"
        fill="rgba(255,255,255,0.08)"
      />
      {variant === "gold" && (
        <path
          d="M100 100 L100 190 L140 140 Z"
          fill="rgba(0,0,0,0.15)"
        />
      )}
    </svg>
  );
}
