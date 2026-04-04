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
const socialLinks = [
  {
    label: 'Instagram',
    href: 'https://instagram.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
        <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: 'GitHub',
    href: 'https://github.com/Rishi-Mishima/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M12 .7a12 12 0 0 0-3.8 23.4c.6.1.8-.2.8-.6v-2.1c-3.4.7-4.1-1.4-4.1-1.4-.6-1.5-1.4-1.9-1.4-1.9-1.2-.8.1-.8.1-.8 1.3.1 2 .9 2 .9 1.2 1.9 3.1 1.4 3.8 1.1.1-.8.5-1.4.9-1.7-2.7-.3-5.5-1.3-5.5-6A4.7 4.7 0 0 1 6.9 8c-.1-.3-.5-1.5.1-3.1 0 0 1-.3 3.2 1.2a11.3 11.3 0 0 1 5.8 0c2.2-1.5 3.2-1.2 3.2-1.2.6 1.6.2 2.8.1 3.1a4.7 4.7 0 0 1 1.3 3.3c0 4.7-2.8 5.7-5.5 6 .5.4 1 1.2 1 2.5v3.7c0 .4.2.7.8.6A12 12 0 0 0 12 .7" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: 'https://linkedin.com/',
    icon: (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4 fill-current">
        <path d="M4.98 3.5A2.48 2.48 0 1 0 5 8.46a2.48 2.48 0 0 0-.02-4.96M3.1 9.8h3.77V21H3.1zm6.13 0H12.84v1.53h.05c.5-.96 1.73-1.97 3.56-1.97 3.8 0 4.5 2.5 4.5 5.74V21h-3.77v-5.2c0-1.24-.02-2.83-1.72-2.83-1.72 0-1.98 1.35-1.98 2.74V21H9.23z" />
      </svg>
    ),
  },
]

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

  useEffect(() => {
    const root = document.documentElement
    let pointerFrame = 0
    let scrollFrame = 0

    const updatePointer = (x, y) => {
      root.style.setProperty('--cursor-x', `${x}px`)
      root.style.setProperty('--cursor-y', `${y}px`)
    }

    const updateScroll = () => {
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1,
      )
      const progress = Math.min(window.scrollY / maxScroll, 1)
      root.style.setProperty('--scroll-progress', progress.toFixed(4))
    }

    const handlePointerMove = (event) => {
      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame)
      }

      pointerFrame = window.requestAnimationFrame(() => {
        updatePointer(event.clientX, event.clientY)
      })
    }

    const handleScroll = () => {
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame)
      }

      scrollFrame = window.requestAnimationFrame(updateScroll)
    }

    updatePointer(window.innerWidth * 0.5, window.innerHeight * 0.3)
    updateScroll()

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleScroll)

    return () => {
      if (pointerFrame) {
        window.cancelAnimationFrame(pointerFrame)
      }
      if (scrollFrame) {
        window.cancelAnimationFrame(scrollFrame)
      }
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  const isDaylight = theme === 'daylight'

  return (
    <div
      className={`app-shell min-h-screen transition-colors duration-500 ${isDaylight ? 'bg-stone-100 text-stone-950' : 'bg-black text-zinc-100'}`}
    >
      <div aria-hidden="true" className={`global-effects ${isDaylight ? 'is-daylight' : ''}`}>
        <svg className="scroll-fireworks" viewBox="0 0 100 100" preserveAspectRatio="none">
          <path
            className="scroll-fireworks__line scroll-fireworks__line--left"
            d="M14 0 C 6 18, 8 38, 23 55 S 43 86, 31 100"
          />
          <path
            className="scroll-fireworks__line scroll-fireworks__line--right"
            d="M86 0 C 94 18, 92 38, 77 55 S 57 86, 69 100"
          />
        </svg>
        <div className="mouse-aura" />
        <div className="mouse-core" />
      </div>

      <div className="mx-auto flex min-h-screen w-full max-w-[88rem] flex-col px-4 pb-10 pt-4 sm:px-8 sm:pt-6 lg:px-12">
        <header className="sticky top-3 z-40 mb-6 sm:top-4">
          <div className="header-glass mx-auto flex max-w-[82rem] flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
            <div className="flex items-center justify-between gap-4 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              <span className="text-zinc-300">{siteMeta.brand}</span>
              <button
                type="button"
                role="switch"
                aria-checked={isDaylight}
                aria-label={`Switch to ${isDaylight ? 'terminal' : 'daylight'} mode`}
                className="theme-switch"
                onClick={() => setTheme(isDaylight ? 'terminal' : 'daylight')}
              >
                <span className="theme-switch__label">daylight</span>
                <span className={`theme-switch__track ${isDaylight ? 'is-on' : ''}`}>
                  <span className="theme-switch__thumb">
                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-3.5 w-3.5">
                      <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                      <path
                        d="M12 1.8v2.5M12 19.7v2.5M4.8 4.8l1.8 1.8M17.4 17.4l1.8 1.8M1.8 12h2.5M19.7 12h2.5M4.8 19.2l1.8-1.8M17.4 6.6l1.8-1.8"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </span>
                </span>
              </button>
            </div>

            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} className="transition hover:text-zinc-100">
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="hidden text-[11px] uppercase tracking-[0.3em] text-zinc-500 lg:block">
              {siteMeta.location}
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="terminal-panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-zinc-900/90 px-5 py-4 text-[10px] uppercase tracking-[0.34em] text-zinc-500 sm:px-7">
              <span className="text-zinc-400">connect</span>
              <div className="flex items-center gap-2 sm:gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={link.label}
                    className="social-link"
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="px-5 sm:px-7 lg:px-10">
              <HeroSection hero={hero} siteMeta={siteMeta} theme={theme} />

              <div className="space-y-0">
                <AboutSection about={about} hero={hero} />
                <SkillsSection skills={skills} />
                <ProjectsSection projects={projects} />
                <ExperienceSection experience={experience} />
                <ContactSection contacts={contacts} siteMeta={siteMeta} />
              </div>
            </div>
          </div>

        </main>

        <Footer siteMeta={siteMeta} />
      </div>
    </div>
  )
}

export default App
