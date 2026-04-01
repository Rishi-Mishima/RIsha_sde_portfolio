import { useEffect, useState } from 'react'
import AsciiDivider from '../components/AsciiDivider'
import TerminalWindow from '../components/TerminalWindow'

function HeroSection({ hero, siteMeta, theme }) {
  const isDaylight = theme === 'daylight'
  const [typedTitle, setTypedTitle] = useState('')

  useEffect(() => {
    setTypedTitle('')

    let frame = 0
    const timer = window.setInterval(() => {
      frame += 1
      setTypedTitle(hero.title.slice(0, frame))

      if (frame >= hero.title.length) {
        window.clearInterval(timer)
      }
    }, 36)

    return () => window.clearInterval(timer)
  }, [hero.title, theme])

  return (
    <section className="grid gap-10 py-10 sm:gap-12 sm:py-14 lg:grid-cols-[minmax(0,1.35fr)_400px] lg:gap-14 lg:py-18">
      <div className="space-y-8 sm:space-y-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800/90 bg-zinc-950/78 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.8)]" />
          {siteMeta.role}
        </div>

        <div className="space-y-6">
          <p className="text-[11px] uppercase tracking-[0.36em] text-zinc-500">{hero.eyebrow}</p>
          <h1
            className={`display-title max-w-5xl text-5xl leading-[0.95] sm:text-7xl lg:text-[5.4rem] typewriter-caret ${isDaylight ? 'hero-title-daylight' : ''}`}
          >
            {typedTitle}
          </h1>
          <p className="max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
            {hero.intro}
          </p>
        </div>

        <AsciiDivider label="primary output" />

        <div className="flex flex-wrap gap-3 text-sm">
          <a className="terminal-link" href="#projects">
            inspect_projects()
          </a>
          <a className="terminal-link muted" href={`mailto:${siteMeta.email}`}>
            open_contact()
          </a>
        </div>

        <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_220px]">
          <div className="rounded-[1.7rem] border border-zinc-900/90 bg-black/35 p-5 sm:p-6">
            <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-zinc-500">
              active focus
            </p>
            <div className="flex flex-wrap gap-2">
              {hero.labels.map((label) => (
                <span
                  key={label}
                  className="rounded-full border border-zinc-800 bg-black/40 px-3 py-2 text-[10px] uppercase tracking-[0.24em] text-zinc-400"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.7rem] border border-zinc-900/90 bg-black/35 p-5 sm:p-6">
            <p className="mb-4 text-[11px] uppercase tracking-[0.34em] text-zinc-500">based in</p>
            <p className="text-xl font-semibold text-zinc-100">{siteMeta.location}</p>
            <p className="mt-2 text-sm leading-7 text-zinc-400">Building for product, platform, and systems-facing teams.</p>
          </div>
        </div>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <TerminalWindow
          title="runtime/profile"
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

          <div className="grid gap-3">
            {hero.stats.map((stat) => (
              <div
                key={stat.label}
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
      </div>
    </section>
  )
}

export default HeroSection
