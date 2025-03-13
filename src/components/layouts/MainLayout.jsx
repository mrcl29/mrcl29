import Navbar from "../navbar/Navbar.jsx";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main className="pt-16">{children}</main> {/* Ajusta el padding para evitar que el contenido quede oculto */}
    </>
  );
};

export default MainLayout;
