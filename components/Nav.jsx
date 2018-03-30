import React from 'react';
import Link from 'next/link';
import { COLOR_NEUTRAL } from '../config';

const Nav = ({ main }) => (
  <ul>
    {!main && (
      <li>
        <Link href="/">
          <a>🏠</a>
        </Link>
      </li>
    )}
    <li>
      <Link href="/wtf">
        <a>WTF!?</a>
      </Link>
    </li>
    <li>
      <Link href="/portfolio">
        <a>Portfolio</a>
      </Link>
    </li>
    <li>
      <Link href="mailto:ola@automatica.cc">
        <a>Contacto</a>
      </Link>
    </li>
    <style jsx>
      {`
        ul {
          display: flex;
          align-items: center;
          margin-bottom: 3rem;
          height: 1.5rem;
        }

        a {
          color: ${COLOR_NEUTRAL};
          text-decoration: none;
        }

        li {
          margin-right: 1rem;
          font-size: 1rem;
        }
      `}
    </style>
  </ul>
);

export default Nav;
