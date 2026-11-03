import { useState } from 'react'
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router'
import Header from '../components/ui/Header.jsx'
import Sidebar from '../components/ui/Sidebar.jsx'
import DashboardPage from '../features/dashboard/pages/DashboardPage.jsx'
import ExpensesPage from '../features/expenses/pages/ExpensesPage.jsx'
import InventoryPage from '../features/inventory/pages/InventoryPage.jsx'
import ProductsPage from '../features/products/pages/ProductsPage.jsx'
import PurchasesPage from '../features/purchases/pages/PurchasesPage.jsx'
import ReportsPage from '../features/reports/pages/ReportsPage.jsx'
import SalesPage from '../features/sales/pages/SalesPage.jsx'
import SettingsPage from '../features/settings/pages/SettingsPage.jsx'

const sectionTitles = {
  '/': 'Dashboard',
  '/ventas': 'Ventas',
  '/productos': 'Productos',
  '/inventario': 'Inventario',
  '/compras': 'Compras',
  '/gastos': 'Gastos',
  '/reportes': 'Reportes',
  '/configuracion': 'Configuración',
}

function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      <div className="lg:pl-72">
        <Header
          title={sectionTitles[pathname] ?? 'Dashboard'}
          onMenuClick={() => setIsSidebarOpen((open) => !open)}
        />

        <main className="mx-auto max-w-7xl p-4 sm:p-6 lg:p-8">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/ventas" element={<SalesPage />} />
            <Route path="/productos" element={<ProductsPage />} />
            <Route path="/inventario" element={<InventoryPage />} />
            <Route path="/compras" element={<PurchasesPage />} />
            <Route path="/gastos" element={<ExpensesPage />} />
            <Route path="/reportes" element={<ReportsPage />} />
            <Route path="/configuracion" element={<SettingsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  )
}

export default App
