import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionHeading } from "@/components/portfolio/Reveal";
import { SiteNav } from "@/components/portfolio/SiteNav";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import {
  achievements,
  experience,
  leadership,
  profile,
  projects,
  skills,
  stats,
} from "@/lib/portfolio-data";

const title = `${profile.name} — CEO, Software Developer & AI Engineer`;
const description =
  "Portfolio of Ayush Biswas: founder and engineer building AI-native products. Projects, experience, technical skills, leadership and downloadable résumé.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: profile.name,
          jobTitle: "Founder & CEO, Software Developer",
          email: `mailto:${profile.email}`,
          sameAs: [profile.github, profile.linkedin],
        }),
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  return (
    <div id="top" className="relative min-h-screen overflow-x-hidden">
      <div aria-hidden className="aurora -top-40 left-1/2 h-[520px] w-[720px] -translate-x-1/2" />
      <SiteNav />

      <main className="relative z-10 mx-auto max-w-6xl px-6">
        {/* HERO */}
        <section className="flex min-h-[86vh] flex-col justify-center py-20">
          <Reveal>
            <p className="label-mono text-primary">{profile.role}</p>
          </Reveal>
          <Reveal delay={80}>
            <h1 className="mt-6 max-w-[18ch] text-balance text-5xl font-medium leading-[0.95] tracking-tight sm:text-7xl">
              {profile.name}
            </h1>
          </Reveal>
          <Reveal delay={160}>
            <p className="mt-7 max-w-[54ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.tagline}
            </p>
          </Reveal>
          <Reveal delay={240}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <a
                href={profile.resume}
                download
                className="glow-ring rounded-md bg-primary px-5 py-3 font-mono text-xs tracking-wide text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
              >
                Download résumé ↓
              </a>
              <a
                href="#work"
                className="rounded-md border border-border px-5 py-3 font-mono text-xs tracking-wide transition-colors hover:border-primary/50 hover:text-primary"
              >
                Selected work
              </a>
              <span className="ml-1 flex items-center gap-4 font-mono text-xs text-muted-foreground">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  GitHub
                </a>
                <span className="text-border">/</span>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-primary"
                >
                  LinkedIn
                </a>
              </span>
            </div>
          </Reveal>
          <Reveal delay={320}>
            <dl className="mt-16 grid max-w-2xl grid-cols-2 gap-px overflow-hidden rounded-xl border border-border sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="glass px-5 py-4">
                  <dd className="font-mono text-2xl text-primary">{stat.value}</dd>
                  <dt className="label-mono mt-1.5">{stat.label}</dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </section>

        {/* WORK */}
        <section id="work" className="scroll-mt-24 py-24">
          <SectionHeading label="Selected work" title="Projects that shipped" meta="04 / 04" />
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project, i) => (
              <Reveal key={project.title} delay={i * 70}>
                <ProjectCard project={project} href={profile.github} />
              </Reveal>
            ))}
          </div>
          <Reveal delay={120}>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="glass mt-5 flex flex-wrap items-center justify-between gap-4 rounded-2xl p-6 transition-colors hover:border-primary/40"
            >
              <div>
                <p className="label-mono text-primary">GitHub</p>
                <p className="mt-2 text-lg font-medium tracking-tight">
                  @{profile.githubHandle} — code, experiments, and open source
                </p>
              </div>
              <span className="font-mono text-xs text-muted-foreground">Browse repositories →</span>
            </a>
          </Reveal>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="scroll-mt-24 py-24">
          <SectionHeading label="Experience" title="Timeline" meta="2019 — Now" />
          <ol className="relative ml-1 border-l border-border">
            {experience.map((role, i) => (
              <Reveal as="li" key={role.title} delay={i * 70} className="relative pb-10 pl-8">
                <span
                  aria-hidden
                  className={`absolute -left-[5px] top-2 size-2.5 rounded-full ring-4 ring-background ${
                    role.current ? "bg-primary" : "bg-muted-foreground/50"
                  }`}
                />
                <p className="font-mono text-xs text-muted-foreground">{role.period}</p>
                <h3 className="mt-2 text-lg font-medium tracking-tight">
                  {role.title} <span className="text-muted-foreground">— {role.org}</span>
                </h3>
                <p className="mt-2 max-w-[62ch] text-sm leading-relaxed text-muted-foreground">
                  {role.detail}
                </p>
              </Reveal>
            ))}
          </ol>
        </section>

        {/* SKILLS */}
        <section id="skills" className="scroll-mt-24 py-24">
          <SectionHeading label="Technical skills" title="Capabilities" meta="By domain" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((group, i) => (
              <Reveal key={group.group} delay={i * 70}>
                <div className="glass h-full rounded-2xl p-6">
                  <p className="label-mono text-primary">{group.group}</p>
                  <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                    {group.items.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1.5 size-1 shrink-0 rounded-full bg-primary/70" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ACHIEVEMENTS */}
        <section className="py-24">
          <SectionHeading label="Achievements" title="Track record" />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border sm:grid-cols-3">
            {achievements.map((item, i) => (
              <Reveal key={item.title} delay={i * 70}>
                <div className="glass h-full p-7">
                  <div className="font-mono text-4xl text-primary">{item.value}</div>
                  <h3 className="mt-4 text-base font-medium tracking-tight">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
                    {item.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* LEADERSHIP */}
        <section id="leadership" className="scroll-mt-24 py-24">
          <SectionHeading label="Leadership" title="How I run a team" />
          <ul className="grid gap-4 sm:grid-cols-2">
            {leadership.map((item, i) => (
              <Reveal as="li" key={item} delay={i * 70} className="glass rounded-2xl p-6">
                <span className="font-mono text-xs text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item}</p>
              </Reveal>
            ))}
          </ul>
        </section>

        {/* CONTACT */}
        <section id="contact" className="scroll-mt-24 pb-16">
          <Reveal className="glass grid gap-10 rounded-3xl p-8 md:grid-cols-2 md:p-12">
            <div>
              <p className="label-mono text-primary">Contact</p>
              <h2 className="mt-4 max-w-[22ch] text-balance text-3xl font-medium tracking-tight sm:text-4xl">
                Open to building something that lasts.
              </h2>
              <p className="mt-4 max-w-[42ch] text-sm leading-relaxed text-muted-foreground">
                Available for senior engineering roles, advisory work, and select collaborations.
                {" "}
                {profile.location}.
              </p>
            </div>
            <div className="flex flex-col justify-end gap-6">
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-lg transition-colors hover:text-primary"
              >
                {profile.email}
              </a>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={profile.github}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-4 py-2.5 font-mono text-xs transition-colors hover:border-primary/50 hover:text-primary"
                >
                  GitHub
                </a>
                <a
                  href={profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-md border border-border px-4 py-2.5 font-mono text-xs transition-colors hover:border-primary/50 hover:text-primary"
                >
                  LinkedIn
                </a>
                <a
                  href={profile.resume}
                  download
                  className="rounded-md bg-primary px-4 py-2.5 font-mono text-xs text-primary-foreground transition-transform duration-300 hover:-translate-y-0.5"
                >
                  Résumé ↓
                </a>
              </div>
            </div>
          </Reveal>
          <div className="mt-10 flex flex-wrap items-center justify-between gap-3 border-t border-border pt-6 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>Engineered, not generated</span>
          </div>
        </section>
      </main>
    </div>
  );
}
