import { Link, useLocation } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  const location = useLocation()

  const navItems = [
    { path: '/khai-niem', label: 'Khái Niệm' },
    { path: '/vi-du', label: 'Ví Dụ' },
    { path: '/y-nghia', label: 'Ý Nghĩa' },
    { path: 'https://youtube.com/watch?v=dQw4w9WgXcQ', label: 'Sự Kiện Lớp' },
    { path: '/ai-usage', label: 'AI Usage' }
  ]

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <span className="logo-text">Thặng Dư Siêu Ngạch</span>
          <span className="logo-subtitle">Beyond the Surplus</span>
        </Link>
        
        <ul className="nav-menu">
          {navItems.map((item) => (
            <li key={item.path} className="nav-item">
              <Link
                to={item.path}
                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar