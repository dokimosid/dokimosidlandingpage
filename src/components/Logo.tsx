interface LogoProps {
  /** 'dark' = for light backgrounds (default). 'light' = for Pine/Ink backgrounds. */
  variant?:   'dark' | 'light'
  className?: string
}

export default function Logo({ variant = 'dark', className = 'h-10 w-auto' }: LogoProps) {
  const onDark = variant === 'light'

  const shieldFill  = onDark ? '#F4F1EA' : '#15564A'
  const checkStroke = onDark ? '#15564A' : '#F4F1EA'
  const eyebrow     = onDark ? '#F4F1EA' : '#15564A'
  const eyebrowOp   = onDark ? '0.6'     : '0.7'
  const wordmark    = onDark ? '#F4F1EA' : '#1A1813'
  const accent      = onDark ? '#F4F1EA' : '#15564A'

  return (
    <svg
      viewBox="0 0 280 60"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      className={className}
    >
      <title>Dokimos ID — a product of Fortress Reclaimed LLC</title>

      {/* Shield mark */}
      <path
        d="M24 2 L46 9 L46 26 C46 40 36 49 24 54 C12 49 2 40 2 26 L2 9 Z"
        fill={shieldFill}
      />
      <path
        d="M12 27 L20 37 L36 19"
        stroke={checkStroke}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Eyebrow: parent company */}
      <text
        x="58"
        y="18"
        fontFamily="'Helvetica Neue', Helvetica, Arial, sans-serif"
        fontSize="8.5"
        fontWeight="400"
        fill={eyebrow}
        opacity={eyebrowOp}
        letterSpacing="2.8"
      >
        FORTRESS RECLAIMED LLC
      </text>

      {/* Product name */}
      <text
        x="57"
        y="46"
        fontFamily="Georgia, 'Times New Roman', serif"
        fontSize="28"
        fontWeight="400"
        fill={wordmark}
        letterSpacing="-0.5"
      >
        Dokimos <tspan fill={accent} fontStyle="italic">ID</tspan>
      </text>
    </svg>
  )
}
