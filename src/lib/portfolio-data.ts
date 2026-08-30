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
  { label: "CO-FOUNDER AND CEO", value: "1" },
  { label: "Team led", value: "10" },
  { label: "Years building", value: "2" },
  { label: "OSS stars", value: "3.4k" },
];

export const projects = [
  {
    index: "01",
    title: "Campus-Gpt ",
    status: "Live",
    summary:
      "An AI workspace that turns long-form research into cited, structured briefs. I own the retrieval layer and the product surface.",
    tags: ["TypeScript", "React", "RAG", "Postgres"],
    metric: "1.2M docs indexed",
  },
  {
    index: "02",
    title: "Event-Ticket-Management-WebApp",
    status: "Open source",
    summary:
      "Smart Event Ticketing & QR Entry Management System For My Club",
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
    title: "smart-attendance-app ",
    status: "Beta",
    summary:
      "A platfor for only for students",
    tags: ["Python", "LangGraph", "Redis"],
    metric: "18k runs/day",
  },
];

export const experience = [
  {
    period: "2024 — Now",
    title: "Founder & CEO",
    org: "Vizion Forge",
    detail:
      "Founded the club under dsw, hired the first nine people, and shipped the v1 platform to paying teams while staying hands-on in the codebase.",
    current: true,
  },
  {
    period: "August 2026-Present",
    title: "Software Engineer Intern",
    org: "Decode Labs",
    detail:
      "Led the data platform guild; drove a 3× ingest throughput gain and owned the reliability program end to end.",
  },
  {
    period: "August 2026-Present",
    title: "Software Developer Intern",
    org: "FlyRank Ai",
    detail:
      "First engineering hire. Built the core API and the internal design system that three product teams still ship on.",
  },
  {
    period: "2015-2026",
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
    items: ["Postgresql", "MongoDb", "Kubernetes", "Linux", "Git & GitHub"],
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
