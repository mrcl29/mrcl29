import React from "react";
import ToolCard from "./ToolCard"; // Importar ToolCard

// Componente ToolBox: Recibe herramientas de una categoría y las renderiza
function ToolBox({ category, tools }) {
  return (
    <div className="flex flex-wrap justify-center">
      {Object.entries(tools).map(([toolName, { url, image, points }]) => (
        <div
          key={toolName}
          className="flex-shrink-0 w-1/3 sm:w-1/4 md:w-1/5 lg:w-1/6 xl:w-1/7 p-1"
        >
          <ToolCard
            key={toolName}
            name={toolName}
            url={url}
            image={image}
            points={points}
          />
        </div>
      ))}
    </div>
  );
}

export default ToolBox;
