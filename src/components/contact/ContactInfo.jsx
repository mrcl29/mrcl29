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
          className="w-9 h-9 filter grayscale brightness-75"
        />
      </a>
      <button
        onClick={() => {
          if (name != "Email") {
            window.open(url, "_blank");
          }
        }}
        className={`select-text font-bold text-black bg-gray-300 py-1 px-2 rounded-lg text-center ${(name =="Email") ? "cursor-text" : "cursor-pointer"}`} // Añadí margen izquierdo para separar el texto del icono
      >
        {user}
      </button>
    </div>
  );
};

export default ContactInfo;
