function TerminalWindow({ title, children, className = '', contentClassName = '' }) {
  return (
    <div className={`terminal-window ${className}`}>
      <div className="flex items-center justify-between border-b border-zinc-900/90 px-5 py-4 text-[10px] uppercase tracking-[0.32em] text-zinc-500 sm:px-6">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-zinc-700" />
          <span className="h-2 w-2 rounded-full bg-lime-300/75" />
        </div>
        <span>{title}</span>
      </div>
      <div className={`p-6 sm:p-8 ${contentClassName}`}>{children}</div>
    </div>
  )
}

export default TerminalWindow
