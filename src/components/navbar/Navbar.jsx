import NavCard from "./NavCard";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between w-full h-8 sm:h-8 md:h-10 lg:h-12 px-4 sm:px-8">
        <ul className="flex items-center sm:space-x-8 md:space-x-12 lg:space-x-16 w-full justify-center text-xs sm:text-sm md:text-lg transition-all duration-300">
          <li><NavCard title="Home" route="/"/></li>
          <li><NavCard title="About" route="/about"/></li>
          <li><NavCard title="Contact" route="/contact"/></li>
        </ul>
      </div>
    </nav>
  );  
};
  
export default Navbar;
