import React from "react";

// Componente ToolCard: Muestra una herramienta individual
function ToolCard({ name, url, image, points }) {
  // Función para generar los círculos
  const renderCircles = (points) => {
    const circles = [0, 0, 0]; // Tres círculos fijos
    for (let i = 0; i < points; i++) {
      circles[i] = 1; // Rellenamos los círculos según las estrellas
    }
    return circles.map((circle, index) => (
      <span
        key={index}
        className={`${
          circle === 1 ? "bg-black" : "border-2 border-gray-500"
        } w-2.5 h-2.5 rounded-full flex items-center justify-center`} // Círculos ajustados
      />
    ));
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center w-full h-full"
    >
      <div
        className="flex flex-col items-center justify-center bg-gray-50 text-black rounded-lg shadow-md w-full h-full 
                   transition-transform duration-400 transform hover:scale-150 hover:shadow-xl hover:z-100 border-3 border-black"
      > {/* Contenedor con animación en hover */}
        
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
        <div className="flex gap-x-1 justify-center w-full py-2">
          {renderCircles(points)} {/* Mostrar círculos */}
        </div>
      </div>
    </a>
  );
}

export default ToolCard;
