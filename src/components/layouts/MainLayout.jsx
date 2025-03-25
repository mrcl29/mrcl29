// MainLayout.jsx
const MainLayout = ({ children }) => {
  return (
    <main className="relative min-h-screen px-[2%] sm:px-[5%] md:px-[8%] lg:px-[12%]">
      {children}
    </main>
  );
};

export default MainLayout;
