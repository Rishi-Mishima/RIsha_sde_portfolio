import { useEffect, useState } from 'react'
import AsciiDivider from '../components/AsciiDivider'
import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'

function ProjectDetail({ project, compact = false }) {
  return (
    <div className={`grid gap-6 ${compact ? '' : 'lg:grid-cols-[1.15fr_0.85fr] lg:gap-8'}`}>
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <p className="section-kicker">{project.label}</p>
            <span className="project-case-tag">case study</span>
          </div>

          <div className="space-y-3">
            <h3 className="display-title text-3xl sm:text-[2.4rem]">{project.name}</h3>
            <p className="max-w-2xl text-sm leading-8 text-zinc-300 sm:text-base">
              {project.tagline}
            </p>
          </div>
        </div>

        <AsciiDivider dense label="overview" />

        <div className="space-y-5 text-sm leading-8 text-zinc-300">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">Description</p>
            <p>{project.impact}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">Architecture</p>
            <p className="text-zinc-400">{project.architecture}</p>
          </div>
        </div>
      </div>

      <div className="space-y-5">
        <div className="project-detail-block">
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-zinc-500">Stack</p>
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

        <div className="project-detail-block">
          <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-zinc-500">
            Metrics / Impact
          </p>
          <div className="grid gap-2.5">
            {project.metrics.map((metric) => (
              <div key={metric} className="project-metric-chip">
                {metric}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ProjectsSection({ projects }) {
  const [activeProjectIndex, setActiveProjectIndex] = useState(null)

  useEffect(() => {
    if (activeProjectIndex === null) {
      return undefined
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setActiveProjectIndex(null)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [activeProjectIndex])

  return (
    <section
      id="projects"
      className={`section-shell project-showcase ${activeProjectIndex !== null ? 'is-focused' : ''}`}
    >
      <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
        <SectionHeading
          index={3}
          title="Projects"
          subtitle="Open each project as an engineering case study: impact, system shape, implementation decisions, and measurable outcomes."
          note="interactive index"
        />

        <div className="space-y-6">
          <TerminalWindow title="projects/index">
            <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
              <div className="space-y-3">
                <p className="section-kicker">[interaction]</p>
                <p className="text-sm leading-8 text-zinc-300">
                  The stack stays compressed until selected. Desktop opens a focused case-study
                  panel; mobile expands inline like an accordion so the section stays easy to scan.
                </p>
              </div>

              <div className="grid gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
                <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                  mode = stacked_tiles
                </div>
                <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                  focus = immersive_panel
                </div>
                <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                  mobile = accordion
                </div>
              </div>
            </div>
          </TerminalWindow>

          <div className="project-stack">
            {projects.map((project, index) => {
              const isActive = activeProjectIndex === index

              return (
                <article
                  key={project.name}
                  className={`project-tile ${isActive ? 'is-active' : ''}`}
                  style={{ '--tile-order': index }}
                >
                  <button
                    type="button"
                    className="project-tile__trigger"
                    aria-expanded={isActive}
                    aria-controls={`project-mobile-panel-${index}`}
                    onClick={() => setActiveProjectIndex(isActive ? null : index)}
                  >
                    <div className="project-tile__surface">
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-3">
                          <div className="flex flex-wrap items-center gap-3">
                            <span className="section-kicker">{project.label}</span>
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

                        <span className={`project-tile__indicator ${isActive ? 'is-active' : ''}`}>
                          <span>{isActive ? 'close' : 'open'}</span>
                          <span className="project-tile__indicator-mark" aria-hidden="true">
                            {isActive ? '−' : '+'}
                          </span>
                        </span>
                      </div>

                      <AsciiDivider dense label="snapshot" className="py-4" />

                      <div className="grid gap-4 sm:grid-cols-[minmax(0,1.4fr)_minmax(0,0.8fr)]">
                        <p className="text-left text-sm leading-7 text-zinc-300">{project.impact}</p>
                        <div className="flex flex-wrap justify-start gap-2 sm:justify-end">
                          {project.metrics.slice(0, 2).map((metric) => (
                            <span key={metric} className="project-metric-chip">
                              {metric}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>

                  <div
                    id={`project-mobile-panel-${index}`}
                    className={`project-mobile-detail md:hidden ${isActive ? 'is-open' : ''}`}
                  >
                    <div className="px-5 pb-6 pt-1 sm:px-6">
                      <ProjectDetail project={project} compact />
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>

      <div
        className={`project-focus-layer ${activeProjectIndex !== null ? 'is-visible' : ''} hidden md:block`}
        aria-hidden={activeProjectIndex === null}
      >
        <button
          type="button"
          className="project-focus-layer__backdrop"
          aria-label="Close project detail"
          onClick={() => setActiveProjectIndex(null)}
        />

        <div className="project-focus-shell">
          <TerminalWindow
            title={activeProjectIndex !== null ? projects[activeProjectIndex].name : 'project'}
            className={`project-focus-panel ${activeProjectIndex !== null ? 'is-visible' : ''}`}
            contentClassName="space-y-8"
          >
            {activeProjectIndex !== null ? (
              <>
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                    expanded_case_file://{projects[activeProjectIndex].label}
                  </p>
                  <button
                    type="button"
                    className="project-close"
                    onClick={() => setActiveProjectIndex(null)}
                  >
                    close
                  </button>
                </div>

                <ProjectDetail project={projects[activeProjectIndex]} />
              </>
            ) : null}
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
