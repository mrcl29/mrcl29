import { useEffect, useRef } from "react";
import NavCard from "./NavCard";

const Navbar = ({ currentPage, onPageChange }) => {
  const indicatorRef = useRef(null);
  const navRefs = useRef({});

  const updateIndicator = () => {
    if (navRefs.current[currentPage] && indicatorRef.current) {
      const { offsetLeft, offsetWidth, offsetHeight } =
        navRefs.current[currentPage];
      indicatorRef.current.style.left = `${offsetLeft}px`;
      indicatorRef.current.style.width = `${offsetWidth}px`;
      indicatorRef.current.style.height = `${offsetHeight}px`;
    }
  };

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [currentPage]);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 border-3 border-white z-50 inline-flex items-center justify-center rounded-full">
      {/* Indicador deslizante */}
      <div
        ref={indicatorRef}
        className="absolute bg-white rounded-full transition-all duration-300 ease-in-out"
      ></div>

      <ul className="flex w-full relative">
        {["home", "projects", "about", "contact"].map((route) => (
          <li
            key={route}
            ref={(el) => (navRefs.current[route] = el)}
            className="flex-1 min-w-[100px] h-[40px] sm:min-w-[120px] sm:h-[45px] md:min-w-[140px] md:h-[50px] lg:min-w-[160px] lg:h-[55px] flex items-center justify-center"
          >
            <NavCard
              title={route.charAt(0).toUpperCase() + route.slice(1)}
              route={route}
              isChecked={currentPage === route}
              onPageChange={onPageChange} // Actualiza el estado global
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
