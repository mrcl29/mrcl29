const ProjectCard = ({ name, image, description, url }) => {
  return (
    <div className="h-full w-full rounded-lg overflow-hidden shadow-md bg-gray-100 border-1 border-white">
      {/* Imagen */}
      <img
        src={image}
        alt={name}
        className="w-full h-48 object-contain my-3" // Cambié object-cover a object-contain
      />
      <hr className="border-t-3 border-black" />

      <div className="w-full bg-black p-3 m-0">
      {/* Nombre del proyecto */}
      <h2 className="text-xl font-extrabold text-left text-white">{name}</h2>

      {/* Descripción */}
      <p className="text-left font-semibold text-gray-100 mt-2">
        {description}
      </p>
      </div>

      <div className="w-full bg-gray-800 p-3 m-0 flex align-middle">
        {/* Botón "Ver más" */}
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-left text-blue-100 inline-block font-bold underline"
        >
          Ver más &rarr;
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
