"use client";

interface LogoProps {
  className?: string;
  size?: number;
  showText?: boolean;
}

export function Logo({ className = "", size = 32, showText = true }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="shrink-0"
      >
        {/* Background */}
        <rect width="64" height="64" rx="14" fill="#E23D28" />
        
        {/* Inner glow effect */}
        <rect
          x="4"
          y="4"
          width="56"
          height="56"
          rx="8"
          fill="url(#logoGradient)"
          opacity="0.3"
        />
        
        {/* P Letter with stylized design */}
        <path
          d="M22 16H38C44.6274 16 50 21.3726 50 28C50 34.6274 44.6274 40 38 40H30V52H22V16Z"
          fill="#FAF9F6"
        />
        
        {/* Inner cutout for the P */}
        <path
          d="M30 24H36C38.2091 24 40 25.7909 40 28C40 30.2091 38.2091 32 36 32H30V24Z"
          fill="#E23D28"
        />
        
        {/* Accent line */}
        <rect x="22" y="52" width="20" height="4" rx="2" fill="#FAF9F6" opacity="0.6" />
        
        <defs>
          <linearGradient id="logoGradient" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#FAF9F6" stopOpacity="0.2" />
            <stop offset="1" stopColor="#FAF9F6" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      {/* Wordmark */}
      {showText && (
        <span className="text-paper font-medium tracking-tight">
          <span className="font-[family-name:var(--font-playfair)]">Polymaster</span>
          <span className="text-vermillion font-[family-name:var(--font-playfair)]">Labs</span>
        </span>
      )}
    </div>
  );
}

// Minimal logo for small sizes (favicon, app icon)
export function LogoMark({ size = 32, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="64" height="64" rx="14" fill="#E23D28" />
      <path
        d="M20 14H38C45.732 14 52 20.268 52 28C52 35.732 45.732 42 38 42H28V50H20V14Z"
        fill="#FAF9F6"
      />
      <path
        d="M28 22H36C38.7614 22 41 24.2386 41 27C41 29.7614 38.7614 32 36 32H28V22Z"
        fill="#E23D28"
      />
    </svg>
  );
}



