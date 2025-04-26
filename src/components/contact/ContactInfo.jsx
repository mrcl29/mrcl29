const ContactInfo = ({ name, user, icon, url }) => {
  return (
    <div className="flex items-center justify-center p-0 m-0">
      {/* Ajusta el contenedor */}
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center mr-2"
      >
        <img
          src={icon}
          alt={name}
          className="w-9 h-9 filter grayscale brightness-100 hover:scale-130 transition-transform duration-300 ease-in-out"
        />
      </a>
      <button
        onClick={() => {
          if (url.includes("https")) {
            window.open(url, "_blank");
          }
        }}
        className={`select-text font-bold text-white bg-gray-800 border-1 border-gray-400 py-1 px-2 rounded-lg text-center ${(!url.includes("https")) ? "cursor-text" : "cursor-pointer"}`} // Añadir margen izquierdo para separar el texto del icono
      >
        {user}
      </button>
    </div>
  );
};

export default ContactInfo;
