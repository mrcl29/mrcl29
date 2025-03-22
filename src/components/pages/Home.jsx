import fotoCV from "../../assets/foto_CV.avif";

const Home = () => {
  return (
    <div className="flex flex-wrap mt-16 sm:mt-16 md:mt-20 lg:mt-24">
      {/* Contenedor de la imagen - Mitad izquierda, ajustada verticalmente */}
      <div className="flex justify-center items-center w-1/2 h-auto mb-5 mt-5">
        <img
          src={fotoCV}
          loading="eager"
          alt="Fotografia de Marc Llobera Villalonga en formato CV."
          className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full"
        />
      </div>

      {/* Contenedor derecho - Ocupa la otra mitad y su altura se ajusta a los otros contenedores */}
      <div className="w-1/2 h-full p-4">
        3
      </div>

      {/* Contenedor de texto - Mitad izquierda, ajustada verticalmente al contenido */}
      <div className="w-1/2 h-auto p-4">
        <p className="font-semibold">
        Soy un estudiante de Ingeniería Informática con 22 años, actualmente cursando mis estudios en la Universidad de las Islas Baleares (UIB) en Mallorca. Mi formación abarca áreas clave como Minería de Datos, Aprendizaje Automático y Desarrollo Web. <br /><br />
        He adquirido una sólida experiencia en desarrollo full stack con habilidades en lenguajes y tecnologías populares como React, SQL, Java y Python entre otros. Mi enfoque se centra en crear soluciones completas y eficientes, desde el diseño de interfaces hasta la gestión de bases de datos y servidores.
        </p>
      </div>
    </div>
  );
};

export default Home;
