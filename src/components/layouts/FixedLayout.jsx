// FixedLayout.jsx
import NavBar from "../navbar/NavBar.jsx";
import foto_CV from "../../assets/foto_CV.avif";

const FixedLayout = ({ currentPage, setCurrentPage }) => {
  return (
    <header className="w-[60%] h-full mx-auto flex flex-col justify-between pb-10">
      {/* Contenedor principal que se ocupa de la imagen y texto */}
      <div className="flex flex-col items-start justify-center flex-grow">
        {/* Contenedor de la imagen y el texto alineado a la izquierda */}
        <div className="flex flex-col items-start">
          {/* Imagen */}
          <img
            src={foto_CV}
            loading="eager"
            alt="Fotografía de Marc Llobera Villalonga en formato CV."
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-22 lg:h-22 rounded-full mb-3"
          />
          {/* Título y subtítulo */}
          <div className="text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">Marc Llobera Villalonga</h1>
            <h2 className="text-sm sm:text-xl md:text-2xl lg:text-3xl text-gray-500">Full Stack Developer</h2>
          </div>
        </div>
      </div>
      
      {/* Contenedor de la barra de navegación centrada horizontalmente, pegada a la parte inferior */}
      <div className="w-full flex justify-center">
        <NavBar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      </div>
    </header>
  );
};

export default FixedLayout;
