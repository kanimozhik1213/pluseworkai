export default function Logo({ size = 38 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 64 64" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="logoBg" x1="0" y1="0" x2="64" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#6a1238" />
          <stop offset="1" stopColor="#b8386d" />
        </linearGradient>
        <filter id="logoGlow" x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="1.2" />
        </filter>
      </defs>

      <rect width="64" height="64" rx="16" fill="url(#logoBg)" />

      <g stroke="#fbeaf2" strokeWidth="2.2" strokeLinecap="round">
        <path d="M32 36 L14 16" />
        <path d="M32 36 L32 11" />
        <path d="M32 36 L51 17" />
        <path d="M32 36 L53 40" />
        <path d="M32 36 L41 55" />
        <path d="M32 36 L15 47" />
        <path d="M53 40 L58 28" />
        <path d="M14 16 L7 22" />
      </g>

      <g fill="#fbeaf2">
        <circle cx="14" cy="16" r="4" />
        <circle cx="32" cy="11" r="3.5" />
        <circle cx="51" cy="17" r="4" />
        <circle cx="53" cy="40" r="3.5" />
        <circle cx="41" cy="55" r="3.5" />
        <circle cx="15" cy="47" r="4" />
        <circle cx="58" cy="28" r="2.5" />
        <circle cx="7" cy="22" r="2.5" />
      </g>

      <circle cx="32" cy="36" r="9" fill="#ff4d9d" opacity="0.55" filter="url(#logoGlow)" />
      <circle cx="32" cy="36" r="6.5" fill="#fff" />
    </svg>
  );
}