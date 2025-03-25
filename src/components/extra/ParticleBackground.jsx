import { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

function ParticleBackground() {
  useEffect(() => {
    // Inicializa la librería de partículas con la versión optimizada (slim)
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Carga la versión ligera del motor para optimización
    });
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  const options = useMemo(() => ({
    fpsLimit: 120, // Límite de FPS para optimizar rendimiento
    baskground: {
      color: "#000000",
    },
    interactivity: {
      events: {
        onHover: {
          enable: true, // Activa la interacción con el mouse
          mode: "grab", // Las partículas se conectan entre sí cuando el cursor pasa cerca
          parallax: {
            enable: true, // Activa el efecto de parallax
            force: 40, // Fuerza del efecto parallax (cuánto se mueven las partículas al pasar el ratón)
            smooth: 70, // Suaviza el movimiento del parallax
          },
        },
        resize: {
          delay: 0.5, // Retraso en la actualización al cambiar el tamaño de la ventana
          enable: true, // Habilita el ajuste dinámico de partículas al cambiar el tamaño
        },
      },
      modes: {
        grab: {
          distance: 100, // Distancia en la que las partículas se conectan al pasar el cursor cerca
          lineLinked: {
            enable: true, // Habilita las líneas de conexión entre las partículas
            opacity: 0.3, // Opacidad de las líneas de conexión
            color: "#ffffff", // Color de las líneas de conexión (blanco)
            width: 1, // Grosor de las líneas de conexión
          },
        },
      },
      connect: {
        distance: 90, // Distancia a la que las partículas se conectan entre ellas
        links: {
          opacity: 0.4, // Opacidad de las líneas de conexión entre partículas
        },
        radius: 60, // Radio en el que las partículas se conectan entre sí
      },
    },
    particles: {
      color: { value: "#ffffff" }, // Color de las partículas (blanco)
      move: {
        direction: "none", // Sin dirección fija para el movimiento de las partículas
        enable: true, // Habilita el movimiento de las partículas
        outModes: {
          default: "bounce", // Hace que las partículas reboten en lugar de desaparecer al llegar al borde
        },
        random: true, // Movimiento aleatorio de las partículas
        speed: 1, // Velocidad del movimiento de las partículas
        straight: false, // Las partículas no se mueven en línea recta
      },
      number: {
        density: {
          enable: true, // Habilita la distribución uniforme de partículas
          area: 100, // Cantidad de partículas por área (por cada 100px²)
        },
        value: 350, // Número total de partículas en la pantalla
      },
      opacity: {
        animation: {
          enable: true, // Activa la animación de opacidad de las partículas
          speed: 1, // Velocidad de la animación de opacidad
          sync: false, // Las partículas cambian la opacidad de forma independiente
          startValue: "random", // Cada partícula comienza con un valor de opacidad aleatorio
          count: 0, // Número de ciclos de opacidad (cero significa que no se limita)
          loop: true, // Hace que las partículas parpadeen (ciclo de opacidad)
        },
        value: { min: 0.2, max: 0.6 }, // Rango de opacidad (de 0.2 a 0.8)
      },
      shape: {
        type: "square", // Forma de las partículas (en este caso, cuadrados)
      },
      size: {
        value: { min: 0.5, max: 3 }, // Tamaño de las partículas (entre 0.5px y 3px)
      },
      links: {
        blink: false, // Desactiva el parpadeo de las líneas de conexión
        color: {
          value: "#ffffff", // Color de las líneas de conexión
        },
        consent: false, // No se requiere consentimiento para mostrar las líneas de conexión
        distance: 100, // Distancia a la que las partículas se conectan entre ellas
        enable: true, // Habilita las líneas de conexión entre las partículas
        frequency: 0.8, // Frecuencia con la que se generan las conexiones
        opacity: 0.2, // Opacidad de las líneas de conexión
        shadow: {
          blur: 5, // Desenfoque de las sombras de las líneas de conexión
          color: {
            value: "lime", // Color de la sombra (verde lima)
          },
          enable: false, // Desactiva las sombras de las líneas de conexión
        },
        triangles: {
          enable: false, // Desactiva la generación de triángulos entre partículas
          frequency: 1, // Frecuencia de la aparición de triángulos (no se activan en este caso)
        },
        width: 1, // Ancho de las líneas de conexión
        warp: true, // Desactiva el efecto de distorsión de las líneas de conexión
      },
    },
  }));

  // Estilos CSS para asegurar que las partículas se carguen en el fondo
  const particlesStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Asegura que las partículas estén detrás de otros elementos
  };

  // Devuelve el componente Particles con las opciones configuradas
  return (
    <Particles id="tsparticles" options={options} style={particlesStyle} />
  );
}

export default ParticleBackground;
