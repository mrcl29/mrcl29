const ContactInfo = ({ name, icon, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="flex items-center">
      <img 
        src={icon} 
        alt={name} 
        className="w-8 h-8 filter grayscale brightness-75" // Aplica el filtro de escala de grises y brillo
      />
    </a>
  );
};

export default ContactInfo;
