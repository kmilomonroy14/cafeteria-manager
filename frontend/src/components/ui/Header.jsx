function Header({ title, onMenuClick }) {
  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b border-slate-800 bg-slate-950/95 px-4 backdrop-blur sm:px-6 lg:px-8">
      <button
        type="button"
        onClick={onMenuClick}
        aria-label="Abrir menú"
        className="rounded-lg p-2 text-slate-300 hover:bg-slate-800 hover:text-white lg:hidden"
      >
        <svg
          aria-hidden="true"
          className="size-5"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
      <div>
        <p className="text-xs font-medium text-slate-500">Cafetería Manager</p>
        <h1 className="text-lg font-semibold text-white">{title}</h1>
      </div>
    </header>
  )
}

export default Header
