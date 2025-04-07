import { TypeAnimation } from "react-type-animation";
import { useMediaQuery } from 'react-responsive';
import { useState } from "react";

const ProjectCard = ({ name, image, description, url, tools }) => {
  // Verifica si la pantalla es pequeña
  const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  // Estado para controlar el hover
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="h-full w-full rounded-lg overflow-hidden shadow-md bg-gray-200 border-1 border-white my-2 group relative"
      // Manejo de eventos de hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Imagen - Se mantiene en su lugar */}
      <img
        src={image}
        alt={name}
        className="w-full h-20 sm:h-20 md:h-35 md:scale-140 object-contain my-3 transform md:rotate-340 transition-all duration-300 md:group-hover:rotate-360 md:group-hover:scale-110 relative top-0 left-0 z-0"
      />

      <div className="w-full bg-black p-3 m-0 relative z-10">
        {/* Nombre del proyecto */}
        <div className="md:flex md:flex-row sm:flex-col justify-between items-center">
          <h2 className="text-base sm:text-base md:text-xl font-extrabold text-left text-white">
            {name}
          </h2>

          {/* Mostrar las herramientas a la derecha */}
          <div className="flex space-x-2">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-full p-1 transform transition-all duration-300 group-hover:scale-110"
              >
                <img
                  src={tool}
                  alt={`tool-${index}`}
                  className="w-3 h-3 sm:w-3 sm:h-3 md:w-6 md:h-6 object-contain rounded-full transition-all duration-300 group-hover:scale-100"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <p className="text-left min-h-2 sm:min-h-3 md:min-h-6 font-extralight italic text-gray-100 mt-2">
          {/* Mostrar la animación solo cuando el hover esté activo */}
          {isSmallScreen ? (
            <span className="text-sm">{description}</span>
          ) : (
            isHovered && (
              <TypeAnimation
                sequence={[description, 100]}
                wrapper="span"
                speed={100}
                repeat={Infinity}
                cursor={false}
                className="text-base"
              />
            )
          )}
        </p>
      </div>

      <a href={url} target="_blank" rel="noopener noreferrer" className="group">
        <div className="w-full bg-gray-800 p-3 m-0 flex align-middle">
          {/* Botón "Ver más" */}
          <p className="text-left text-blue-100 inline-block font-bold relative">
            Ver más &rarr;
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-100 transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default ProjectCard;
