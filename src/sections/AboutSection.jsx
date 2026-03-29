import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'

function AboutSection({ about }) {
  return (
    <section id="about" className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
      <SectionHeading
        index={1}
        title="About"
        subtitle={about.summary}
        note="profile"
      />

      <div className="grid gap-5">
        <TerminalWindow title="about/me">
          <div className="space-y-6 text-sm leading-8 text-zinc-300 sm:text-base">
            {about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </TerminalWindow>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="terminal-card p-6 sm:p-7">
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-zinc-500">
              engineering posture
            </p>
            <p className="section-body">
              I favor product interfaces that feel controlled and quiet, backed by systems that are
              instrumented well enough to survive messy reality.
            </p>
          </div>

          <TerminalWindow title="operating/principles">
            <ul className="space-y-3 text-sm leading-7 text-zinc-300">
              {about.principles.map((principle) => (
                <li key={principle}>
                  <span className="mr-2 text-lime-300/75">&gt;</span>
                  {principle}
                </li>
              ))}
            </ul>
          </TerminalWindow>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
