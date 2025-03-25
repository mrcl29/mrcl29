import * as motion from "motion/react-client"; // Importar motion
import { NAME, FOTO, CONTACT } from "@/constants/constants.js";
import NavBar from "@/components/navbar/NavBar.jsx";
import ContactInfo from "@/components/contact/ContactInfo";

const FixedLayout = ({ currentPage, setCurrentPage, scrollToSection }) => {
  return (
    <header className="w-[60%] h-full mx-auto flex flex-col justify-between pb-10">
      <div className="fixed top-0 left-0 w-1/2 z-100 pt-2 pr-10 pl-10">
        <NavBar
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          scrollToSection={scrollToSection} // Pasa la función scrollToSection
        />
      </div>
      {/* Contenedor principal que se ocupa de la imagen y texto */}
      <div className="flex flex-col items-start justify-center flex-grow">
        {/* Contenedor de la imagen y el texto alineado a la izquierda */}
        <div className="flex flex-col items-start">
          {/* Imagen */}
          <motion.img
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              scale: { type: "spring", visualDuration: 1, bounce: 0.2 },
            }}
            src={FOTO}
            loading="eager"
            alt="Fotografía de Marc Llobera Villalonga en formato CV."
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-22 lg:h-22 rounded-full mb-3"
          />
          {/* Título y subtítulo */}
          <div className="text-left">
            <motion.h1
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 1, bounce: 0.2 },
              }}
              className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold mb-3"
            >
              {NAME}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 1,
                scale: { type: "spring", visualDuration: 1, bounce: 0.2 },
              }}
              className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-400"
            >
              Full Stack Developer
            </motion.h2>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 left-0 w-1/2 z-100 pb-2 pr-5 pl-10 flex space-x-4">
        {/* Recorriendo el diccionario CONTACT */}
        {Object.entries(CONTACT).map(([key, { url, image }]) => (
          <ContactInfo key={key} name={key} icon={image} url={url} />
        ))}
      </div>
    </header>
  );
};

export default FixedLayout;
