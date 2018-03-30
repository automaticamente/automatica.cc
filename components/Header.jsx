import React from 'react';
import Head from './Head.jsx';
import Nav from './Nav.jsx';
import { BREAKPOINT, COLOR_ACCENT } from '../config';

const Header = ({ title, description }) => (
  <header>
    <Head title={title} description={description || title} />

    <Nav />
    <h1>{title}</h1>

    <style jsx>{`
      header {
        margin-top: 5rem;
        margin-bottom: 3rem;

      }

      h1 {
        font-family: 'Alegreya', serif;
        font-weight: 800;
        font-size: 4rem;
        color: black;
      }

      @media all and (min-width: ${BREAKPOINT}) {
        h1 {
          font-size: 5rem;
        }
      }
    `}</style>
  </header>
);

export default Header;
