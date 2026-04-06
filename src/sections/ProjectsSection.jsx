import AsciiDivider from '../components/AsciiDivider'
import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section-shell project-showcase">
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
        <SectionHeading
          index={3}
          title="Projects"
          subtitle="Selected work presented as direct-entry engineering case studies. Each card opens the corresponding repository in a new tab."
          note="github index"
        />

        <div className="space-y-6">
          <TerminalWindow title="projects/index">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-3">
                <p className="section-kicker">[interaction]</p>
                <p className="text-sm leading-8 text-zinc-300">
                  The layout stays vertically stacked and immediately scannable. Hover signals that
                  the whole card is clickable, and click-through goes straight to the repository.
                </p>
              </div>

              <div className="grid gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                  navigation = direct
                </div>
                <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                  layout = stacked_cards
                </div>
                <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                  destination = github_repo
                </div>
              </div>
            </div>
          </TerminalWindow>

          <div className="project-stack">
            {projects.map((project, index) => (
              <a
                key={project.name}
                href={project.repoUrl}
                target="_blank"
                rel="noreferrer"
                className="project-card-link"
                aria-label={`Open ${project.name} GitHub repository`}
                style={{ '--tile-order': index }}
              >
                <article className="project-card">
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-3">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className="section-kicker">{project.label}</span>
                        <span className="project-case-tag">repository</span>
                        <span className="text-[10px] uppercase tracking-[0.28em] text-zinc-600">
                          {project.stack.slice(0, 2).join(' / ')}
                        </span>
                      </div>

                      <div className="space-y-2">
                        <h3 className="display-title text-left text-2xl sm:text-[2rem]">
                          {project.name}
                        </h3>
                        <p className="max-w-2xl text-left text-sm leading-7 text-zinc-400">
                          {project.tagline}
                        </p>
                      </div>
                    </div>

                    <span className="project-card__cta">
                      <span>open repo</span>
                      <span className="project-card__cta-mark" aria-hidden="true">
                        ↗
                      </span>
                    </span>
                  </div>

                  <AsciiDivider dense label="overview" className="py-4" />

                  <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-8">
                    <div className="space-y-5">
                      <div className="space-y-2">
                        <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">
                          Description
                        </p>
                        <p className="text-sm leading-8 text-zinc-300">{project.impact}</p>
                      </div>

                      <div className="space-y-2">
                        <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">
                          Architecture
                        </p>
                        <p className="text-sm leading-8 text-zinc-400">{project.architecture}</p>
                      </div>

                      <div className="space-y-3">
                        <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">
                          Key Contributions
                        </p>
                        <ul className="space-y-3 text-sm leading-7 text-zinc-300">
                          {project.highlights.map((highlight) => (
                            <li key={highlight} className="flex gap-3">
                              <span className="pt-1 text-lime-300/75">&gt;</span>
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="space-y-5">
                      <div className="project-detail-block">
                        <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-zinc-500">
                          Tech Stack
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((item) => (
                            <span key={item} className="project-badge">
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="project-detail-block">
                        <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-zinc-500">
                          Metrics / Impact
                        </p>
                        <div className="flex flex-wrap gap-2.5">
                          {project.metrics.map((metric) => (
                            <span key={metric} className="project-metric-chip">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
