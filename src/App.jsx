import { useState, useRef, useEffect } from "react";
import "@/App.css";
import ParticleBackground from "@/components/extra/ParticleBackground.jsx";
import FixedLayout from "@/components/layouts/FixedLayout.jsx";
import MainLayout from "@/components/layouts/MainLayout.jsx";
import Home from "@/components/pages/Home.jsx";
import Projects from "@/components/pages/Projects.jsx";
import Experience from "@/components/pages/Experience.jsx";
import Education from "@/components/pages/Education.jsx";
import useIsMobile from "@/components/hooks/useIsMobile.jsx";

function App() {
  const isMobile = useIsMobile(); // Detecta si es móvil
  const [currentPage, setCurrentPage] = useState("main");

  // Refs para las secciones de contenido
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);

  const sectionRefs = {
    main: homeRef,
    proyectos: projectsRef,
    experiencia: experienceRef,
    educacion: educationRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Función para observar cuando una sección está en vista
  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // Margin around the root
      threshold: 0.5, // 50% of the section must be visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // Si la sección está visible, actualizamos el currentPage
        if (entry.isIntersecting) {
          setCurrentPage(entry.target.id); // Cambia la página cuando la sección es visible
        }
      });
    }, options);

    // Observar cada sección solo si el ref está disponible
    Object.keys(sectionRefs).forEach((key) => {
      const ref = sectionRefs[key].current;
      if (ref) {
        observer.observe(ref); // Solo observa si el ref está presente
      }
    });

    return () => {
      // Dejar de observar cada sección solo si el ref está disponible
      Object.keys(sectionRefs).forEach((key) => {
        const ref = sectionRefs[key].current;
        if (ref) {
          observer.unobserve(ref); // Solo deja de observar si el ref está presente
        }
      });
    };
  }, []);

  return (
    // App.js
    <div className="relative w-full h-screen overflow-auto flex flex-col lg:flex-row">
      {/* Contenido Fijo (izquierda) en pantallas grandes */}
      {!isMobile ? (
        <div className="relative w-full h-auto lg:h-screen lg:w-1/2 overflow-auto flex flex-col lg:flex-row">
          <FixedLayout
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            scrollToSection={scrollToSection}
          />
        </div>
      ) : null}

      {/* Contenido principal (derecha) con scroll-smooth */}
      <div className="h-full w-full lg:w-1/2 overflow-auto z-10 scroll-smooth">
        {/* Contenido en pantallas pequeñas */}
        {isMobile ? (
          <div className="relative w-full h-auto lg:h-screen lg:w-1/2 overflow-auto flex flex-col lg:flex-row">
            <FixedLayout
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              scrollToSection={scrollToSection}
            />
          </div>
        ) : null}
        <MainLayout>
          {/* Sección Home */}
          <div ref={homeRef} id="main" className="section">
            <Home />
          </div>

          {/* Sección Projects */}
          <div ref={projectsRef} id="proyectos" className="section">
            <Projects />
          </div>

          {/* Sección Experiencia */}
          <div ref={experienceRef} id="experiencia" className="section">
            <Experience />
          </div>

          {/* Sección Contact */}
          <div ref={educationRef} id="educacion" className="section">
            <Education />
          </div>
        </MainLayout>
      </div>

      {/* Componente de fondo de partículas */}
      <ParticleBackground />
    </div>
  );
}

export default App;
