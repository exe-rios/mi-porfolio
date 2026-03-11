// Importamos los íconos que vamos a usar
import { FaEnvelope, FaLinkedin, FaGithub, FaFileDownload } from 'react-icons/fa';

export function Contacto() {
  return (
    <section id="contacto" style={{ padding: '4rem 2rem', maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
      <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#646cff' }}>Contacto</h2>
      
      <p style={{ color: '#bbb', marginBottom: '1rem', fontSize: '1.2rem' }}>
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
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', backgroundColor: '#646cff', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', transition: '0.3s' }}>
          <FaEnvelope /> Enviarme un Correo
        </a>

        {/* Botón de LinkedIn */}
        <a 
          href="https://www.linkedin.com/in/exequiel-rios-465343252" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', backgroundColor: '#0a66c2', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold' }}>
          <FaLinkedin /> LinkedIn
        </a>

        {/* Botón de GitHub */}
        <a 
          href="https://github.com/exe-rios" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.8rem 1.5rem', backgroundColor: '#333', color: '#fff', textDecoration: 'none', borderRadius: '5px', fontWeight: 'bold', border: '1px solid #555' }}>
          <FaGithub /> GitHub
        </a>
      </div>

      {/* Botón destacado para el CV */}
      <div style={{ marginTop: '2rem', borderTop: '1px solid #333', paddingTop: '2rem' }}>
        <a 
          href="/Exequiel_Rios_CV.pdf" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', padding: '1rem 2rem', backgroundColor: 'transparent', color: '#646cff', border: '2px solid #646cff', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '1.1rem', transition: '0.3s' }}>
          <FaFileDownload /> Descargar CV
        </a>
      </div>

    </section>
  )
}