import { useEffect, useState } from 'react'
import SectionPage from '../../../components/ui/SectionPage.jsx'
import { getApiHealth } from '../../../services/healthService.js'

function DashboardPage() {
  const [health, setHealth] = useState({ status: 'checking', application: '' })

  useEffect(() => {
    let isMounted = true

    getApiHealth()
      .then((response) => {
        if (isMounted) {
          setHealth({
            status: 'connected',
            application: response.application,
          })
        }
      })
      .catch(() => {
        if (isMounted) {
          setHealth({ status: 'error', application: '' })
        }
      })

    return () => {
      isMounted = false
    }
  }, [])

  const statusStyles = {
    checking: 'border-slate-700 bg-slate-800/60 text-slate-300',
    connected: 'border-emerald-500/30 bg-emerald-500/10 text-emerald-300',
    error: 'border-red-500/30 bg-red-500/10 text-red-300',
  }

  return (
    <div className="space-y-4">
      <SectionPage
        title="Dashboard"
        description="Resumen general de la actividad de la cafetería."
      />

      <section
        className={`rounded-xl border p-5 ${statusStyles[health.status]}`}
        aria-live="polite"
      >
        {health.status === 'checking' && <p>Comprobando conexión...</p>}
        {health.status === 'connected' && (
          <div>
            <p className="font-medium">Backend conectado</p>
            {health.application && (
              <p className="mt-1 text-sm opacity-80">{health.application}</p>
            )}
          </div>
        )}
        {health.status === 'error' && <p>Error de conexión</p>}
      </section>
    </div>
  )
}

export default DashboardPage
