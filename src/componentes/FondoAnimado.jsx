import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function FondoAnimado() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const options = {
    background: {
      color: { value: "transparent" }, // Transparente para usar el color del body
    },
    fpsLimit: 60,
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "grab", // Efecto de telaraña conectándose al mouse
        },
      },
      modes: {
        grab: {
          distance: 150,
          links: { opacity: 0.5 },
        },
      },
    },
    particles: {
      color: { value: "#646cff" }, // Color de los puntos
      links: {
        color: "#646cff", // Color de las líneas
        distance: 150,
        enable: true,
        opacity: 0.2,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1, // Velocidad suave
      },
      number: {
        value: 50, // Cantidad de puntos (50 es ideal para no trabar la PC)
      },
      opacity: { value: 0.5 },
      size: { value: { min: 1, max: 2 } },
    },
    detectRetina: true,
  };

  if (init) {
    return (
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
        <Particles id="tsparticles" options={options} />
      </div>
    );
  }

  return null;
}