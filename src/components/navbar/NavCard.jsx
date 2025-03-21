const NavCard = ({ title, route, isChecked, onPageChange }) => {
  return (
    <div
      onClick={() => onPageChange(route)}
      className={`cursor-pointer w-full h-full flex items-center justify-center rounded-full transition-all duration-300 ${
        isChecked ? "text-white" : "hover:bg-gray-200"
      }`}
    >
      <input
        id={route}
        type="radio"
        checked={isChecked}
        onChange={() => onPageChange(route)}
        className="hidden"
      />
      <label
        htmlFor={route}
        className={`cursor-pointer font-bold transition-transform duration-300 select-none ${
          isChecked ? "scale-110" : "scale-100"
        }`}
      >
        {title}
      </label>
    </div>
  );
};

export default NavCard;
