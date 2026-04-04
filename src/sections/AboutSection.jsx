import heroPortrait from '../assets/hero.png'
import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'
import AsciiDivider from '../components/AsciiDivider'

function AboutSection({ about, hero }) {
  return (
    <section id="about" className="section-shell space-y-10 sm:space-y-12">
      <SectionHeading index={1} title="About" subtitle={about.summary} note="profile" />

      <div className="grid gap-6 lg:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)] lg:gap-8">
        <div className="grid gap-5">
          <div className="terminal-card overflow-hidden p-3 sm:p-4">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-zinc-900/90 bg-zinc-950">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-zinc-900/90 bg-black/72 px-4 py-3 text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                <span>profile/image</span>
                <span>reserved</span>
              </div>
              <div className="profile-image-shell aspect-[4/5] pt-11">
                <img
                  src={heroPortrait}
                  alt="Portrait placeholder for profile section"
                  className="h-full w-full object-cover opacity-80 grayscale"
                />
              </div>
            </div>
          </div>

          <div className="terminal-card p-6 sm:p-7">
            <p className="mb-4 text-[11px] uppercase tracking-[0.32em] text-zinc-500">
              engineering posture
            </p>
            <p className="section-body">
              I favor product interfaces that feel controlled and quiet, backed by systems that are
              instrumented well enough to survive messy reality.
            </p>
          </div>
        </div>

        <div className="grid gap-5">
          <TerminalWindow
            title="personal profile"
            className="terminal-glow terminal-fade overflow-hidden"
            contentClassName="space-y-6"
          >
            <div className="space-y-3 text-sm leading-8 text-zinc-300">
              {hero.commandLines.map((line) => (
                <p key={line} className={line.startsWith('$') ? 'text-zinc-500' : 'text-zinc-200'}>
                  {line}
                </p>
              ))}
            </div>

            <AsciiDivider dense label="stats" />

            <div className="grid gap-3 sm:grid-cols-3">
              {hero.stats.map((stat, index) => (
                <div
                  key={`${stat.label}-${index}`}
                  className="rounded-[1.2rem] border border-zinc-900/90 bg-black/38 px-4 py-4"
                >
                  <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-zinc-600">
                    {stat.label}
                  </p>
                  <p className="text-lg font-semibold text-zinc-100">{stat.value}</p>
                </div>
              ))}
            </div>
          </TerminalWindow>

          <TerminalWindow title="about/me">
            <div className="space-y-6 text-sm leading-8 text-zinc-300 sm:text-base">
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </TerminalWindow>

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
