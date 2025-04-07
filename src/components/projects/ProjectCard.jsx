const ProjectCard = ({ name, image, description, url, tools }) => {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden shadow-md bg-gray-100 border-1 border-white my-2 group">
      {/* Imagen */}
      <img
        src={image}
        alt={name}
        className="w-full z-0 h-48 scale-80 object-contain my-3 transform rotate-340 transition-all duration-300 group-hover:rotate-360 group-hover:scale-100"
      />
      <hr className="z-1 border-t-3 border-black" />

      <div className="w-full z-1 bg-black p-3 m-0">
        {/* Nombre del proyecto */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-extrabold text-left text-white">
            {name}
          </h2>

          {/* Mostrar las herramientas a la derecha */}
          <div className="flex space-x-2">
            {tools.map((tool, index) => (
              <div
                key={index}
                className="bg-gray-200 rounded-full p-1 transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-0 rotate-12"
              >
                <img
                  src={tool}
                  alt={`tool-${index}`}
                  className="w-6 h-6 object-contain rounded-full transition-all duration-300 group-hover:scale-100 group-hover:rotate-0"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Descripción */}
        <p className="text-left text-base font-extralight italic text-gray-100 mt-2">
          {description}
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
