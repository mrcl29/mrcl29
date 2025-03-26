import { useState, useRef, useEffect } from "react";
import "@/App.css";
import ParticleBackground from "@/components/extra/ParticleBackground.jsx";
import FixedLayout from "@/components/layouts/FixedLayout.jsx";
import MainLayout from "@/components/layouts/MainLayout.jsx";
import Home from "@/components/pages/Home.jsx";
import Projects from "@/components/pages/Projects.jsx";
import About from "@/components/pages/About.jsx";
import Contact from "@/components/pages/Contact.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  // Refs para las secciones de contenido
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  const sectionRefs = {
    home: homeRef,
    projects: projectsRef,
    about: aboutRef,
    contact: contactRef,
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({ behavior: "smooth" });
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
    <div className="relative w-full h-screen overflow-auto flex">
      {/* Contenido Fijo (izquierda) */}
      <div className="h-full w-1/2 flex items-center justify-center z-20">
        <FixedLayout currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          scrollToSection={scrollToSection}  />
      </div>

      {/* Contenido principal (derecha) */}
      <div className="h-full w-1/2 overflow-auto z-10 pt-10 pb-10">
        <MainLayout>
          <div className="content-wrapper relative z-10 flex flex-col">
            {/* Sección Home */}
            <div ref={homeRef} id="home" className="section">
              <Home />
            </div>

            {/* Sección Projects */}
            <div ref={projectsRef} id="projects" className="section">
              <Projects />
            </div>

            {/* Sección About */}
            <div ref={aboutRef} id="about" className="section">
              <About />
            </div>

            {/* Sección Contact */}
            <div ref={contactRef} id="contact" className="section">
              <Contact />
            </div>
          </div>
        </MainLayout>
      </div>

      {/* Componente de fondo de partículas */}
      <ParticleBackground />
    </div>
  );
}

export default App;
