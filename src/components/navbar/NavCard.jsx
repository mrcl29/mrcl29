const NavCard = ({ title, route="/" }) => {
  return (
    <div className="group relative hover:scale-110 transition-all duration-300">
      <div className="text-black font-bold group-hover:text-black-700 text-base md:text-lg lg:text-xl">
        <a href={route}>{title}</a>
      </div>
      <span className="absolute left-0 bottom-0 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-400"></span>
    </div>
  );
};

export default NavCard;