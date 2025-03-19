import { useState, useEffect } from 'react';
import NavCard from "./NavCard";

const Navbar = ({ onPageChange }) => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`sticky top-0 left-0 w-full shadow-md z-50 backdrop-blur-sm transition-all duration-300 ${scrolling ? 'bg-black/30 text-xs h-8 rounded-none' : 'bg-white text-lg h-12 rounded-lg'}`}>
      <div className="container mx-auto flex items-center justify-between w-full h-8 sm:h-8 md:h-10 lg:h-12 px-4 sm:px-8">
        <ul className="flex items-center sm:space-x-8 md:space-x-12 lg:space-x-16 w-full justify-center text-xs sm:text-sm md:text-lg transition-all duration-300">
          <li><NavCard title="Home" route="home" onPageChange={onPageChange}/></li>
          <li><NavCard title="About" route="about" onPageChange={onPageChange}/></li>
          <li><NavCard title="Contact" route="contact" onPageChange={onPageChange}/></li>
        </ul>
      </div>
    </nav>
  );  
};
  
export default Navbar;
