import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { profile, skills, publications } from "@/content/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Abhijeet Gupta" },
      {
        name: "description",
        content:
          "About Abhijeet Gupta — CS PhD candidate at the University of Dayton researching LLM evaluation, reinforcement learning, and computer vision.",
      },
      { property: "og:title", content: "About — Abhijeet Gupta" },
      {
        property: "og:description",
        content: "PhD candidate at the University of Dayton.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">About</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          A little context.
        </h1>
        <div className="mt-10 space-y-6 text-lg leading-relaxed text-muted-foreground">
          {profile.longBio.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        <div className="mt-16 space-y-10">
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Skills</p>
            <div className="mt-6 space-y-6">
              {Object.entries(skills).map(([group, items]) => (
                <div key={group}>
                  <h3 className="font-display text-sm font-semibold text-foreground">{group}</h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {items.map((s) => (
                      <span
                        key={s}
                        className="rounded-full border border-border bg-surface px-3 py-1.5 text-sm text-foreground"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
              Publications
            </p>
            <ul className="mt-4 space-y-3">
              {publications.map((p) => (
                <li key={p.title} className="rounded-xl border border-border bg-surface/40 p-4">
                  <p className="font-display text-base text-foreground">“{p.title}”</p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {p.venue} · {p.year}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Resume</p>
            <div className="mt-4 flex flex-wrap gap-3">
              {profile.resumes.map((r) => (
                <a
                  key={r.href}
                  href={r.href}
                  className="rounded-full border border-border bg-surface px-4 py-2 text-sm hover:bg-surface-elevated"
                >
                  {r.label} ↓
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
