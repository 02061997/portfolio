import { profile } from "@/content/site-data";

/**
 * Portrait monogram inside concentric orbit rings with an animated
 * loss/price curve sweeping behind it. Pure SVG + CSS — no JS, no deps.
 */
export function HeroOrbit() {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[420px]">
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" aria-hidden>
        {/* Concentric orbit rings */}
        {[195, 165, 130, 95].map((r, i) => (
          <circle
            key={r}
            cx="200"
            cy="200"
            r={r}
            fill="none"
            stroke="color-mix(in oklab, var(--primary) 35%, transparent)"
            strokeWidth={i === 0 ? 1.2 : 0.6}
            strokeDasharray={i % 2 === 0 ? "2 4" : "0"}
            opacity={0.7 - i * 0.12}
          />
        ))}

        {/* Animated loss/price curve */}
        <path
          d="M 10 280 C 60 270, 90 220, 130 240 S 200 320, 240 200 S 320 80, 390 110"
          fill="none"
          stroke="var(--primary)"
          strokeWidth="1.6"
          strokeLinecap="round"
          className="hero-curve"
        />

        {/* Marker dots on the curve */}
        <circle cx="130" cy="240" r="3" fill="var(--primary)" opacity="0.8" />
        <circle cx="240" cy="200" r="3" fill="var(--primary)" opacity="0.8" />
        <circle cx="390" cy="110" r="4" fill="var(--primary)" />

        {/* Tick marks (axis crosshair feel) */}
        <line
          x1="200"
          y1="10"
          x2="200"
          y2="22"
          stroke="color-mix(in oklab, var(--primary) 50%, transparent)"
          strokeWidth="1"
        />
        <line
          x1="200"
          y1="378"
          x2="200"
          y2="390"
          stroke="color-mix(in oklab, var(--primary) 50%, transparent)"
          strokeWidth="1"
        />
        <line
          x1="10"
          y1="200"
          x2="22"
          y2="200"
          stroke="color-mix(in oklab, var(--primary) 50%, transparent)"
          strokeWidth="1"
        />
        <line
          x1="378"
          y1="200"
          x2="390"
          y2="200"
          stroke="color-mix(in oklab, var(--primary) 50%, transparent)"
          strokeWidth="1"
        />
      </svg>

      {/* Portrait monogram */}
      <div className="absolute left-1/2 top-1/2 flex h-[180px] w-[180px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-surface-elevated shadow-[0_0_60px_-10px_color-mix(in_oklab,var(--primary)_60%,transparent)]">
        <span className="font-display text-5xl font-semibold tracking-tight text-foreground">
          {initials}
        </span>
      </div>

      {/* Corner caption */}
      <p className="absolute bottom-2 left-2 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        signal · t = now
      </p>
      <p className="absolute right-2 top-2 font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
        α = 0.07
      </p>
    </div>
  );
}
