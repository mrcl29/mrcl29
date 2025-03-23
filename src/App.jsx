import { useState } from "react";
import "./App.css";
import NavBar from "./components/navbar/NavBar.jsx";
import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";
import ParticleBackground from "./components/extra/ParticleBackground.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <div className="relative w-full min-h-screen overflow-auto">
      {/* Fondo con partículas */}
      <ParticleBackground/>
      
      {/* Barra de navegación */}
      <NavBar currentPage={currentPage} onPageChange={setCurrentPage} />
      
      {/* Contenido principal */}
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
  );
}

export default App;
