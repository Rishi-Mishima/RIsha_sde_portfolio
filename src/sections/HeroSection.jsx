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
    <section className="hero-shell flex min-h-[calc(100vh-11rem)] items-center py-10 sm:py-12">
      <div className="w-full space-y-8 sm:space-y-10">
        <div className="inline-flex items-center gap-3 rounded-full border border-zinc-800/90 bg-zinc-950/78 px-4 py-2 text-[11px] uppercase tracking-[0.32em] text-zinc-400">
          <span className="h-2 w-2 rounded-full bg-lime-300 shadow-[0_0_18px_rgba(163,230,53,0.8)]" />
          {siteMeta.role}
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(260px,0.6fr)] lg:items-end">
          <div className="space-y-6">
            <p className="text-[11px] uppercase tracking-[0.36em] text-zinc-500">{hero.eyebrow}</p>
            <h1
              className={`display-title max-w-5xl text-5xl leading-[0.95] sm:text-7xl lg:text-[5.8rem] typewriter-caret ${isDaylight ? 'hero-title-daylight' : ''}`}
            >
              {typedTitle}
            </h1>
            <p className="max-w-3xl text-base leading-8 text-zinc-400 sm:text-lg sm:leading-9">
              {hero.intro}
            </p>
          </div>

          <TerminalWindow title="hero/status" className="terminal-fade" contentClassName="space-y-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-[1.2rem] border border-zinc-900/90 bg-black/38 px-4 py-4">
                <p className="mb-2 text-[10px] uppercase tracking-[0.32em] text-zinc-600">based in</p>
                <p className="text-lg font-semibold text-zinc-100">{siteMeta.location}</p>
              </div>

              <div className="rounded-[1.2rem] border border-zinc-900/90 bg-black/38 px-4 py-4">
                <p className="mb-3 text-[10px] uppercase tracking-[0.32em] text-zinc-600">active focus</p>
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
            </div>
          </TerminalWindow>
        </div>

        <AsciiDivider label="primary output" />

        <div className="flex flex-wrap gap-3 text-sm">
          <a className="terminal-link" href="#projects">
            inspect_projects()
          </a>
          <a className="terminal-link muted" href="#about">
            open_profile()
          </a>
          <a className="terminal-link muted" href={`mailto:${siteMeta.email}`}>
            open_contact()
          </a>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
