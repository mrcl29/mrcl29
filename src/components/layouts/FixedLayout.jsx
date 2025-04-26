import { TypeAnimation } from "react-type-animation";
import { NAME, FOTO, CONTACT } from "@/constants/constants.js";
import NavBar from "@/components/navbar/NavBar.jsx";
import ContactInfo from "@/components/contact/ContactInfo";

const FixedLayout = ({ currentPage, setCurrentPage, scrollToSection }) => {
  return (
    <header className="w-[100%] h-full mx-auto flex flex-col justify-between pb-5">
      <div className="fixed justify-center items-center top-0 left-0 w-1/2 z-100 pt-2 px-10 fade-left">
        <NavBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          scrollToSection={scrollToSection} // Pasa la función scrollToSection
        />
      </div>
      {/* Contenedor principal que se ocupa de la imagen y texto */}
      <div className="flex flex-col items-center justify-center pl-[20%] flex-grow fade-left">
        {/* Contenedor de la imagen y el texto alineado a la izquierda */}
        <div className="flex flex-col">
          {/* Imagen */}
          <div className="flex flex-row space-x-6">
            <img
              src={FOTO}
              loading="eager"
              alt="Fotografía de Marc Llobera Villalonga en formato CV."
              className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-22 lg:h-22 rounded-full mb-3"
            />
            {/* <div
              onMouseEnter={handleMouseEnter} // Aplicar el evento onMouseEnter
              onMouseLeave={handleMouseLeave} // Aplicar el evento onMouseLeave
              className={`transition-transform duration-1000 ${
                isHovered ? "scale-110 z-1000 fixed" : "scale-100"
              } sm:scale-50 md:scale-70 lg:scale-90 xl:scale-110 sm:block hidden`} // Escala responsiva según el tamaño de la pantalla
              style={{ width: "fit-content", height: "fit-content" }} // Asegura que el contenedor sea de tamaño adecuado
            >
              {icon}
            </div> */}
          </div>
          {/* Título y subtítulo */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3">
              {NAME}
            </h1>
            <h2>
              <TypeAnimation
                sequence={["Ingeniero de Software", 1000]}
                wrapper="span"
                speed={1}
                repeat={Infinity}
                cursor={true}
                className="font-semibold text-sm sm:text-xl md:text-2xl lg:text-3xl italic text-gray-400"
              />
            </h2>
          </div>
        </div>
      </div>
      <div className="relative w-full justify-center items-center bottom-0 left-0 z-100 flex flex-wrap md:space-x-20 sm:space-x-5 gap-10 fade-left">
        {/* Recorriendo el diccionario CONTACT */}
        {Object.entries(CONTACT).map(([key, { user, url, image }]) => (
          <ContactInfo
            key={key}
            user={user}
            name={key}
            icon={image}
            url={url}
          />
        ))}
      </div>
    </header>
  );
};

export default FixedLayout;
