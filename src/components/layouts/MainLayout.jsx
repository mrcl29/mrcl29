const MainLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen pr-[1%] sm:pr-[3%] md:pr-[5%] lg:pr-[10%] overflow-auto">
      {/* Asegúrate de que los componentes estén apilados verticalmente */}
      <div className="flex flex-col space-y-16">
        {children}
      </div>
    </main>
  );
};

export default MainLayout;
