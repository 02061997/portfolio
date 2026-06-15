// Single source of truth for site content. Edit values here to update the site.

export const profile = {
  name: "Abhijeet Gupta",
  role: "CS PhD Candidate · ML / AI Engineer",
  affiliation: "University of Dayton",
  location: "Dayton, Ohio",
  shortBio:
    "CS PhD candidate at the University of Dayton working on LLM evaluation, reinforcement learning, and computer vision — with industry experience at Walmart and a sideline in quantitative research.",
  longBio: [
    "I'm a Computer Science PhD candidate at the University of Dayton (2023 – 2027 expected). My research focuses on LLM interpretability and evaluation, reinforcement learning, and computer vision — with an emphasis on controlled experiments, multi-GPU pipelines, and reproducibility protocols.",
    "I've co-authored four peer-reviewed papers in ML, CV, and AI safety, and I lead the lab's KSE 2024 work on entropy-based feature selection for adversarial RL. Day-to-day I run Slurm-based multi-GPU experiments, build evaluation pipelines, and mentor junior researchers.",
    "Before the PhD I worked across industry and research: a Software Engineer role at Walmart Global Tech (via Kitestring) shipping Docker/Kubernetes CI/CD for a Node.js POS app, an ML/Product internship at Walmart in Bentonville (90%-accuracy supply-chain classifier), a Data & Systems Engineering internship at Dayton Phoenix Group, and earlier work at mindZcloud Technologies. I also co-founded GearToCare, a seed-funded on-demand two-wheeler service.",
    "Outside the lab I work on quantitative research projects — options pricing, GARCH volatility, pairs-trading backtests, and LSTM time-series forecasting — and I'm always up for a good paper recommendation.",
  ],
  email: "abhijeetguptaphd@gmail.com",
  links: {
    github: "https://github.com/02061997",
    linkedin: "https://www.linkedin.com/in/abhijeetgupta02",
    scholar: "https://scholar.google.com/citations?user=ViNPVRIAAAAJ&hl=en",
    email: "mailto:abhijeetguptaphd@gmail.com",
  },
  resumeNote:
    "Resume files are not posted publicly. I share a current, role-specific resume directly for aligned opportunities.",
} as const;

export const skills = {
  "ML / AI": [
    "PyTorch",
    "TensorFlow",
    "HuggingFace Transformers",
    "Scikit-learn",
    "OpenAI Gym",
    "OpenCV",
    "MediaPipe",
    "CNNs / LSTMs",
    "Reinforcement Learning",
    "LLM Evaluation",
    "Computer Vision",
  ],
  "Engineering / Infra": [
    "Python",
    "R",
    "SQL",
    "C++",
    "Docker",
    "Kubernetes",
    "Slurm / HPC",
    "Multi-GPU inference",
    "Azure Cosmos DB",
    "CI/CD",
    "Node.js",
  ],
  "Quant / Stats": [
    "Monte Carlo",
    "Black-Scholes",
    "GARCH(1,1)",
    "ARIMA",
    "Cointegration",
    "Walk-forward Validation",
    "Hypothesis Testing",
    "statsmodels",
    "Pandas / NumPy / SciPy",
  ],
} as const;

export type Project = {
  slug: string;
  title: string;
  year: string;
  summary: string;
  tags: readonly string[];
  link?: string;
  featured?: boolean;
  category: "ML / AI" | "Quant";
};

export const projects: readonly Project[] = [
  {
    slug: "reasoning-model-failure-analysis",
    title: "Reasoning Model Failure Analysis — LLM Interpretability",
    year: "Apr 2026",
    summary:
      "Private controlled LLM evaluation pipeline for forced-reconsideration failures in reasoning models. The public companion demonstrates goal-betrayal and partial-undo condition logic, synthetic artifacts, figures, and sanitization boundaries without private prompts or raw model outputs.",
    tags: ["LLM Evaluation", "Interpretability", "Synthetic Companion", "Reproducibility"],
    category: "ML / AI",
    featured: true,
    link: "https://github.com/02061997/reasoning-model-failure-analysis-companion",
  },
  {
    slug: "adversarial-rl-entropy",
    title: "Adversarial Robustness via Entropy-Based Feature Selection in RL",
    year: "KSE 2024 — Published",
    summary:
      "KSE 2024 research on detecting Gaussian and uniform imposter features in Lunar Lander and Bipedal Walker using entropy, joint entropy, and KL divergence. The public reconstruction separates paper-reported PPO/ARS results from deterministic trajectory-fixture results.",
    tags: ["OpenAI Gym", "PyTorch", "RL", "Publication"],
    category: "ML / AI",
    link: "https://github.com/02061997/adversarial-rl-feature-selection",
  },
  {
    slug: "mouse-brain-segmentation",
    title: "Mouse Brain Cell Segmentation in Fluorescence Microscopy",
    year: "CISS 2025 — Published",
    summary:
      "CISS 2025 six-class microscopy instance-segmentation research comparing Mask R-CNN, CenterMask2, YOLACT++, Mask2Former, MaskDINO, and FastInst, with a public COCO evaluation companion.",
    tags: ["OpenCV", "PyTorch", "CNNs", "Publication"],
    category: "ML / AI",
    link: "https://github.com/02061997/mouse-brain-cell-segmentation",
  },
  {
    slug: "virtual-yoga-instructor",
    title: "Virtual Yoga Instructor with Real-Time Feedback",
    year: "CISS 2025 — Published",
    summary:
      "CISS 2025 pose-feedback research with MediaPipe's 33-landmark schema, eight angle checks, 16 correction prompts, marker coordinates, and a TCP/JSON boundary for the Unity instructor.",
    tags: ["OpenCV", "MediaPipe", "PyTorch", "Publication"],
    category: "ML / AI",
    link: "https://github.com/02061997/virtual-yoga-instructor",
  },
  {
    slug: "options-pricing-engine",
    title: "Options Pricing Engine & Greeks Computation",
    year: "Jan 2026",
    summary:
      "Validated Black-Scholes and Monte Carlo pricing with antithetic/control variates, analytical/numerical Greeks, put-call parity grids, no-arbitrage checks, confidence intervals, and a recovered implied-volatility surface.",
    tags: ["Python", "NumPy", "SciPy", "Monte Carlo"],
    category: "Quant",
    link: "https://github.com/02061997/options-pricing-and-greeks",
  },
  {
    slug: "pairs-trading-backtest",
    title: "Statistical Pairs Trading Backtest",
    year: "Dec 2025",
    summary:
      "Leakage-controlled Engle-Granger backtest on AAPL–MSFT, KO–PEP, and XOM–CVX. KO–PEP is the only 5% cointegration pass; all strategy Sharpe intervals cross zero, with costs, slippage, baselines, exposure, turnover, and drawdown reported.",
    tags: ["Python", "statsmodels", "yfinance", "Backtesting"],
    category: "Quant",
    link: "https://github.com/02061997/statistical-pairs-trading",
  },
  {
    slug: "garch-volatility",
    title: "GARCH Volatility Modeling & Stochastic Time Series",
    year: "May 2025",
    summary:
      "Daily one-step-ahead GARCH(1,1), EWMA, and rolling-volatility forecasts for SPY plus five equities. GARCH wins RMSE on 4/6 symbols and QLIKE on 5/6, while EWMA remains best for JNJ/XOM RMSE and XOM QLIKE.",
    tags: ["Python", "statsmodels", "GARCH", "Time Series"],
    category: "Quant",
    link: "https://github.com/02061997/garch-volatility-modeling",
  },
  {
    slug: "lstm-financial-forecasting",
    title: "LSTM-Based Financial Time Series Forecasting",
    year: "Dec 2023",
    summary:
      "Chronological PyTorch LSTM benchmark with ARIMA, random-walk, seasonal-naive, ridge, and random-forest baselines. ARIMA has the best MAE/RMSE; one LSTM seed has higher directional accuracy, but the averaged LSTM underperforms simple baselines.",
    tags: ["PyTorch", "LSTM", "Time Series", "yfinance"],
    category: "Quant",
    link: "https://github.com/02061997/financial-time-series-forecasting",
  },
  {
    slug: "career-prediction-benchmark",
    title: "Multi-Output Career Prediction Benchmark",
    year: "CISS 2023 — Published",
    summary:
      "Paper-faithful multiclass-multioutput benchmark using 26-to-11 entropy feature selection, six domain classes, eight position classes, and six classifiers without redistributing personal LinkedIn-derived records.",
    tags: ["Scikit-learn", "Multi-output", "Benchmark", "Publication"],
    category: "ML / AI",
    link: "https://github.com/02061997/career-prediction-benchmark",
  },
  {
    slug: "ai-for-construction-safety",
    title: "GROVE — Grounded Construction Hazard Evaluation",
    year: "2026 — Research companion",
    summary:
      "Reproducibility package for grounded OSHA violation evaluation with component ablations, paired statistical tests, threshold sensitivity, failure attribution, and claim traceability.",
    tags: ["Vision-Language Models", "Grounding", "Evaluation", "Reproducibility"],
    category: "ML / AI",
    link: "https://github.com/02061997/ai-for-construction-safety",
  },
] as const;

export type ExperienceItem = {
  role: string;
  org: string;
  location?: string;
  period: string;
  bullets: readonly string[];
  kind: "education" | "work";
};

export const experience: readonly ExperienceItem[] = [
  {
    kind: "work",
    role: "Graduate Research Assistant",
    org: "University of Dayton — Research Lab",
    location: "Dayton, OH",
    period: "Aug 2023 — Present",
    bullets: [
      "Developed PyTorch/OpenAI Gym adversarial RL evaluation pipeline; entropy-based feature selection achieved 94–95% accuracy, outperforming KL-Divergence and Joint Entropy baselines (KSE 2024 publication).",
      "Co-authored 4 peer-reviewed ML / CV / AI safety papers; managed Slurm-based multi-GPU experiments with reproducibility tracking across concurrent research projects.",
      "Mentored junior researchers across 3 ML research threads — reviewing PyTorch code, experiment design, and paper drafts.",
    ],
  },
  {
    kind: "work",
    role: "Data & Systems Engineering Intern",
    org: "Dayton Phoenix Group",
    location: "Dayton, OH",
    period: "Jan 2025 — Present",
    bullets: [
      "Built Python data pipelines and KPI dashboards for 10+ production-line metrics, reducing manual reporting time by 60%.",
      "Applied SPC and outlier detection to manufacturing KPI time series; flagged recurring process deviations for corrective engineering review.",
    ],
  },
  {
    kind: "work",
    role: "Software Engineer",
    org: "Walmart Global Tech (via Kitestring Technical Services)",
    location: "Dallas, TX",
    period: "Apr 2023 — Aug 2023",
    bullets: [
      "Built Docker/Kubernetes CI/CD pipeline for a Node.js POS application, enabling zero-downtime deployments across Walmart store environments.",
      "Automated migration of 1M+ structured POS records to Azure Cosmos DB with Python validation scripts, retry logic, and integrity checks.",
    ],
  },
  {
    kind: "work",
    role: "ML / Product Intern",
    org: "Walmart",
    location: "Bentonville, AR",
    period: "Jun 2022 — Aug 2022",
    bullets: [
      "Built Random Forest load-type classifier for supply-chain trailers — 90% accuracy (P 92% / R 88% / F1 90%). Integrated 5 heterogeneous data sources while preventing look-ahead leakage.",
      "Validated classifier in shadow mode on production distribution-center data; presented automation roadmap to Bentonville supply-chain leadership.",
    ],
  },
  {
    kind: "work",
    role: "Software Engineer",
    org: "mindZcloud Technologies",
    location: "Nagpur, India",
    period: "Jul 2019 — Aug 2020",
    bullets: [
      "Built the company's new training portal — explored 50+ modular software designs, lifting target-audience engagement by 40%.",
      "Developed front-end web applications (HTML/CSS/JS) integrating APIs, improving UX by 30%.",
      "Programmed and debugged 20+ Apex Triggers and worked across Salesforce Admin / Aura Components.",
    ],
  },
  {
    kind: "work",
    role: "Co-Founder",
    org: "GearToCare",
    location: "Maharashtra, India",
    period: "Aug 2016 — Mar 2019",
    bullets: [
      "Pioneered an on-demand two-wheeler service that received a 3 lakh INR seed fund from the TBI Cell at RCOEM.",
      "On-boarded 3 colleges, reaching 700 customers in 6 months and 2000+ customer servicings by FY2018.",
      "Led ops and sales: hired 15 interns and 5 mechanics; coordinated cross-functional teams.",
    ],
  },
  {
    kind: "education",
    role: "Ph.D., Computer Science",
    org: "University of Dayton",
    location: "Dayton, OH",
    period: "Aug 2023 — May 2027 (expected)",
    bullets: [
      "Research: LLM evaluation, reinforcement learning, computer vision, AI safety.",
      "Coursework: Deep Learning, Reinforcement Learning, NLP, LLMs, Computer Vision, Statistical ML, Advanced Algorithms.",
    ],
  },
  {
    kind: "education",
    role: "M.S., Computer Science",
    org: "University of Dayton",
    location: "Dayton, OH",
    period: "Jan 2021 — Aug 2022",
    bullets: [
      "Coursework included Probability & Statistics, Stochastic Processes, Time Series Analysis, Statistical Learning, Numerical Methods, Optimization.",
    ],
  },
  {
    kind: "education",
    role: "B.E., Electronics Engineering",
    org: "Shri Ramdeobaba College of Engineering and Management",
    location: "Nagpur, India",
    period: "Aug 2015 — Dec 2019",
    bullets: [
      "President of the Electronics Department: led 65 juniors, secured 3.5 lakh INR sponsorship for the largest college event (650 students).",
      "Co-ordinated ICESC-2018, ENNOVATE 2019, and Entrix 2019.",
    ],
  },
] as const;

export type Publication = {
  title: string;
  venue: string;
  year: string;
};

export const publications: readonly Publication[] = [
  {
    title: "Imposter Injection: Learning to Select Features in Reinforcement Learning",
    venue: "KSE",
    year: "2024",
  },
  {
    title: "Mouse Brain Cell Segmentation in Fluorescence Microscopy Images",
    venue: "CISS",
    year: "2025",
  },
  {
    title: "Virtual Yoga Instructor with Real-Time Feedback",
    venue: "CISS",
    year: "2025",
  },
  {
    title: "Multi Output Career Prediction — Dataset, Method, and Benchmark Suite",
    venue: "CISS",
    year: "2023",
  },
  {
    title:
      "Enhancing Sustainability and Construction Safety Research in the Era of Artificial Intelligence",
    venue: "ASME Journal of Engineering for Sustainable Buildings and Cities",
    year: "2026",
  },
] as const;

export type Post = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
};

export const posts: readonly Post[] = [
  {
    slug: "evaluating-reasoning-models",
    title: "Notes on evaluating reasoning models across families",
    date: "2026-04-20",
    excerpt:
      "What I learned separating reasoning-length effects from forced re-entry across Llama- and Qwen-distilled models.",
  },
  {
    slug: "reproducibility-on-slurm",
    title: "Reproducibility on a shared Slurm cluster",
    date: "2025-11-02",
    excerpt:
      "Small habits that pay back tenfold when you and four collaborators are sharing the same GPUs.",
  },
] as const;
