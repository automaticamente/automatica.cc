import React from 'react';
import Link from 'next/link';
import Head from '../components/Head.jsx';

import portfolio from '../data/portfolio.json';

export default () => (
  <main>
    <Head title="Portfolio" />
    <header>
      <h1>Portfolio</h1>
      <nav>
        <Link href="/">
          <a>Volver</a>
        </Link>
      </nav>
    </header>
    <ul>{portfolio.map((p, i) => <li key={`portfolio_${i}`}>{p.name}</li>)}</ul>
  </main>
);
