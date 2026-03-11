// Importamos los logos de las tecnologías
import { FaPython, FaJava, FaDatabase, FaReact, FaJs, FaHtml5, FaCss3Alt, FaGitAlt, FaDesktop, FaVial, FaCogs } from 'react-icons/fa';

export function Habilidades() {
  // Ahora cada habilidad es un objeto con su nombre y su ícono a color
  const categorias = [
    {
      titulo: "Backend & Datos",
      skills: [
        { nombre: "Python", icono: <FaPython color="#3776AB" /> },
        { nombre: "Java", icono: <FaJava color="#ED8B00" /> },
        { nombre: "SQL", icono: <FaDatabase color="#336791" /> }
      ]
    },
    {
      titulo: "Frontend & Web",
      skills: [
        { nombre: "React", icono: <FaReact color="#61DAFB" /> },
        { nombre: "JavaScript", icono: <FaJs color="#F7DF1E" /> },
        { nombre: "HTML5", icono: <FaHtml5 color="#E34F26" /> },
        { nombre: "CSS3", icono: <FaCss3Alt color="#1572B6" /> },
        { nombre: "Vite", icono: <FaCogs color="#646CFF" /> }
      ]
    },
    {
      titulo: "Herramientas & Prácticas",
      skills: [
        { nombre: "Git", icono: <FaGitAlt color="#F05032" /> },
        { nombre: "PyQt6 / Tkinter", icono: <FaDesktop color="#bbb" /> },
        { nombre: "Testing", icono: <FaVial color="#28A745" /> },
        { nombre: "Arquitectura CRUD", icono: <FaCogs color="#bbb" /> }
      ]
    }
  ];

  return (
    <section id="habilidades" style={{ padding: '4rem 2rem', maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '3rem', color: '#646cff' }}>Habilidades Técnicas</h2>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
        {categorias.map((cat, index) => (
          <div key={index} className="tarjeta-animada" style={{ backgroundColor: '#1a1a1a', padding: '2rem', borderRadius: '15px', border: '1px solid #333' }}>
            
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.5rem', color: '#fff', textAlign: 'center', borderBottom: '1px solid #333', paddingBottom: '1rem' }}>
              {cat.titulo}
            </h3>
            
            {/* Cambiamos el flex wrap por una grilla interna ordenada de 2 columnas */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem' }}>
              {cat.skills.map((skill, i) => (
                <div key={i} className="etiqueta-skill" style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', backgroundColor: '#252525', padding: '0.8rem', borderRadius: '8px', border: '1px solid #444' }}>
                  <span style={{ fontSize: '1.5rem', display: 'flex' }}>
                    {skill.icono}
                  </span>
                  <span style={{ color: '#eee', fontSize: '0.9rem', fontWeight: 'bold' }}>
                    {skill.nombre}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  )
}