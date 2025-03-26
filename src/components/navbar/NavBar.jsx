import { useEffect, useRef } from "react";
import NavCard from "./NavCard";

const NavBar = ({ currentPage, setCurrentPage, scrollToSection }) => {
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
    <nav className="transform z-50 items-center justify-center rounded-full sm:block hidden">
      {/* Indicador deslizante */}
      <div
        ref={indicatorRef}
        className="absolute bg-gray-200 rounded-full transition-all duration-400 ease-in-out"
      ></div>

      <ul className="flex w-full relative">
        {["home", "projects", "experience", "contact"].map((route) => (
          <li
            key={route}
            ref={(el) => (navRefs.current[route] = el)}
            className="flex-1 min-w-[60px] h-[25px] sm:min-w-[70px] sm:h-[30px] md:min-w-[90px] md:h-[35px] lg:min-w-[110px] lg:h-[40px] flex items-center justify-center"
          >
            <NavCard
              title={route.charAt(0).toUpperCase() + route.slice(1)}
              route={route}
              isChecked={currentPage === route}
              setCurrentPage={setCurrentPage}
              scrollToSection={scrollToSection} // Pasa la función scrollToSection aquí
            />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
