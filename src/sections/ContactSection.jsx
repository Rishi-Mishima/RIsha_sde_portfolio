import SectionHeading from '../components/SectionHeading'
import TerminalWindow from '../components/TerminalWindow'

function ContactSection({ contacts }) {
  return (
    <section id="contact" className="section-shell grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-14">
      <SectionHeading
        index={5}
        title="Contact"
        subtitle="Direct channels only. The structure stays minimal until there is a real workflow or backend behind a contact form."
        note="outreach"
      />

      <TerminalWindow title="contact/channels">
        <div className="space-y-10">
          <div className="space-y-4">
            <p className="max-w-2xl text-sm leading-8 text-zinc-300 sm:text-base">
              If you&apos;re hiring for backend, AI agent, RAG, platform, or full-stack roles
              with diverse experiences, I&apos;m interested in thoughtful conversations with
              strong ownership and technical depth.
            </p>
            <p className="text-[11px] uppercase tracking-[0.3em] text-zinc-500">
              preferred location = The Netherlands
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {contacts.map((contact) => (
              <a
                key={contact.label}
                href={contact.href}
                className="rounded-[1.5rem] border border-zinc-900/90 bg-black/38 px-5 py-5 transition duration-300 hover:border-lime-300/28 hover:bg-zinc-950/78"
              >
                <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-zinc-500">
                  {contact.label}
                </p>
                <p className="mb-3 text-sm text-zinc-100">{contact.value}</p>
                <p className="text-sm leading-7 text-zinc-400">{contact.detail}</p>
              </a>
            ))}
          </div>
        </div>
      </TerminalWindow>
    </section>
  )
}

export default ContactSection
