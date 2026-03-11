export function Navbar() {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem 0', borderBottom: '1px solid #333' }}>
      <h2 style={{ 
  margin: 0, 
  fontSize: '2.2rem',
  background: 'linear-gradient(to right, #00f2fe, #4facfe)', 
  WebkitBackgroundClip: 'text', 
  WebkitTextFillColor: 'transparent',
  fontWeight: '900',
  letterSpacing: '-2px'
}}>
  ER<span style={{ color: '#00f2fe', WebkitTextFillColor: 'initial' }}></span>
</h2>
      <ul style={{ listStyle: 'none', display: 'flex', gap: '2rem', margin: 0, padding: 0 }}>
        <li><a href="#sobre-mi" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Sobre Mí</a></li>
        <li><a href="#proyectos" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Proyectos</a></li>
        <li><a href="#contacto" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>Contacto</a></li>
      </ul>
    </nav>
  )
}