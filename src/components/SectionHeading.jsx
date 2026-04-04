function SectionHeading({ index, title, subtitle, subtitleClassName = '' }) {
  return (
    <div className="space-y-5 lg:sticky lg:top-28">
      <p className="section-kicker">
        [{index.toString().padStart(2, '0')}] {title}
      </p>
      <h2 className="display-title max-w-sm text-3xl sm:text-4xl">{title}</h2>
      <p className={`max-w-md text-sm leading-8 text-zinc-400 sm:text-base ${subtitleClassName}`}>{subtitle}</p>
    </div>
  )
}

export default SectionHeading
