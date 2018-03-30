import React from 'react';


import Header from '../components/Header.jsx';
import MainLayout from '../components/layouts/MainLayout.jsx';
import {Item} from '../components/Item.jsx';

import portfolio from '../data/portfolio.json';

const Portfolio = () => (
  <MainLayout>
    <Header title="Portfolio" description="As Movidas." />

    <section>
      <ul>
        {/*portfolio
          .filter(p => p.status === 'alive')
          .map((p, i) => <Item key={`portfolio_${i}`}  {...p} />)*/}
      </ul>

      <h2>Bots durmintes:</h2>
      <p>E, honestamente, é probable que nunca máis esperten 😔.</p>

      <ul>
        {portfolio
          .filter(p => p.status === 'dormant')
          .map((p, i) => <Item key={`portfolio_${i}`} {...p} />)}
      </ul>
    </section>

    <style jsx>{`

      ul {
        display: flex;
        flex-wrap: wrap;
        margin-top: 2rem;
      }

      h2 {
        font-family: 'Alegreya', serif;
        font-size: 2.5rem;
      }
    `}</style>
  </MainLayout>
);

export default Portfolio;
