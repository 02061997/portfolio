import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site-layout";

export const Route = createFileRoute("/verified-research")({
  head: () => ({
    meta: [
      { title: "Verified Research Portfolio — Abhijeet Gupta" },
      {
        name: "description",
        content:
          "Evidence-ranked ML, AI, computer-vision, and quantitative research projects with verification commands and public/private data boundaries.",
      },
      { property: "og:title", content: "Verified Research Portfolio — Abhijeet Gupta" },
      {
        property: "og:description",
        content: "Role-fit ranking of verified public research repositories.",
      },
      { property: "og:url", content: "/verified-research" },
    ],
    links: [{ rel: "canonical", href: "/verified-research" }],
  }),
  component: VerifiedResearch,
});

type EvidenceProject = {
  role: string;
  title: string;
  repo: string;
  evidence: string;
  result: string;
  boundary: string;
  verify: string;
};

const projects: readonly EvidenceProject[] = [
  {
    role: "ML/AI Research",
    title: "Reasoning Model Failure Analysis Companion",
    repo: "https://github.com/abhijeetgupta02/reasoning-model-failure-analysis-companion",
    evidence: "Synthetic public companion for forced-reconsideration LLM evaluation.",
    result:
      "Goal Betrayal / Partial Undo metrics, bootstrap intervals, figures, and sanitizer checks regenerate from committed code.",
    boundary:
      "Private prompts, raw model outputs, submission artifacts, and restricted logs remain private.",
    verify: "uv sync --frozen && make test && make reproduce-smoke && make audit-sanitize",
  },
  {
    role: "ML/AI Research",
    title: "AI for Construction Safety",
    repo: "https://github.com/abhijeetgupta02/ai-for-construction-safety",
    evidence:
      "GROVE evidence package with ablations, paired tests, threshold sensitivity, and claim traceability.",
    result:
      "Identification F1 0.7591 versus best evaluated single-pass baseline F1 0.5558; paired difference +0.2047.",
    boundary:
      "Source images, raw private inference runs, model weights, and coauthor-only material are not redistributed.",
    verify: "uv sync --frozen && make test && make reproduce-smoke",
  },
  {
    role: "LLM Evaluation / RL",
    title: "Adversarial RL Feature Selection",
    repo: "https://github.com/abhijeetgupta02/adversarial-rl-feature-selection",
    evidence:
      "Paper-faithful reconstruction of imposter injection, feature descriptors, gates, and detector families.",
    result:
      "Local deterministic fixtures reach 0.9831 Lunar Lander accuracy and 0.9429 Bipedal Walker accuracy, with ranking gaps marked explicitly.",
    boundary:
      "Original PPO/ARS trained policies and trajectories are unavailable; public runs use deterministic fixtures.",
    verify: "uv sync --frozen && make test && make reproduce-smoke",
  },
  {
    role: "Computer Vision",
    title: "Mouse Brain Cell Segmentation",
    repo: "https://github.com/abhijeetgupta02/mouse-brain-cell-segmentation",
    evidence:
      "COCO-style six-class segmentation companion with metric primitives and qualitative overlays.",
    result:
      "Synthetic fixture AP 42.18, AP50 50.64, and AR100 41.42; BBBC038v1 is documented as a future public extension.",
    boundary:
      "Private 1,050-image mouse-brain dataset and trained checkpoints are not redistributed.",
    verify: "uv sync --frozen && make test && make reproduce-smoke",
  },
  {
    role: "Quantitative Research",
    title: "Options Pricing and Greeks",
    repo: "https://github.com/abhijeetgupta02/options-pricing-and-greeks",
    evidence:
      "Validated Black-Scholes, Greeks, Monte Carlo variance reduction, parity, bounds, and IV-surface recovery.",
    result:
      "250,000-path antithetic-control run has 0.016099 largest-path absolute error; IV-surface error stays below 1.820e-12.",
    boundary:
      "Uses deterministic analytical scenarios and seeded simulation, not private or live market data.",
    verify: "uv sync --frozen && make test && make reproduce-smoke",
  },
  {
    role: "Quantitative Research",
    title: "GARCH Volatility Modeling",
    repo: "https://github.com/abhijeetgupta02/garch-volatility-modeling",
    evidence:
      "Walk-forward one-day volatility forecasts with GARCH, EWMA, rolling baselines, diagnostics, and regimes.",
    result: "GARCH wins RMSE on 4/6 symbols and QLIKE on 5/6; EWMA exceptions are stated directly.",
    boundary:
      "Full runs use frozen Yahoo Finance adjusted-close snapshots; no investment recommendation is implied.",
    verify: "uv sync --frozen && make test && make reproduce-smoke",
  },
];

function VerifiedResearch() {
  return (
    <SiteShell>
      <section className="mx-auto max-w-6xl px-6 py-20">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-primary">
          Verified Research Portfolio
        </p>
        <h1 className="mt-3 max-w-4xl font-display text-4xl font-semibold tracking-tight md:text-5xl">
          Evidence-ranked projects for ML/AI research, computer vision, and quantitative roles.
        </h1>
        <p className="mt-4 max-w-3xl text-muted-foreground">
          This page ranks public repositories by role fit and highlights what is verified, what is
          reconstructed, and how each result can be checked locally. Resume PDFs are not posted
          publicly.
        </p>

        <div className="mt-12 grid gap-5">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="rounded-2xl border border-border bg-surface/60 p-6"
            >
              <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-primary">
                    #{index + 1} · {project.role}
                  </p>
                  <h2 className="mt-2 font-display text-2xl font-semibold tracking-tight">
                    <a href={project.repo} className="hover:text-primary">
                      {project.title} <span aria-hidden>↗</span>
                    </a>
                  </h2>
                </div>
                <code className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                  make test
                </code>
              </div>

              <dl className="mt-5 grid gap-4 text-sm md:grid-cols-2">
                <div>
                  <dt className="font-medium text-foreground">Evidence type</dt>
                  <dd className="mt-1 text-muted-foreground">{project.evidence}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Strongest verified result</dt>
                  <dd className="mt-1 text-muted-foreground">{project.result}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Boundary</dt>
                  <dd className="mt-1 text-muted-foreground">{project.boundary}</dd>
                </div>
                <div>
                  <dt className="font-medium text-foreground">Verification command</dt>
                  <dd className="mt-1">
                    <code className="rounded-md bg-muted px-2 py-1 text-xs text-foreground">
                      {project.verify}
                    </code>
                  </dd>
                </div>
              </dl>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}
