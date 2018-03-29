import React from 'react';
import Footer from '../components/Footer.jsx';
import { COLOR_ACCENT } from '../config'

const MainLayout = ({children}) => <main>
  <section>
    {children}
    </section>
  <Footer/>
  <style jsx>{`
      section {
        padding: 0 1rem;
      }
    `}</style>

</main>;

export default MainLayout;