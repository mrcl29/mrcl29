import * as motion from "motion/react-client";

const MainLayout = ({ children }) => {
  return (
    <main className="min-h-screen pr-[1%] sm:pr-[3%] md:pr-[5%] lg:pr-[10%] overflow-auto">
      {/* Asegúrate de que los componentes estén apilados verticalmente */}
      <div
        className="flex flex-col fade-right"
      >
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
