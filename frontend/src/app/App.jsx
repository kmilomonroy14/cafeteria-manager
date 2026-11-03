import { useState } from 'react'
import Header from '../components/ui/Header.jsx'
import Sidebar from '../components/ui/Sidebar.jsx'
import SummaryCard from '../components/ui/SummaryCard.jsx'

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-72">
        <Header
          title="Dashboard"
          onMenuClick={() => setIsSidebarOpen((open) => !open)}
        />

        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-white">Resumen</h2>
            <p className="mt-1 text-sm text-slate-400">
              Vista general de la cafetería
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            <SummaryCard title="Ventas del día" />
            <SummaryCard title="Gastos del día" />
            <SummaryCard title="Productos registrados" />
          </div>
        </main>
      </div>
    </div>
  )
}

export default App
