export const profile = {
  name: "Ayush Biswas",
  role: "CEO · Software Developer · AI Engineer",
  tagline:
    "I build and lead — shipping AI-native products end to end, from model layer to interface.",
  location: "Kolkata, India · Remote",
  email: "hello@ayushbiswas.dev",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/",
  githubHandle: "ayushbiswas",
  resume: "/ayush-biswas-resume.pdf",
};

export const stats = [
  { label: "Products shipped", value: "12" },
  { label: "Team led", value: "9" },
  { label: "Years building", value: "6" },
  { label: "OSS stars", value: "3.4k" },
];

export const projects = [
  {
    index: "01",
    title: "Sentia",
    status: "Live",
    summary:
      "An AI workspace that turns long-form research into cited, structured briefs. I own the retrieval layer and the product surface.",
    tags: ["TypeScript", "React", "RAG", "Postgres"],
    metric: "1.2M docs indexed",
  },
  {
    index: "02",
    title: "Nimbus Runtime",
    status: "Open source",
    summary:
      "A tiny inference runtime for edge devices — sub-100KB, ONNX in, WASM out. Maintained solo with contributors across four countries.",
    tags: ["Rust", "WASM", "ONNX"],
    metric: "3.4k stars",
  },
  {
    index: "03",
    title: "Pulse Analytics",
    status: "Shipped",
    summary:
      "Realtime product analytics with anomaly detection baked into ingest, so teams see regressions before dashboards refresh.",
    tags: ["Go", "ClickHouse", "Kafka"],
    metric: "40ms p99",
  },
  {
    index: "04",
    title: "Loom Agents",
    status: "Beta",
    summary:
      "A framework for durable multi-step agents with replayable state, human checkpoints, and per-step cost accounting.",
    tags: ["Python", "LangGraph", "Redis"],
    metric: "18k runs/day",
  },
];

export const experience = [
  {
    period: "2024 — Now",
    title: "Founder & CEO",
    org: "Sentia Labs",
    detail:
      "Founded the company, hired the first nine people, and shipped the v1 platform to paying teams while staying hands-on in the codebase.",
    current: true,
  },
  {
    period: "2022 — 2024",
    title: "Senior Software Engineer",
    org: "Northwind Systems",
    detail:
      "Led the data platform guild; drove a 3× ingest throughput gain and owned the reliability program end to end.",
  },
  {
    period: "2021 — 2022",
    title: "Software Developer",
    org: "Parallax",
    detail:
      "First engineering hire. Built the core API and the internal design system that three product teams still ship on.",
  },
  {
    period: "2019 — 2021",
    title: "Independent developer",
    org: "Freelance & open source",
    detail:
      "Delivered client products across fintech and edtech while publishing developer tooling used in production by small teams.",
  },
];

export const skills = [
  {
    group: "Languages",
    items: ["TypeScript", "Python", "Rust", "Go", "SQL"],
  },
  {
    group: "AI / ML",
    items: ["PyTorch", "LLM evals", "RAG pipelines", "Fine-tuning", "Inference optimization"],
  },
  {
    group: "Product & Web",
    items: ["React", "TanStack", "Tailwind", "Node", "Design systems"],
  },
  {
    group: "Infrastructure",
    items: ["Postgres", "ClickHouse", "Kubernetes", "Terraform", "Observability"],
  },
];

export const achievements = [
  {
    value: "3.4k",
    title: "Open-source stars",
    detail: "Nimbus Runtime, adopted by two hardware teams for on-device inference.",
  },
  {
    value: "9",
    title: "Engineers hired",
    detail: "Built the founding team with zero attrition through the first year.",
  },
  {
    value: "6",
    title: "Talks given",
    detail: "Conference and meetup talks on practical AI systems and inference cost.",
  },
];

export const leadership = [
  "Set technical direction and the hiring bar for a nine-person engineering team across three time zones.",
  "Run a weekly architecture review that keeps decisions written down and reversible.",
  "Mentor four junior engineers through structured, outcome-based growth plans.",
  "Own investor and customer communication alongside day-to-day engineering.",
];
