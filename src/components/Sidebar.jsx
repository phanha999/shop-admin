const menuItems = [
  { page: 'dashboard', label: 'Dashboard' },
  { page: 'products', label: 'Products' },
  { page: 'orders', label: 'Orders' },
  { page: 'customers', label: 'Customers' },
  { page: 'settings', label: 'Settings' },
]

function Sidebar({ activePage = 'dashboard' }) {
  return (
    <aside className="sidebar">
      <h2>Shop Admin</h2>
      <nav aria-label="Menu chính">
        {menuItems.map(({ page, label }) => (
          <a
            key={page}
            className={`nav-link${activePage === page ? ' active' : ''}`}
            href={`#${page}`}
            aria-current={activePage === page ? 'page' : undefined}
          >
            {label}
          </a>
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
