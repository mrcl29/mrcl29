import ToolList from "../tools/ToolList";

const Home = () => {
  return (
    <div className="flex flex-wrap mt-16 sm:mt-16 md:mt-20 lg:mt-24">
      {/* Contenedor de la imagen - Mitad izquierda, ajustada verticalmente */}
      

      {/* Contenedor derecho - Ocupa la otra mitad y su altura se ajusta a los otros contenedores */}
      <div className="w-1/2 h-full p-4">
        <ToolList/>
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
