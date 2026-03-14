// Importamos los íconos que vamos a usar
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

export function Contacto() {
  const cvUrl = `${import.meta.env.BASE_URL}Exequiel_Rios_CV.pdf`;

  return (
    <section
      id="contacto"
      style={{
        padding: 'clamp(2.5rem, 6vw, 4rem) clamp(1rem, 4vw, 2rem)',
        maxWidth: '800px',
        margin: '0 auto',
        textAlign: 'center',
        position: 'relative',
        zIndex: 1,
      }}
    >
      <h2 style={{ fontSize: 'clamp(1.9rem, 4.5vw, 2.5rem)', marginBottom: '1rem', color: '#646cff' }}>Contacto</h2>
      
      <p style={{ color: '#bbb', marginBottom: '1rem', fontSize: 'clamp(1rem, 2.6vw, 1.2rem)' }}>
        ¿Interesado en trabajar juntos o tenés alguna pregunta? ¡Hablemos!
      </p>
      
      <p style={{ color: '#888', marginBottom: '3rem' }}>
        📍 Esperanza, Santa Fe, Argentina
      </p>
      
      {/* Contenedor de los botones principales */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
        
        {/* Botón de Correo */}
        <a 
          href="https://mail.google.com/mail/?view=cm&fs=1&to=eriosdeveloper@gmail.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 'clamp(0.7rem, 2.5vw, 0.8rem) clamp(1.05rem, 4vw, 1.5rem)', backgroundColor: '#646cff', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', transition: '0.3s' }}>
          <FaEnvelope /> Enviarme un Correo
        </a>

        {/* Botón de LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/exequiel-rios-465343252" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 'clamp(0.7rem, 2.5vw, 0.8rem) clamp(1.05rem, 4vw, 1.5rem)', backgroundColor: '#0a66c2', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          <FaLinkedin /> LinkedIn
        </a>

        {/* Botón de GitHub */}
        <a 
          href="https://github.com/exe-rios" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: 'clamp(0.7rem, 2.5vw, 0.8rem) clamp(1.05rem, 4vw, 1.5rem)', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', border: '1px solid #555' }}>
          <FaGithub /> GitHub
        </a>
      </div>

      {/* Botón destacado para el CV */}
      <div style={{ marginTop: '2rem', borderTop: '1px solid #333', paddingTop: '2rem' }}>
        <a 
          href={cvUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: 'clamp(0.85rem, 3vw, 1rem) clamp(1.25rem, 5vw, 2rem)', backgroundColor: 'transparent', color: '#646cff', border: '2px solid #646cff', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: 'clamp(1rem, 3.2vw, 1.1rem)', transition: '0.3s' }}>
          <FaFileDownload /> Descargar CV
        </a>
      </div>

    </section>
  )
}