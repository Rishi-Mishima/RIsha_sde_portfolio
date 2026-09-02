import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'

function ExperienceSection({ experience }) {
  return (
    <section
      id="experience"
      className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14"
    >
      <SectionHeading
        index={4}
        title="Experience"
        subtitle="Engineering related exprinces...🧬  Building medical device, working with clients and patients, dealing with medical device documentation and etc..."
        note="timeline"
      />

      <div className="space-y-5">
        {experience.map((item) => (
          <TerminalWindow
            key={`${item.period}-${item.role}`}
            title={`experience/${item.company.toLowerCase().replaceAll(' ', '-')}`}
          >
            <article className="space-y-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold tracking-[-0.03em] text-zinc-100">
                    {item.role} <span className="text-zinc-600">@</span> {item.company}
                  </h3>
                  <p className="text-sm leading-8 text-zinc-300">{item.summary}</p>
                </div>
                <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">{item.period}</p>
              </div>

              <ul className="space-y-3 text-sm leading-7 text-zinc-400">
                {item.achievements.map((achievement) => (
                  <li key={achievement}>
                    <span className="mr-2 text-lime-300/75">&gt;</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </article>
          </TerminalWindow>
        ))}
      </div>
    </section>
  )
}

export default ExperienceSection
