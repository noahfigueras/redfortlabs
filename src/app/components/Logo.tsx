"use client";

interface LogoProps {
  className?: string;
  size?: number;
}

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Castle/Fort silhouette in red */}
      <defs>
        <linearGradient id="fortGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#dc2626" />
          <stop offset="50%" stopColor="#b91c1c" />
          <stop offset="100%" stopColor="#991b1b" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Main castle body */}
      <path
        d="M50 5 L55 15 L65 12 L65 25 L75 22 L75 40 L85 38 L85 95 L15 95 L15 38 L25 40 L25 22 L35 25 L35 12 L45 15 Z"
        fill="url(#fortGradient)"
        filter="url(#glow)"
      />
      
      {/* Castle battlements details */}
      <rect x="20" y="42" width="8" height="8" fill="#0a0a0a" />
      <rect x="46" y="42" width="8" height="8" fill="#0a0a0a" />
      <rect x="72" y="42" width="8" height="8" fill="#0a0a0a" />
      
      {/* Gate/door */}
      <path
        d="M40 95 L40 70 Q50 60 60 70 L60 95 Z"
        fill="#0a0a0a"
      />
      
      {/* Windows */}
      <rect x="28" y="55" width="6" height="10" rx="3" fill="#0a0a0a" />
      <rect x="47" y="20" width="6" height="10" rx="3" fill="#0a0a0a" />
      <rect x="66" y="55" width="6" height="10" rx="3" fill="#0a0a0a" />
      
      {/* Shield overlay */}
      <path
        d="M50 85 Q50 90 50 90 Q65 85 70 75 L70 65 L50 70 L30 65 L30 75 Q35 85 50 90"
        fill="#dc2626"
        opacity="0.9"
      />
    </svg>
  );
}

export function LogoWithText({ className = "", iconSize = 40 }: LogoProps & { iconSize?: number }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <Logo size={iconSize} />
      <div className="flex flex-col">
        <span className="text-xl font-bold tracking-tight text-white">
          Red<span className="text-[#dc2626]">Fort</span>Labs
        </span>
        <span className="text-xs text-gray-400 tracking-widest uppercase">
          Secure by Design
        </span>
      </div>
    </div>
  );
}