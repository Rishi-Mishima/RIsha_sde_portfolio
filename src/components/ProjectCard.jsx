import AsciiDivider from './AsciiDivider'
import TerminalWindow from './TerminalWindow'

function ProjectCard({ project }) {
  return (
    <TerminalWindow
      title={project.name}
      className="group h-full transition duration-300 hover:border-zinc-800 hover:bg-[linear-gradient(180deg,rgba(24,24,24,0.96),rgba(8,8,8,0.94))]"
      contentClassName="flex h-full flex-col gap-8"
    >
      <article className="flex h-full flex-col gap-8">
        <div className="space-y-5">
          <div className="flex items-center justify-between gap-4">
            <p className="section-kicker">{project.label}</p>
            <span className="text-[10px] uppercase tracking-[0.32em] text-zinc-600">case study</span>
          </div>

          <div className="space-y-4">
            <h3 className="display-title text-2xl sm:text-[1.9rem]">{project.name}</h3>
            <p className="max-w-xl text-sm leading-8 text-zinc-300">{project.tagline}</p>
          </div>
        </div>

        <AsciiDivider dense label="impact" />

        <div className="grid gap-6 text-sm leading-8 text-zinc-300">
          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">Outcome</p>
            <p>{project.impact}</p>
          </div>

          <div className="space-y-2">
            <p className="text-[11px] uppercase tracking-[0.32em] text-zinc-500">Architecture</p>
            <p className="text-zinc-400">{project.architecture}</p>
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[1.4rem] border border-zinc-900/90 bg-black/35 p-5">
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-zinc-500">
              Build Notes
            </p>
            <ul className="space-y-3 text-sm leading-7 text-zinc-400">
              {project.highlights.map((highlight) => (
                <li key={highlight}>
                  <span className="mr-2 text-lime-300/75">&gt;</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="rounded-[1.4rem] border border-zinc-900/90 bg-black/35 p-5">
              <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-zinc-500">Stack</p>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-zinc-800 bg-zinc-950/90 px-3 py-1 text-[10px] uppercase tracking-[0.24em] text-zinc-400"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="grid gap-2">
              {project.metrics.map((metric) => (
                <div
                  key={metric}
                  className="rounded-2xl border border-lime-300/14 bg-lime-300/5 px-4 py-3 text-[11px] uppercase tracking-[0.24em] text-zinc-100"
                >
                  {metric}
                </div>
              ))}
            </div>
          </div>
        </div>
      </article>
    </TerminalWindow>
  )
}

export default ProjectCard
