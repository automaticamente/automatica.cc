import React from 'react';

const Footer = () => (
  <footer>
    <ul>
      <li>(c) Automática, {new Date().getFullYear()}</li>
    </ul>
    <style jsx>
      {`
        footer {
          margin-top: 5rem;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }
      `}
    </style>
  </footer>
);

export default Footer;
