import { useState } from "react"; // Importar useState para controlar el modal
import { BsInfoSquareFill } from "react-icons/bs";
import { NAME, FOTO, INFO, CONTACT } from "@/constants/constants.js";
import Modal from "@/components/extra/Modal.jsx";
import NavBar from "@/components/navbar/NavBar.jsx";
import ContactInfo from "@/components/contact/ContactInfo";

const FixedLayout = ({ currentPage, setCurrentPage, scrollToSection }) => {
  const [isHovered, setIsHovered] = useState(false); // Estado para controlar el hover
  const [icon, setIcon] = useState(<BsInfoSquareFill size={25} />); // Estado para cambiar el contenido del icono

  const handleMouseEnter = () => {
    setIsHovered(true); // Activa el hover
    setIcon(<Modal text={INFO} />); // Cambia el icono al pasar el ratón
  };

  const handleMouseLeave = () => {
    setIsHovered(false); // Desactiva el hover
    setIcon(<BsInfoSquareFill size={25} />); // Restaura el icono original
  };

  return (
    <header className="w-[60%] h-full mx-auto flex flex-col justify-between pb-10">
      <div className="fixed justify-center items-center top-0 left-0 w-1/2 z-100 pt-2 px-10 fade-left">
        <NavBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          scrollToSection={scrollToSection} // Pasa la función scrollToSection
        />
      </div>
      {/* Contenedor principal que se ocupa de la imagen y texto */}
      <div
        className="flex flex-col items-start justify-center flex-grow fade-left"
      >
        {/* Contenedor de la imagen y el texto alineado a la izquierda */}
        <div className="flex flex-col items-start">
          {/* Imagen */}
          <div className="flex flex-row items-center space-x-6">
            <img
              src={FOTO}
              loading="eager"
              alt="Fotografía de Marc Llobera Villalonga en formato CV."
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-22 lg:h-22 rounded-full mb-3"
            />
            <div
              onMouseEnter={handleMouseEnter} // Aplicar el evento onMouseEnter
              onMouseLeave={handleMouseLeave} // Aplicar el evento onMouseLeave
              className={`transition-transform duration-1000 ${
                isHovered ? "hover:scale-110 z-1000 fixed" : "scale-100"
              }`} // Aplicar la escala con animación
            >
              {icon} {/* Renderiza el icono dinámico */}
            </div>
          </div>
          {/* Título y subtítulo */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-3">
              {NAME}
            </h1>
            <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-400">
              Full Stack Developer
            </h2>
          </div>
        </div>
      </div>
      <div className="fixed justify-center items-center bottom-0 left-0 w-1/2 z-100 pb-2 px-10 flex sm:space-x-8 md:space-x-16 lg:space-x-24 fade-left">
        {/* Recorriendo el diccionario CONTACT */}
        {Object.entries(CONTACT).map(([key, { url, image }]) => (
          <ContactInfo key={key} name={key} icon={image} url={url} />
        ))}
      </div>
    </header>
  );
};

export default FixedLayout;
