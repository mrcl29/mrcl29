import React from "react";
import ToolCard from "./ToolCard"; // Importar ToolCard

// Componente ToolBox: Recibe herramientas de una categoría y las renderiza
function ToolBox({ category, tools }) {
  return (
    <div className="mb-2">
      <h3 className="text-lg font-bold text-center mb-2 text-white">{category}</h3> {/* Título más pequeño */}
      <div className="flex flex-wrap justify-center"> {/* Flexbox para una fila flexible */}
        {Object.entries(tools).map(([toolName, { url, image, stars }]) => (
          <div key={toolName} className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 p-0.5"> {/* Ancho reducido */}
            <ToolCard
              key={toolName}
              name={toolName}
              url={url}
              image={image}
              stars={stars}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolBox;
