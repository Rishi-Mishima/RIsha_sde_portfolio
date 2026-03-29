import SectionHeading from '../components/SectionHeading'
import ProjectCard from '../components/ProjectCard'
import TerminalWindow from '../components/TerminalWindow'

function ProjectsSection({ projects }) {
  return (
    <section id="projects" className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
      <SectionHeading
        index={3}
        title="Projects"
        subtitle="Selected work framed as case studies: what changed, how the system was shaped, and why the technical choices mattered."
        note="featured work"
      />

      <div className="space-y-6">
        <TerminalWindow title="projects/index">
          <div className="grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-3">
              <p className="section-kicker">[focus]</p>
              <p className="text-sm leading-8 text-zinc-300">
                The emphasis is intentionally on impact, architecture, and metrics. This is closer
                to an engineering case-study format than a gallery of screenshots.
              </p>
            </div>

            <div className="grid gap-3 text-[10px] uppercase tracking-[0.3em] text-zinc-500">
              <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                outcome_signal = strong
              </div>
              <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                architecture = explicit
              </div>
              <div className="rounded-2xl border border-zinc-900/90 bg-black/35 px-4 py-4">
                execution = end_to_end
              </div>
            </div>
          </div>
        </TerminalWindow>

        <div className="grid gap-6 xl:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
