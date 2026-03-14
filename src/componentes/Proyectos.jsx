export function Proyectos() {
  const listaProyectos = [
    {
      titulo: "BikeSystem (Gestión Comercial)",
      descripcion: "Sistema integral desarrollado en Python para resolver necesidades reales de negocio. Incluye módulos críticos de control de stock, seguimiento de ventas y análisis de flujo de caja. Cuenta con una arquitectura sólida (SQL) y una interfaz gráfica robusta creada con PyQt6. El código fue refactorizado y testeado para asegurar su estabilidad en producción.",
      tecnologias: ["Python", "PyQt6", "SQL", "Testing", "Lógica de Negocio"]
    },
    {
      titulo: "Sistema de Gestión Hotelera",
      descripcion: "Aplicación de escritorio con interfaz gráfica (GUI) para la administración de un hotel. Incluye operaciones CRUD para la gestión de reservas, registro de huéspedes y control del estado de las habitaciones.",
      tecnologias: ["Python", "Tkinter", "App de Escritorio", "CRUD"]
    },
    {
      titulo: "Porfolio Personal Web",
      descripcion: "Desarrollo de una Single Page Application (SPA) moderna para presentar mi perfil profesional. Construido desde cero enfocándome en el diseño minimalista, animaciones CSS y renderizado de partículas interactivas en tiempo real.",
      tecnologias: ["React", "Vite", "JavaScript", "CSS", "HTML"]
    }
  ];

  return (
    <section
      id="proyectos"
      style={{
        padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)',
        maxWidth: '1200px',
        margin: '0 auto',
      }}
    >
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#646cff' }}>Mis Proyectos</h2>
      
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(300px, 100%), 1fr))',
          gap: '2rem',
        }}
      >
        {listaProyectos.map((proyecto, index) => (
          <div
            key={index}
            className="tarjeta-animada"
            style={{
              backgroundColor: '#2a2a2a',
              padding: 'clamp(1.25rem, 4vw, 2rem)',
              borderRadius: '10px',
              border: '1px solid #444',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>{proyecto.titulo}</h3>
            <p style={{ color: '#bbb', lineHeight: '1.6', marginBottom: '1.5rem', minHeight: '100px' }}>
              {proyecto.descripcion}
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              {proyecto.tecnologias.map((tech, i) => (
                <span key={i} style={{ backgroundColor: '#1a1a1a', color: '#fff', padding: '0.3rem 0.8rem', borderRadius: '20px', fontSize: '0.85rem', border: '1px solid #444' }}>
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}