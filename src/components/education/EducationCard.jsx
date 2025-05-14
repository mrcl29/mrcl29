// import { TypeAnimation } from "react-type-animation";
// import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";

const EducationCard = ({ name, where, image, from, to, url }) => {
  // Verifica si la pantalla es pequeña
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 640px)" });
  // Estado para controlar el hover
  const [isHovered, setIsHovered] = useState(false);
  const [hasTyped, setHasTyped] = useState(false);

  useEffect(() => {
    if (isHovered && !hasTyped) {
      setHasTyped(true);
    }
  }, [isHovered, hasTyped]);

  return (
    <div
      className="h-full w-full rounded-lg overflow-hidden shadow-md bg-gray-200 border-2 border-white my-2 group relative"
      // Manejo de eventos de hover
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer" className="group">
        {/* Imagen - Se mantiene en su lugar */}
        <div className="w-full bg-black p-3 m-0 relative z-10">
          <div className="md:flex md:flex-row sm:flex-col justify-between items-center">
            {/* Nombre del proyecto */}
            <div className="md:flex md:flex-col sm:flex-col justify-start items-start">
              <h2 className="text-base  sm:text-base md:text-xl font-extrabold scale-95 text-left text-white transition-all duration-300 group-hover:scale-100">
                {name}
              </h2>
              <h3 className="text-sm sm:text-sm md:text-base font-bold text-left text-gray-100 italic">
                {where}
              </h3>
              <h4 className="text-xs sm:text-xs md:text-sm font-semibold text-left text-gray-100 italic">
                {from} - {to}
              </h4>
            </div>
            {/* Mostrar las herramientas a la derecha */}
            <div className="flex space-x-2">
                <div
                  className="bg-gray-200 rounded-full p-1 transform transition-all duration-300 group-hover:scale-120"
                >
                  <img
                    src={image}
                    alt={`${name}-image`}
                    className="w-5 h-5 sm:w-5 sm:h-5 md:w-10 md:h-10 object-contain rounded-full transition-all duration-300 group-hover:scale-100"
                  />
                </div>
            </div>
          </div>

          {/* Descripción */}
          {/* <p className="text-left min-h-2 sm:min-h-3 md:min-h-6 font-medium text-gray-200 mt-2">
            {isSmallScreen ? (
              <span className="text-sm">{description}</span>
            ) : hasTyped ? (
              <TypeAnimation
                sequence={[description]}
                wrapper="span"
                speed={100}
                cursor={false}
                repeat={0}
                className="text-base"
              />
            ) : null}
          </p> */}
        </div>

        <div className="w-full bg-gray-900 p-3 m-0 flex align-middle">
          {/* Botón "Ver más" */}
          <p className="text-left text-gray-200 inline-block font-bold relative italic">
            Ver más &rarr;
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gray-200 transition-all duration-300 group-hover:w-full group-hover:h-1"></span>
          </p>
        </div>
      </a>
    </div>
  );
};

export default EducationCard;
