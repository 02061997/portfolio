import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { projects, type Project } from "@/content/site-data";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Abhijeet Gupta" },
      {
        name: "description",
        content:
          "Selected ML / AI research and quantitative finance projects by Abhijeet Gupta — LLM evaluation, adversarial RL, options pricing, GARCH, pairs trading.",
      },
      { property: "og:title", content: "Projects — Abhijeet Gupta" },
      {
        property: "og:description",
        content: "ML / AI research and quantitative projects.",
      },
      { property: "og:url", content: "/projects" },
    ],
    links: [{ rel: "canonical", href: "/projects" }],
  }),
  component: Projects,
});

function ProjectList({ items }: { items: readonly Project[] }) {
  return (
    <ul className="divide-y divide-border border-y border-border">
      {items.map((p) => (
        <li key={p.slug} className="group grid gap-4 py-8 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.18em] text-muted-foreground">
              {p.year}
            </p>
          </div>
          <div className="md:col-span-9">
            <h3 className="font-display text-2xl font-semibold tracking-tight">
              {p.link ? (
                <a href={p.link} className="hover:text-primary">
                  {p.title} <span aria-hidden>↗</span>
                </a>
              ) : (
                p.title
              )}
            </h3>
            <p className="mt-2 max-w-2xl text-muted-foreground">{p.summary}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-border px-2.5 py-1 text-xs text-muted-foreground"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}

function Projects() {
  const mlProjects = projects.filter((p) => p.category === "ML / AI");
  const quantProjects = projects.filter((p) => p.category === "Quant");

  return (
    <SiteShell>
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Projects</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Selected work.
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          Research, publications, and side projects across ML / AI and quantitative finance.
        </p>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight">ML / AI Research</h2>
          <div className="mt-6">
            <ProjectList items={mlProjects} />
          </div>
        </div>

        <div className="mt-16">
          <h2 className="font-display text-2xl font-semibold tracking-tight">
            Quantitative Research
          </h2>
          <div className="mt-6">
            <ProjectList items={quantProjects} />
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
