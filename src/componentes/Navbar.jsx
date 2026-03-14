export function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="navbar-logo">ER</h2>
      <ul className="navbar-links">
        <li>
          <a
            href="#sobre-mi"
            className="navbar-link"
          >
            Sobre Mí
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            className="navbar-link"
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            className="navbar-link"
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}