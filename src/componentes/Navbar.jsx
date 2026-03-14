export function Navbar() {
  return (
    <nav
      className="navbar"
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem',
        padding: '1rem 0',
        borderBottom: '1px solid #333',
      }}
    >
      <h2
        className="navbar-logo"
        style={{
          margin: 0,
          fontSize: 'clamp(1.6rem, 5vw, 2.2rem)',
          background: 'linear-gradient(to right, #00f2fe, #4facfe)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: '900',
          letterSpacing: '-2px',
          flex: '0 0 auto',
        }}
      >
        ER<span style={{ color: '#00f2fe', WebkitTextFillColor: 'initial' }}></span>
      </h2>
      <ul
        className="navbar-links"
        style={{
          listStyle: 'none',
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 'clamp(0.75rem, 2vw, 2rem)',
          margin: 0,
          padding: 0,
          flex: '1 1 320px',
        }}
      >
        <li>
          <a
            href="#sobre-mi"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              padding: '0.35rem 0.5rem',
              whiteSpace: 'nowrap',
            }}
          >
            Sobre Mí
          </a>
        </li>
        <li>
          <a
            href="#proyectos"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              padding: '0.35rem 0.5rem',
              whiteSpace: 'nowrap',
            }}
          >
            Proyectos
          </a>
        </li>
        <li>
          <a
            href="#contacto"
            style={{
              color: '#fff',
              textDecoration: 'none',
              fontWeight: 'bold',
              display: 'inline-block',
              padding: '0.35rem 0.5rem',
              whiteSpace: 'nowrap',
            }}
          >
            Contacto
          </a>
        </li>
      </ul>
    </nav>
  )
}