const NavCard = ({
  title,
  route,
  isChecked,
  setCurrentPage,
  scrollToSection,
}) => {
  return (
    <div
      onClick={() => {
        setCurrentPage(route); // Cambia la página
        scrollToSection(route); // Desplázate a la sección correspondiente
      }}
      className={`cursor-pointer w-full h-full flex items-center justify-center rounded-full transition-all duration-400 ${
        isChecked ? "text-black" : "hover:scale-130 text-gray-400"
      }`}
    >
      <input
        id={route}
        type="radio"
        checked={isChecked}
        onChange={() => {
          setCurrentPage(route);
          scrollToSection(route); // Desplázate cuando el radio button cambie
        }}
        className="hidden"
      />
      <label
        htmlFor={route}
        className={`cursor-pointer font-extrabold transition-transform duration-300 select-none ${
          isChecked ? "scale-130" : "scale-100"
        }`}
      >
        {title}
      </label>
    </div>
  );
};

export default NavCard;