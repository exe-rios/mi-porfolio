import { Navbar } from './componentes/Navbar'
import { Proyectos } from './componentes/Proyectos'
import { Contacto } from './componentes/Contacto'
import { Habilidades } from './componentes/Habilidades'
import { FondoAnimado } from './componentes/FondoAnimado'
import './App.css'

function App() {
  return (
    <div>
      <FondoAnimado />
      <Navbar />
      
      <main id="sobre-mi" className="hero-section">
        <h1 className="titulo-principal">Exequiel Rios</h1>
        <p className="subtitulo">Desarrollador de Software</p>
        <p className="descripcion">
          Estudiante de la Tecnicatura en Desarrollo de Software en ITEC El Molino. 
          Me apasiona crear soluciones eficientes, desde el diseño de bases de datos 
          hasta la lógica del backend y la creación de interfaces.
        </p>
      </main>
      <Habilidades />
      <Proyectos />
      
      {/* Agregamos el separador visual y la sección de contacto */}
      <hr style={{ borderColor: '#333', margin: '2rem auto', maxWidth: '800px' }} />
      <Contacto />
      
      {/* Un pequeño pie de página */}
      <footer style={{ textAlign: 'center', padding: '2rem', color: '#666', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} Exequiel Rios. Construido con React y Vite.
      </footer>
    </div>
  )
}

export default App