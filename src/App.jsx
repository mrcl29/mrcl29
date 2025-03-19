import { useState } from 'react';
import './App.css'
import Navbar from "./components/navbar/Navbar.jsx";  // Barra de navegación
import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Estado para controlar la página actual

  // Función para manejar el cambio de contenido
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <>
      <Navbar onPageChange={handlePageChange} />  {/* Pasamos la función para manejar el cambio */}
      <MainLayout>
        {currentPage === "home" && <Home />}
        {currentPage === "about" && <About />}
        {currentPage === "contact" && <Contact />}
      </MainLayout>
    </>
  );
}

export default App;
