import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";
import { posts } from "@/content/site-data";
import { formatDate } from "@/lib/format";

export const Route = createFileRoute("/writing")({
  head: () => ({
    meta: [
      { title: "Writing — Abhijeet Gupta" },
      {
        name: "description",
        content: "Essays and notes by Abhijeet Gupta on research, tools, and learning in public.",
      },
      { property: "og:title", content: "Writing — Abhijeet Gupta" },
      {
        property: "og:description",
        content: "Essays and notes on research, tools, and learning.",
      },
      { property: "og:url", content: "/writing" },
    ],
    links: [{ rel: "canonical", href: "/writing" }],
  }),
  component: Writing,
});

function Writing() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-3xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">Writing</p>
        <h1 className="mt-3 font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Notes & essays.
        </h1>
        <p className="mt-4 text-muted-foreground">
          A slow-growing collection. New posts arrive when I have something worth saying.
        </p>

        <ul className="mt-12 space-y-6">
          {posts.map((post) => (
            <li
              key={post.slug}
              className="rounded-2xl border border-border bg-surface/60 p-6 transition-colors hover:bg-surface"
            >
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                {formatDate(post.date)}
              </p>

              <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                {post.title}
              </h2>
              <p className="mt-2 text-muted-foreground">{post.excerpt}</p>
            </li>
          ))}
        </ul>
      </section>
    </SiteShell>
  );
}
