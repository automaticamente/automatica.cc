import React from 'react';

import Header from '../components/Header.jsx';
import MainLayout from '../components/layouts/MainLayout.jsx';
import { Item, FeaturedItem } from '../components/Item.jsx';

import portfolio from '../data/portfolio.json';
import { MAX_WIDTH } from '../config';

const Portfolio = () => (
  <MainLayout>
    <Header title="Portfolio" description="As Movidas." />

    <section>
      <ul>
        {portfolio
          .filter(p => p.status === 'alive')
          .map((p, i) => (
            <FeaturedItem key={`portfolio_featured_${i}`} {...p} />
          ))}
      </ul>

      <h2>Bots apagados:</h2>
      <p>
        Estes bots funcionaron entre os anos 2016 e 2017 e, honestamente, é
        probable que nunca máis se encendan. A descripción é a bio que teñen
        en Twitter.
      </p>

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
        max-width: ${MAX_WIDTH};
      }

      h2 {
        font-family: 'Alegreya', serif;
        font-size: 2rem;
      }
    `}</style>
  </MainLayout>
);

export default Portfolio;
