import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { experience } from "@/content/site-data";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Abhijeet Gupta" },
      {
        name: "description",
        content:
          "Education and professional experience of Abhijeet Gupta, CS PhD candidate at the University of Dayton — Walmart, Kitestring, Dayton Phoenix Group, mindZcloud.",
      },
      { property: "og:title", content: "Experience — Abhijeet Gupta" },
      {
        property: "og:description",
        content: "Education and professional experience timeline.",
      },
      { property: "og:url", content: "/experience" },
    ],
    links: [{ rel: "canonical", href: "/experience" }],
  }),
  component: Experience,
});

function Experience() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Experience</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          A short timeline.
        </h1>

        <ol className="mt-12 space-y-10 border-l border-border pl-6">
          {experience.map((item, i) => (
            <li key={i} className="relative">
              <span
                aria-hidden
                className="absolute -left-[31px] top-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary"
              />
              <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {item.period} · {item.kind}
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold tracking-tight">
                {item.role}
              </h2>
              <p className="text-sm text-primary">
                {item.org}
                {item.location ? ` · ${item.location}` : ""}
              </p>
              <ul className="mt-3 space-y-2 text-muted-foreground">
                {item.bullets.map((b, j) => (
                  <li key={j} className="flex gap-3">
                    <span aria-hidden className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>
    </SiteShell>
  );
}
