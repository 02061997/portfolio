# Verified Research Portfolio

This page ranks the strongest public repositories by role fit and evidence
quality. Resume PDFs are intentionally not posted publicly.

| Rank | Role fit | Repository | Evidence | Boundary |
|---:|---|---|---|---|
| 1 | ML/AI Research | [reasoning-model-failure-analysis-companion](https://github.com/02061997/reasoning-model-failure-analysis-companion) | Synthetic forced-reconsideration LLM evaluation with Goal Betrayal / Partial Undo metrics, figures, bootstrap intervals, and sanitizer checks. | Private prompts, raw model outputs, submission artifacts, and restricted logs remain private. |
| 2 | ML/AI Research | [ai-for-construction-safety](https://github.com/02061997/ai-for-construction-safety) | GROVE evidence package with ablations, paired tests, threshold sensitivity, and claim traceability. | Source images, raw private inference runs, model weights, and coauthor-only material are not redistributed. |
| 3 | LLM Evaluation / RL | [adversarial-rl-feature-selection](https://github.com/02061997/adversarial-rl-feature-selection) | Paper-faithful imposter-injection reconstruction with deterministic trajectory fixtures and explicit ranking-gap diagnostics. | Original PPO/ARS trained policies and trajectories are unavailable. |
| 4 | Computer Vision | [mouse-brain-cell-segmentation](https://github.com/02061997/mouse-brain-cell-segmentation) | COCO-style six-class segmentation companion with metric primitives and qualitative overlays. | Private 1,050-image mouse-brain dataset and trained checkpoints are not redistributed. |
| 5 | Quantitative Research | [options-pricing-and-greeks](https://github.com/02061997/options-pricing-and-greeks) | Black-Scholes, Greeks, Monte Carlo variance reduction, parity, bounds, and IV-surface recovery. | Uses deterministic analytical scenarios and seeded simulation, not private/live market data. |
| 6 | Quantitative Research | [garch-volatility-modeling](https://github.com/02061997/garch-volatility-modeling) | Walk-forward one-day volatility forecasts with GARCH, EWMA, rolling baselines, diagnostics, and regimes. | Uses frozen Yahoo Finance adjusted-close snapshots; no investment recommendation is implied. |

## Verification Commands

Each repository supports the same verification pattern:

```bash
uv sync --frozen
make test
make reproduce-smoke
```

The reasoning companion also supports:

```bash
make audit-sanitize
```

The public website contains a rendered version of this ranking at
`/verified-research`.
