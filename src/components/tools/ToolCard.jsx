import React from "react";

// Componente ToolCard: Muestra una herramienta individual
function ToolCard({ name, url, image, stars }) {
  // Función para generar los círculos
  const renderCircles = (stars) => {
    const circles = [0, 0, 0]; // Tres círculos fijos
    for (let i = 0; i < stars; i++) {
      circles[i] = 1; // Rellenamos los círculos según las estrellas
    }
    return circles.map((circle, index) => (
      <span
        key={index}
        className={`${circle === 1 ? "text-black" : "text-gray-600"} text-xl`} // Ajustamos el tamaño de los círculos
      >
        {circle === 1 ? "●" : "○"} {/* Círculo lleno o vacío */}
      </span>
    ));
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <div className="flex flex-col items-center justify-center bg-gray-300 text-black rounded-lg shadow-md w-full h-full"> {/* Contenedor más pequeño */}
        
        {/* Imagen con tamaño reducido */}
        <img
          src={image}
          alt={name}
          className="w-[40%] h-[40%] m-2 object-contain" // Ajusta el tamaño de la imagen según la pantalla
        />
        
        {/* Nombre ajustable con tamaño relativo */}
        <div className="text-xs sm:text-sm md:text-sm font-semibold text-center w-full whitespace-nowrap">
          {name}
        </div>
        
        {/* Círculos ajustados al tamaño del contenedor */}
        <div className="flex space-x-1 justify-center w-full pb-1">
          {renderCircles(stars)} {/* Mostrar círculos */}
        </div>
      </div>
    </a>
  );
}

export default ToolCard;
