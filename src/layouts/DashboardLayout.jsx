import Sidebar from '../components/Sidebar.jsx'
import Header from '../components/Header.jsx'

function DashboardLayout({ children, activePage }) {
  return (
    <div className="dashboard-layout">
      <Sidebar activePage={activePage} />
      <div className="dashboard-body">
        <Header />
        <main className="dashboard-content">{children}</main>
      </div>
    </div>
  )
}

export default DashboardLayout

