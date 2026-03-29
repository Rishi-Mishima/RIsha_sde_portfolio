function AsciiDivider({ dense = false, label, className = '' }) {
  const content = dense
    ? '<------------------------------>'
    : '/--------------------------::--------------------------/'

  return (
    <div className={`ascii-rule flex items-center gap-3 py-2 ${className}`} aria-hidden="true">
      <span className="shrink-0 whitespace-nowrap">{content}</span>
      <span className="h-px w-full bg-gradient-to-r from-zinc-800 via-zinc-900 to-transparent" />
      {label ? <span className="shrink-0 text-zinc-700">{label}</span> : null}
    </div>
  )
}

export default AsciiDivider
