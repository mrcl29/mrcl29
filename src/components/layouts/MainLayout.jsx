import { useEffect, useState } from 'react';

const MainLayout = ({ children }) => {

  return (
    <>
      <div className="relative overflow-hidden h-screen">
        <main>
          {children}
        </main>
      </div>
    </>
  );
};

export default MainLayout;
