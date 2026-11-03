const menuItems = [
  { label: 'Dashboard', icon: 'dashboard' },
  { label: 'Ventas', icon: 'sales' },
  { label: 'Productos', icon: 'products' },
  { label: 'Inventario', icon: 'inventory' },
  { label: 'Compras', icon: 'purchases' },
  { label: 'Gastos', icon: 'expenses' },
  { label: 'Reportes', icon: 'reports' },
  { label: 'Configuración', icon: 'settings' },
]

const iconPaths = {
  dashboard: 'M3 3h7v7H3z M14 3h7v7h-7z M14 14h7v7h-7z M3 14h7v7H3z',
  sales: 'M3 3h2l2.4 12.2a2 2 0 0 0 2 1.6h8.8a2 2 0 0 0 2-1.6L22 7H6 M10 21h.01 M18 21h.01',
  products: 'M12 3 3 8l9 5 9-5-9-5z M3 8v8l9 5 9-5V8 M12 13v8',
  inventory: 'M4 5h16v15H4z M8 5V3h8v2 M8 10h8 M8 14h5',
  purchases: 'M4 4h16v16H4z M8 8h8 M8 12h8 M8 16h5',
  expenses: 'M12 2v20 M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6',
  reports: 'M4 19V5 M4 19h17 M8 15l4-4 3 2 5-6',
  settings: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-1.7 2.9-.2-.1a1.7 1.7 0 0 0-1.9.3l-.1.1h-3.4l-.1-.2a1.7 1.7 0 0 0-1.6-1.1 1.7 1.7 0 0 0-.9.3l-.2.1L6.8 17l.1-.2A1.7 1.7 0 0 0 6.6 15l-.1-.1v-3.4l.2-.1a1.7 1.7 0 0 0 .8-2.5l-.1-.2 1.7-2.9.2.1a1.7 1.7 0 0 0 2.5-.8l.1-.2h3.4l.1.2a1.7 1.7 0 0 0 2.5.8l.2-.1 1.7 2.9-.1.2a1.7 1.7 0 0 0 .8 2.5l.2.1v3.4z',
}

function MenuIcon({ name }) {
  return (
    <svg
      aria-hidden="true"
      className="size-5 shrink-0"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d={iconPaths[name]} />
    </svg>
  )
}

function Sidebar({ isOpen, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-950/70 transition-opacity lg:hidden ${
          isOpen ? 'visible opacity-100' : 'invisible opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />
      <aside
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-slate-800 bg-slate-900 text-slate-300 transition-transform duration-200 lg:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center gap-3 border-b border-slate-800 px-6">
          <div className="flex size-10 items-center justify-center rounded-xl bg-emerald-500 font-bold text-slate-950">
            CM
          </div>
          <div>
            <p className="font-semibold leading-tight text-white">
              Cafetería
            </p>
            <p className="text-sm text-slate-400">Manager</p>
          </div>
        </div>

        <nav className="flex-1 space-y-1 px-4 py-6" aria-label="Menú principal">
          <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-wider text-slate-500">
            Menú
          </p>
          {menuItems.map((item, index) => {
            const isActive = index === 0

            return (
              <button
                key={item.label}
                type="button"
                onClick={onClose}
                className={`flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-400'
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <MenuIcon name={item.icon} />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="border-t border-slate-800 p-4">
          <p className="px-3 text-xs text-slate-500">Cafetería Manager</p>
        </div>
      </aside>
    </>
  )
}

export default Sidebar
