import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'

function SkillsSection({ skills }) {
  return (
    <section id="skills" className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
      <SectionHeading
        index={2}
        title="Skills"
        subtitle="A concise map of the surfaces I tend to own, from frontend system quality to platform concerns and the delivery mechanics around them."
        note="capabilities"
      />

      <div className="grid gap-5 md:grid-cols-2">
        {skills.map((group) => (
          <TerminalWindow
            key={group.category}
            title={`skills/${group.category.toLowerCase()}`}
            className="h-full"
          >
            <div className="space-y-5">
              <h3 className="text-sm uppercase tracking-[0.32em] text-zinc-500">
                {group.category}
              </h3>
              <ul className="space-y-3 text-sm leading-7 text-zinc-300">
                {group.items.map((item) => (
                  <li key={item}>
                    <span className="mr-2 text-lime-300/75">&gt;</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </TerminalWindow>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection
