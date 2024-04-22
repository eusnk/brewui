import { Link, Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <div className="content">
      <nav>
        <Link to="/">
          <img src="/logo.png" alt="logo" />
        </Link>
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/docs">Docs</Link>
            <Link to="/components">Components</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <footer>
        <div>
          <p>
            Designed and Developed by <a href="https://github.com/eusnk/brewui">eusnk</a>
          </p>
        </div>
      </footer>
    </div>
  )
}
