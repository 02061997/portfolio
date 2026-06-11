import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { HeroOrbit } from "@/components/hero-orbit";
import { Ticker } from "@/components/ticker";
import { ProjectExplorer } from "@/components/project-explorer";

import { profile, projects, posts, publications } from "@/content/site-data";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abhijeet Gupta — ML Engineer & Quant Researcher" },
      {
        name: "description",
        content:
          "PhD candidate at the University of Dayton building reliable learning systems and systematic strategies — LLM evaluation, reinforcement learning, options pricing, and statistical arbitrage.",
      },
      { property: "og:title", content: "Abhijeet Gupta — ML & Quant" },
      { property: "og:description", content: profile.shortBio },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  const mlFeatured = projects.filter((p) => p.category === "ML / AI").slice(0, 2);
  const quantFeatured = projects.filter((p) => p.category === "Quant").slice(0, 2);
  const latestPub = publications[0];

  return (
    <SiteShell>
      {/* ───────────── HERO ───────────── */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "radial-gradient(55% 60% at 80% 10%, color-mix(in oklab, var(--primary) 28%, transparent), transparent 70%), radial-gradient(40% 50% at 10% 90%, color-mix(in oklab, var(--primary) 18%, transparent), transparent 70%)",
          }}
        />
        {/* Subtle grid */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(to right, var(--foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--foreground) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-12 md:gap-10 md:py-28">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.22em] text-primary">
              <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
              <span>PhD · {profile.affiliation}</span>
            </div>

            <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-[5.5rem]">
              {profile.name}
              <span className="text-primary">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              ML engineer &amp; quantitative researcher — building{" "}
              <span className="text-foreground">reliable learning systems</span> and{" "}
              <span className="text-foreground">systematic strategies</span>.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                to="/projects"
                className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                See selected work
              </Link>
              {profile.resumes.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="rounded-full border border-border bg-surface/60 px-4 py-2 text-xs font-medium text-foreground transition-colors hover:bg-surface-elevated"
                >
                  {r.label.replace("Resume — ", "")} résumé ↓
                </a>
              ))}
            </div>

            {/* Featured-in style credential bar */}
            <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-border/60 pt-6 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="text-foreground/60">Published in</span>
              <span>KSE 2024</span>
              <span>CISS 2025</span>
              <span>ASME 2026</span>
            </div>
          </div>

          <div className="md:col-span-5">
            <HeroOrbit />
          </div>
        </div>
      </section>

      {/* ───────────── TICKER ───────────── */}
      <Ticker />

      {/* ───────────── TWO-TRACK PROJECTS ───────────── */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <header className="mb-12 flex items-end justify-between gap-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Two tracks · one operator
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Research &amp; markets.
            </h2>
          </div>
          <Link
            to="/projects"
            className="hidden text-sm text-muted-foreground hover:text-foreground md:inline"
          >
            All projects →
          </Link>
        </header>

        <div className="grid gap-6 md:grid-cols-2">
          <TrackPanel
            label="ML / AI Research"
            blurb="LLM evaluation, RL robustness, and computer vision pipelines on multi-GPU HPC."
            items={mlFeatured}
            accent="primary"
          />
          <TrackPanel
            label="Quantitative Research"
            blurb="Options pricing, GARCH volatility, and market-neutral statistical arbitrage."
            items={quantFeatured}
            accent="quant"
          />
        </div>
      </section>

      {/* ───────────── NOW + LATEST PUBLICATION ───────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-6 px-6 py-20 md:grid-cols-12">
          <article className="rounded-2xl border border-border bg-surface/60 p-8 md:col-span-5">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">/now</p>
            <h3 className="mt-3 font-display text-2xl font-semibold tracking-tight">
              Currently in the lab.
            </h3>
            <ul className="mt-6 space-y-4 text-sm">
              <Row k="Researching" v="Reasoning-model failure modes (7B – 70B)" />
              <Row k="Stack" v="PyTorch · Slurm · 4× GH200" />
              <Row k="Side bench" v="GARCH(1,1) on SPY, walk-forward" />
              <Row k="Based in" v={profile.location} />
              <Row
                k="Email"
                v={
                  <a className="text-primary hover:underline" href={`mailto:${profile.email}`}>
                    {profile.email}
                  </a>
                }
              />
            </ul>
          </article>

          <article className="relative overflow-hidden rounded-2xl border border-border bg-surface p-8 md:col-span-7">
            <div
              aria-hidden
              className="absolute -right-16 -top-16 h-56 w-56 rounded-full opacity-40 blur-3xl"
              style={{ background: "var(--primary)" }}
            />
            <p className="relative font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
              Latest publication
            </p>
            <h3 className="relative mt-3 font-display text-2xl font-semibold leading-tight tracking-tight md:text-3xl">
              “{latestPub.title}”
            </h3>
            <p className="relative mt-4 text-sm text-muted-foreground">
              {latestPub.venue} · {latestPub.year}
            </p>
            <Link
              to="/about"
              className="relative mt-8 inline-block text-sm text-primary hover:underline"
            >
              See all publications →
            </Link>
          </article>
        </div>
      </section>

      {/* ───────────── INTERACTIVE: PROJECT EXPLORER ───────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <header className="mb-10">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Explore the work
            </p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight md:text-4xl">
              Hiring? Click a skill.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Every project I've shipped, tagged with the stack behind it. Tap a skill to see
              exactly where I've used it.
            </p>
          </header>
          <ProjectExplorer />
        </div>
      </section>

      {/* ───────────── WRITING ───────────── */}

      <section className="border-t border-border/60">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-20 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Writing</p>
            <h2 className="mt-2 font-display text-3xl font-semibold tracking-tight">
              Notes &amp; essays.
            </h2>
            <p className="mt-4 text-muted-foreground">
              Occasional writing on research, tools, and learning in public.
            </p>
            <Link to="/writing" className="mt-6 inline-block text-sm text-primary hover:underline">
              All writing →
            </Link>
          </div>
          <ul className="space-y-4 md:col-span-8">
            {posts.map((post) => (
              <li
                key={post.slug}
                className="group rounded-xl border border-border bg-surface/40 p-6 transition-colors hover:bg-surface"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                  {formatDate(post.date)}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold tracking-tight">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{post.excerpt}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ───────────── FOOTER CTA ───────────── */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Let's talk</p>
          <h2 className="mx-auto mt-4 max-w-3xl font-display text-4xl font-semibold leading-tight tracking-tight md:text-6xl">
            Working on something at the intersection of ML and markets?
          </h2>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
            >
              {profile.email}
            </a>
            <a
              href={profile.links.linkedin}
              className="rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-surface-elevated"
            >
              LinkedIn ↗
            </a>
            <a
              href={profile.links.github}
              className="rounded-full border border-border bg-surface px-5 py-3 text-sm font-medium hover:bg-surface-elevated"
            >
              GitHub ↗
            </a>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

/* ───────────── helpers ───────────── */

function Row({ k, v }: { k: string; v: React.ReactNode }) {
  return (
    <li className="flex items-baseline justify-between gap-4 border-b border-border/40 pb-3">
      <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
        {k}
      </span>
      <span className="text-right text-foreground">{v}</span>
    </li>
  );
}

function TrackPanel({
  label,
  blurb,
  items,
  accent,
}: {
  label: string;
  blurb: string;
  items: readonly (typeof projects)[number][];
  accent: "primary" | "quant";
}) {
  const tone = accent === "primary" ? "text-primary" : "text-[color:var(--accent-quant)]";
  const dot = accent === "primary" ? "bg-primary" : "bg-[color:var(--accent-quant)]";

  return (
    <div className="rounded-2xl border border-border bg-surface/40 p-8">
      <div className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.18em]">
        <span className={`inline-block h-1.5 w-1.5 rounded-full ${dot}`} />
        <span className={tone}>{label}</span>
      </div>
      <p className="mt-4 text-muted-foreground">{blurb}</p>
      <ul className="mt-8 divide-y divide-border/60">
        {items.map((p) => (
          <li key={p.slug} className="py-4">
            <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              {p.year}
            </p>
            <h4 className="mt-1 font-display text-lg font-semibold leading-snug tracking-tight">
              {p.title}
            </h4>
          </li>
        ))}
      </ul>
      <Link
        to="/projects"
        className="mt-4 inline-block text-sm text-muted-foreground hover:text-foreground"
      >
        More →
      </Link>
    </div>
  );
}
