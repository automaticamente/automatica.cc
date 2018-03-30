import React from 'react';
import Footer from '../Footer.jsx';

const MainLayout = ({ children }) => (
  <main>
    {children}
    <Footer />

    <style jsx>{`
      main {
        margin: 0 1rem;
      }
    `}</style>
  </main>
);

export default MainLayout;
