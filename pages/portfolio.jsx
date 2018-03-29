import React from 'react';
import Head from '../components/Head.jsx';
import Header from '../components/Header.jsx';
import MainLayout from '../components/layouts/MainLayout.jsx';

import portfolio from '../data/portfolio.json';

const Portfolio = () => (
  <MainLayout>
    <Head title="Portfolio" />

    <Header>
      <h1>Portfolio</h1>
    </Header>

    <article>
      <ul>
        {portfolio.map((p, i) => <li key={`portfolio_${i}`}>{p.name}</li>)}
      </ul>
    </article>

    <style jsx>{`
      h1 {
        font-family: 'Alegreya', serif;
        font-weight: 800;
        font-size: 4rem;
      }

      article {
        padding: 0 1rem;
      }
    `}</style>
  </MainLayout>
);

export default Portfolio;