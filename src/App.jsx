import { useEffect, useState } from 'react'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Products from './pages/Products.jsx'
import Orders from './pages/Orders.jsx'
import Customers from './pages/Customers.jsx'
import Settings from './pages/Settings.jsx'

const pages = { dashboard: Dashboard, products: Products, orders: Orders, customers: Customers, settings: Settings }

function getPage() {
  const page = window.location.hash.slice(1)
  return Object.hasOwn(pages, page) ? page : 'dashboard'
}

function App() {
  const [page, setPage] = useState(getPage)
  useEffect(() => {
    const handleHashChange = () => setPage(getPage())
    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])
  const Page = pages[page]
  return <DashboardLayout activePage={page}><Page /></DashboardLayout>
}

export default App
