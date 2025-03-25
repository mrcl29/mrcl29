import { useState } from "react";
import "./App.css";
import FixedLayout from "./components/layouts/FixedLayout.jsx";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import ParticleBackground from "./components/extra/ParticleBackground.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="relative w-full h-screen overflow-auto flex">
        {/* Barra de navegación (izquierda) */}
        <div className="h-full w-1/2 flex items-center justify-center z-20">
          <FixedLayout currentPage={currentPage} setCurrentPage={setCurrentPage} />
        </div>

        {/* Contenido principal (derecha) */}
        <div className="h-full w-1/2 overflow-auto z-10">
          <MainLayout>
            <div className="content-wrapper relative z-10 mt-16 sm:mt-16 md:mt-20 lg:mt-24">
              {/* Renderiza las páginas basadas en el estado currentPage */}
              {currentPage === "home" && <Home />}
              {currentPage === "projects" && <Projects />}
              {currentPage === "about" && <About />}
              {currentPage === "contact" && <Contact />}
            </div>
          </MainLayout>
        </div>

      {/* Componente de fondo de partículas */}
      <ParticleBackground />
    </div>
  );
}

export default App;
