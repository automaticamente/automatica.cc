import React from 'react';
import Head from './Head.jsx';
import Nav from './Nav.jsx';

const Header = ({ title, description, children }) => (
  <header>
    <Head title={title} description={description || title} />

    <Nav />
    <h1>{title}</h1>

    <style jsx>{`
      header {
        margin-top: 5rem;
        padding: 0 1rem;
      }
    `}</style>
  </header>
);

export default Header;
