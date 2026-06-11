type TickerItem = { label: string; value: string };

const ITEMS: readonly TickerItem[] = [
  { label: "LLM-EVAL", value: "6 models · 7B–70B" },
  { label: "ADV-RL", value: "94% acc · KSE'24" },
  { label: "PAIRS", value: "AAPL-MSFT · Sharpe 1.8" },
  { label: "GARCH(1,1)", value: "SPY · σ̂ live" },
  { label: "OPTIONS", value: "MC · 100k paths" },
  { label: "CV", value: "CISS'25 ×2" },
  { label: "PUBS", value: "4 peer-reviewed" },
  { label: "STACK", value: "PyTorch · Slurm · 4×GH200" },
];

export function Ticker() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="border-y border-border/60 bg-surface/40">
      <div className="ticker-mask relative overflow-hidden py-3">
        <div className="ticker-track flex gap-10 whitespace-nowrap">
          {row.map((item, i) => (
            <div
              key={`${item.label}-${i}`}
              className="flex shrink-0 items-center gap-3 font-mono text-xs"
            >
              <span className="text-primary">▲</span>
              <span className="uppercase tracking-[0.18em] text-muted-foreground">
                {item.label}
              </span>
              <span className="text-foreground">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
