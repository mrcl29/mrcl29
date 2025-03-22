import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  useEffect(() => {
    // Inicializa la librería de partículas con la versión optimizada (slim)
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    });
  }, []);

  const options = useMemo(() => ({
    fpsLimit: 120, // Límite de FPS para optimizar rendimiento
    background: {
      color: "#000", // Color de fondo negro
    },
    interactivity: {
      events: {
        onHover: {
          enable: true, // Activa la interacción con el mouse
          mode: "grab", // Las partículas se alejan del cursor
          parallax: { enable: true, force: 70, smooth: 50 }, // Parallax desactivado
        },
        resize: true, // Ajusta partículas al cambiar tamaño de pantalla
      },
      modes: {
        grab: {
            distance: 100, // Distancia en la que las partículas se conectan
            lineLinked: {
              enable: true, // Habilita las líneas de conexión
              opacity: 0.3, // Opacidad de las líneas
              color: "#ffffff", // Color de las líneas (blanco)
              width: 1, // Grosor de las líneas
            },
          },
        }
    },
    particles: {
      color: { value: "#ffffff" }, // Color de las partículas (blanco)
      move: {
        direction: "none", // Sin dirección fija
        enable: true, // Activa el movimiento de partículas
        outModes: "out", // Si salen de la pantalla, reaparecen en otro lado
        random: true, // Movimiento aleatorio
        speed: 1, // Velocidad de movimiento de las partículas
        straight: false, // No se mueven en línea recta
      },
      number: {
        density: {
          enable: true, // Activa la distribución uniforme
          area: 100, // Cantidad de partículas por cada 100px²
        },
        value: 200, // Número total de partículas
      },
      opacity: {
        animation: {
          enable: true, // Activa la animación de opacidad
          speed: 1, // Velocidad de la animación de opacidad
          sync: false, // Cada partícula cambia su opacidad de forma independiente
          startValue: "random", // Cada partícula inicia con opacidad diferente
          count: 0, // Permite que las partículas sigan existiendo indefinidamente
          loop: true, // Hace que el ciclo de opacidad se repita (parpadeo)
        },
        value: { min: 0.2, max: 0.8 }, // Rango de opacidad (0.2 a 0.8)
      },
      shape: {
        type: "square", // Forma de las partículas (ver más opciones abajo)
      },
      size: {
        value: { min: 1, max: 4 }, // Tamaño de las partículas (entre 1px y 4px)
      },
    },
  }));

  return <Particles id="tsparticles" options={options} />;
}

export default ParticleBackground;
