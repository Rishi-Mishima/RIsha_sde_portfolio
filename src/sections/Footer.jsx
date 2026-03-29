function Footer({ siteMeta }) {
  return (
    <footer className="flex flex-col gap-3 py-6 text-[11px] uppercase tracking-[0.28em] text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
      <p>© 2026 {siteMeta.brand}</p>
      <p>{'<built_with react + vite + tailwind />'}</p>
    </footer>
  )
}

export default Footer
