import { useEffect, useState } from 'react'
import {
  about,
  contacts,
  experience,
  hero,
  navigation,
  projects,
  siteMeta,
  skills,
} from './data/portfolio'
import AsciiDivider from './components/AsciiDivider'
import ContactSection from './sections/ContactSection'
import ExperienceSection from './sections/ExperienceSection'
import Footer from './sections/Footer'
import HeroSection from './sections/HeroSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import AboutSection from './sections/AboutSection'

const THEME_STORAGE_KEY = 'portfolio-theme'

function App() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === 'undefined') {
      return 'terminal'
    }

    return window.localStorage.getItem(THEME_STORAGE_KEY) ?? 'terminal'
  })

  useEffect(() => {
    document.body.classList.toggle('theme-daylight', theme === 'daylight')
    window.localStorage.setItem(THEME_STORAGE_KEY, theme)
  }, [theme])

  const isDaylight = theme === 'daylight'

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${isDaylight ? 'bg-stone-100 text-stone-950' : 'bg-black text-zinc-100'}`}
    >
      <div className="mx-auto flex min-h-screen w-full max-w-[88rem] flex-col px-4 pb-10 pt-4 sm:px-8 sm:pt-6 lg:px-12">
        <header className="sticky top-0 z-30 -mx-4 mb-6 border-b border-zinc-900/75 bg-black/78 px-4 py-4 backdrop-blur-xl sm:-mx-8 sm:px-8 lg:-mx-12 lg:px-12">
          <div className="mx-auto flex max-w-[82rem] flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              <span className="text-zinc-300">{siteMeta.brand}</span>
              <span className="rounded-full border border-zinc-800/90 bg-zinc-950/80 px-3 py-1 text-[10px] text-lime-300/75">
                {siteMeta.availability}
              </span>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:gap-5">
              <button
                type="button"
                aria-pressed={isDaylight}
                aria-label={`Switch to ${isDaylight ? 'terminal' : 'daylight'} mode`}
                className="theme-toggle self-start"
                onClick={() => setTheme(isDaylight ? 'terminal' : 'daylight')}
              >
                <span className="theme-toggle__label">theme</span>
                <span className="theme-toggle__state">{isDaylight ? 'daylight' : 'terminal'}</span>
              </button>

              <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                {navigation.map((item) => (
                  <a key={item.href} href={item.href} className="transition hover:text-zinc-100">
                    {item.label}
                  </a>
                ))}
              </nav>
            </div>

            <div className="hidden text-[11px] uppercase tracking-[0.3em] text-zinc-500 lg:block">
              {siteMeta.location}
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="terminal-panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-900/90 px-5 py-4 text-[10px] uppercase tracking-[0.34em] text-zinc-500 sm:px-7">
              <span>{hero.eyebrow}</span>
              <span>session_active = true</span>
            </div>

            <div className="px-5 sm:px-7 lg:px-10">
              <HeroSection hero={hero} siteMeta={siteMeta} theme={theme} />

              <div className="space-y-0">
                <AboutSection about={about} />
                <SkillsSection skills={skills} />
                <ProjectsSection projects={projects} />
                <ExperienceSection experience={experience} />
                <ContactSection contacts={contacts} siteMeta={siteMeta} />
              </div>
            </div>
          </div>

          <AsciiDivider className="px-2 pt-8" label="end of output" />
        </main>

        <Footer siteMeta={siteMeta} />
      </div>
    </div>
  )
}

export default App
