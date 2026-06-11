import { useMemo, useState } from "react";
import { projects } from "@/content/site-data";

/**
 * Project Explorer — click any tech tag to filter projects in real time.
 * Built for recruiters: non-technical see a responsive, polished surface;
 * technical can answer "have they shipped X?" in one click.
 */

const ALL = "All";

export function ProjectExplorer() {
  // Unique tags, ordered by frequency (most-used first → best signal)
  const tags = useMemo(() => {
    const freq = new Map<string, number>();
    for (const p of projects) for (const t of p.tags) freq.set(t, (freq.get(t) ?? 0) + 1);
    return [...freq.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .map(([t]) => t);
  }, []);

  const [active, setActive] = useState<string>(ALL);
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered = active === ALL ? projects : projects.filter((p) => p.tags.includes(active));

  return (
    <div className="rounded-2xl border border-border bg-surface/60 p-6 md:p-8">
      {/* Header + counter */}
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
            Project explorer · interactive
          </p>
          <h3 className="mt-2 font-display text-2xl font-semibold tracking-tight">
            Click a skill — see what I've built with it.
          </h3>
        </div>
        <div className="text-right font-mono text-xs">
          <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            Showing
          </div>
          <div className="mt-1 font-display text-xl font-semibold tracking-tight text-primary tabular-nums">
            {filtered.length}
            <span className="text-muted-foreground"> / {projects.length}</span>
          </div>
        </div>
      </div>

      {/* Tag chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        <Chip
          label={ALL}
          count={projects.length}
          active={active === ALL}
          onClick={() => setActive(ALL)}
        />
        {tags.map((t) => {
          const count = projects.filter((p) => p.tags.includes(t)).length;
          return (
            <Chip
              key={t}
              label={t}
              count={count}
              active={active === t}
              onClick={() => setActive(active === t ? ALL : t)}
            />
          );
        })}
      </div>

      {/* Project grid */}
      <ul className="mt-8 grid gap-3 md:grid-cols-2">
        {projects.map((p) => {
          const matches = active === ALL || p.tags.includes(active);
          return (
            <li
              key={p.slug}
              onMouseEnter={() => setHovered(p.slug)}
              onMouseLeave={() => setHovered(null)}
              className={
                "group rounded-xl border bg-background/40 p-5 transition-all duration-300 " +
                (matches ? "border-border opacity-100" : "border-border/40 opacity-25 saturate-0")
              }
            >
              <div className="flex items-center justify-between gap-2">
                <span
                  className={
                    "font-mono text-[10px] uppercase tracking-[0.18em] " +
                    (p.category === "ML / AI" ? "text-primary" : "text-[color:var(--accent-quant)]")
                  }
                >
                  {p.category}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {p.year}
                </span>
              </div>
              <h4 className="mt-2 font-display text-base font-semibold leading-snug tracking-tight">
                {p.title}
              </h4>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => {
                  const isActive = t === active;
                  const isHoverHighlight = hovered === p.slug;
                  return (
                    <span
                      key={t}
                      className={
                        "rounded-full border px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.12em] transition-colors " +
                        (isActive
                          ? "border-primary/60 bg-primary/15 text-primary"
                          : isHoverHighlight
                            ? "border-border bg-surface text-foreground"
                            : "border-border/60 text-muted-foreground")
                      }
                    >
                      {t}
                    </span>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-6 font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {tags.length} skills · {projects.length} projects · click to filter
      </p>
    </div>
  );
}

function Chip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        "group inline-flex items-center gap-1.5 rounded-full border px-3 py-1.5 font-mono text-[11px] uppercase tracking-[0.14em] transition-all " +
        (active
          ? "border-primary bg-primary text-primary-foreground shadow-[0_0_20px_-4px_color-mix(in_oklab,var(--primary)_70%,transparent)]"
          : "border-border bg-background/40 text-muted-foreground hover:border-primary/50 hover:text-foreground")
      }
    >
      <span>{label}</span>
      <span
        className={
          "rounded-full px-1.5 text-[9px] tabular-nums " +
          (active ? "bg-primary-foreground/20" : "bg-surface text-foreground/70")
        }
      >
        {count}
      </span>
    </button>
  );
}
