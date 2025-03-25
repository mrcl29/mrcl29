const ContactInfo = ({ name, icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
      <img 
        src={icon} 
        alt={name} 
        className="w-8 h-8 filter grayscale brightness-75" // Aplica el filtro de escala de grises y brillo
      />
      <span className="text-lg text-gray-600">{name}</span>
    </a>
  );
};

export default ContactInfo;
