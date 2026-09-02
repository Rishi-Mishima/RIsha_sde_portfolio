import { useState } from 'react'
import profileImageOne from '../assets/profile/profile-1.jpg'
import profileImageTwo from '../assets/profile/profile-2.jpg'
import profileImageThree from '../assets/profile/profile-3.jpg'
import profileImageFour from '../assets/profile/profile-4.jpg'
import AsciiDivider from '../components/AsciiDivider'
import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'

const profileImages = [
  {
    src: profileImageOne,
    alt: 'Profile image frame 1',
  },
  {
    src: profileImageTwo,
    alt: 'Profile image frame 2',
  },
  {
    src: profileImageThree,
    alt: 'Profile image frame 3',
  },
  {
    src: profileImageFour,
    alt: 'Profile image frame 4',
  },
]

function AboutSection({ about, hero }) {
  const [profileImageIndex, setProfileImageIndex] = useState(0)
  const activeProfileImage = profileImages[profileImageIndex]

  const showPreviousProfileImage = () => {
    setProfileImageIndex((currentIndex) =>
      currentIndex === 0 ? profileImages.length - 1 : currentIndex - 1,
    )
  }

  const showNextProfileImage = () => {
    setProfileImageIndex((currentIndex) =>
      currentIndex === profileImages.length - 1 ? 0 : currentIndex + 1,
    )
  }

  return (
    <section id="about" className="section-shell space-y-10 sm:space-y-12">
      <SectionHeading
        index={1}
        title="About"
        subtitle={about.summary}
        subtitleClassName="about-quote max-w-none text-center lg:max-w-[42rem]"
      />

      <div className="grid gap-6 lg:grid-cols-[minmax(280px,0.78fr)_minmax(0,1.22fr)] lg:gap-8">
        <div>
          <div className="terminal-card overflow-hidden p-3 sm:p-4">
            <div className="relative overflow-hidden rounded-[1.35rem] border border-zinc-900/90 bg-zinc-950">
              <div className="absolute inset-x-0 top-0 z-10 flex items-center justify-between border-b border-zinc-900/90 bg-black/72 px-4 py-3 text-[10px] uppercase tracking-[0.32em] text-zinc-500">
                <span>profile/image</span>
                <span>reserved</span>
              </div>
              <div className="profile-image-shell aspect-[4/5]">
                <div className="profile-viewer">
                  <img
                    src={activeProfileImage.src}
                    alt={activeProfileImage.alt}
                    className="profile-viewer__image"
                  />

                  <div className="profile-viewer__controls" aria-label="Profile image controls">
                    <button
                      type="button"
                      className="profile-viewer__button"
                      onClick={showPreviousProfileImage}
                      aria-label="Show previous profile image"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                        <path
                          d="M15 18 9 12l6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>

                    <span className="profile-viewer__count">
                      {String(profileImageIndex + 1).padStart(2, '0')}/
                      {String(profileImages.length).padStart(2, '0')}
                    </span>

                    <button
                      type="button"
                      className="profile-viewer__button"
                      onClick={showNextProfileImage}
                      aria-label="Show next profile image"
                    >
                      <svg viewBox="0 0 24 24" aria-hidden="true" className="h-4 w-4">
                        <path
                          d="m9 18 6-6-6-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
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
        </div>
      </div>
    </section>
  )
}

export default AboutSection
