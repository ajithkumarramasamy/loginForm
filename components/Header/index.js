import {Link} from 'react-router-dom'

import './index.css'

const Header = () => {
  const name = 'aji'

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <ul className="nav-menu">
          <li>
            <Link to="/movies" className="nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/company-info" className="nav-link">
              Company Info
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default Header
