const ContactInfo = ({ name, user, icon, url }) => {
  const isDownload = name === "CV";

  const handleClick = () => {
    if (isDownload) {
      // Crear un enlace temporal para forzar la descarga
      const link = document.createElement("a");
      link.href = url;
      link.download = url.split("/").pop(); // Puedes personalizar el nombre aquí si quieres
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else if (url.includes("https")) {
      window.open(url, "_blank");
    }
  };

  return (
    <div className="flex items-center justify-center p-0 m-0">
      <a
        href={url}
        target={isDownload ? undefined : "_blank"}
        rel={isDownload ? undefined : "noopener noreferrer"}
        download={isDownload}
        className="flex items-center mr-2"
      >
        <img
          src={icon}
          alt={name}
          className="w-9 h-9 filter grayscale brightness-100 hover:scale-130 transition-transform duration-300 ease-in-out"
        />
      </a>
      <button
        onClick={handleClick}
        className={`select-text font-bold text-black bg-white border-1 border-black py-1 px-2 rounded-lg text-center hover:scale-110 transition-transform duration-300 ease-in-out ${(!url.includes("https") && !isDownload) ? "cursor-text" : "cursor-pointer"}`}
      >
        {user}
      </button>
    </div>
  );
};

export default ContactInfo;
