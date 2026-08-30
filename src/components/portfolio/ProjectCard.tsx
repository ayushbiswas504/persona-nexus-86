import { useRef, type MouseEvent } from "react";

type Project = {
  index: string;
  title: string;
  status: string;
  summary: string;
  tags: string[];
  metric: string;
};

export function ProjectCard({ project, href }: { project: Project; href: string }) {
  const ref = useRef<HTMLAnchorElement | null>(null);

  const onMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${event.clientX - rect.left}px`);
    el.style.setProperty("--my", `${event.clientY - rect.top}px`);
  };

  return (
    <a
      ref={ref}
      href={href}
      target="_blank"
      rel="noreferrer"
      onMouseMove={onMove}
      className="group glass relative overflow-hidden rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:border-primary/40 sm:p-7"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(300px circle at var(--mx, 50%) var(--my, 0%), oklch(0.82 0.13 183 / 0.12), transparent 70%)",
        }}
      />
      <div className="relative flex items-center justify-between">
        <span className="label-mono">{project.index}</span>
        <span className="label-mono text-primary">{project.status}</span>
      </div>
      <h3 className="relative mt-6 text-xl font-medium tracking-tight">{project.title}</h3>
      <p className="relative mt-2.5 max-w-[46ch] text-sm leading-relaxed text-muted-foreground">
        {project.summary}
      </p>
      <div className="relative mt-6 flex flex-wrap items-center gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-border px-2.5 py-1 font-mono text-[10px] text-muted-foreground"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="relative mt-6 flex items-center justify-between border-t border-border pt-4 font-mono text-xs text-muted-foreground">
        <span>{project.metric}</span>
        <span className="transition-transform duration-500 group-hover:translate-x-1 group-hover:text-primary">
          View →
        </span>
      </div>
    </a>
  );
}
