const MainLayout = ({ children }) => {
  return (
    <div className="relative overflow-hidden h-screen px-[5%] sm:px-[10%] md:px-[15%] lg:px-[20%]">
      <main>
        {children}
      </main>
    </div>
  );
};

export default MainLayout;
