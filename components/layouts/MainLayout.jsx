import React from 'react';
import Footer from '../Footer.jsx';
import { COLOR_ACCENT } from '../../config';

const MainLayout = ({ children }) => (
  <main>
    {children}
    <Footer />
  </main>
);

export default MainLayout;
