const MainLayout = ({ children }) => {
  return (
    <div className="relative overflow-hidden h-screen px-[2%] sm:px-[5%] md:px-[8%] lg:px-[12%]">
      <main>{children}</main>
    </div>
  );
};

export default MainLayout;
