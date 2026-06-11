import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { profile } from "@/content/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Abhijeet Gupta" },
      {
        name: "description",
        content: "Get in touch with Abhijeet Gupta — email, GitHub, LinkedIn, and resumes.",
      },
      { property: "og:title", content: "Contact — Abhijeet Gupta" },
      {
        property: "og:description",
        content: "Get in touch — email, GitHub, LinkedIn.",
      },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const channels = [
    { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { label: "GitHub", value: "github.com/02061997", href: profile.links.github },
    { label: "LinkedIn", value: "linkedin.com/in/abhijeetgupta02", href: profile.links.linkedin },
  ];

  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Contact</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Say hello.
        </h1>
        <p className="mt-4 max-w-xl text-lg text-muted-foreground">
          Happy to hear about research collaborations, ML / AI engineering roles, quantitative
          research opportunities, or a good paper recommendation. The fastest way to reach me is{" "}
          <a className="text-primary hover:underline" href={`mailto:${profile.email}`}>
            email
          </a>
          .
        </p>

        <ul className="mt-12 divide-y divide-border border-y border-border">
          {channels.map((c) => (
            <li key={c.label} className="grid grid-cols-12 items-center py-5">
              <span className="col-span-4 font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {c.label}
              </span>
              <a
                href={c.href}
                className="col-span-8 font-display text-lg text-foreground hover:text-primary"
              >
                {c.value} <span aria-hidden>↗</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Resumes</p>
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
      </section>
    </SiteShell>
  );
}
