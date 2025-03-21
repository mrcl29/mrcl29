import { useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar.jsx"; 
import MainLayout from "./components/layouts/MainLayout.jsx";
import Home from "./components/pages/Home.jsx";
import Projects from "./components/pages/Projects.jsx";
import About from "./components/pages/About.jsx";
import Contact from "./components/pages/Contact.jsx";

function App() {
  const [currentPage, setCurrentPage] = useState("home"); // Estado centralizado

  return (
    <>
      <Navbar currentPage={currentPage} onPageChange={setCurrentPage} />
      <MainLayout>
        <div className="content-wrapper mt-16 sm:mt-16 md:mt-20 lg:mt-24">
          {currentPage === "home" && <Home />}
          {currentPage === "projects" && <Projects />}
          {currentPage === "about" && <About />}
          {currentPage === "contact" && <Contact />}
        </div>
      </MainLayout>
    </>
  );
}

export default App;
