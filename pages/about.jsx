import React from 'react';
import Link from 'next/link';
import Head from '../components/Head.jsx';
import Header from '../components/Header.jsx';

import { accent } from '../config';

export default () => (
  <main>
    <Head title="Sobre GCA" />

    <Header>
      <h1>WTF?</h1>
    </Header>

    <article>
      <p>
        <strong>Automática</strong> nace no ano 2018 como un alias de Berto
        Yáñez (<Link href="https://twitter.com/bertez">
          <a target="_blank">@bertez</a>
        </Link>) para facer cousas divertidas en Internet, principalmente{' '}
        <Link href="/portfolio">
          <a>bots de Twitter.</a>
        </Link>
      </p>

      <p>
        A maioria dos proxectos son por amor ao arte pero se tes algunha idea
        estou dispoñible por tempo limitado para consultoría e desenvolvemento.
        Mándame un mail e miramos.
      </p>
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

      p {
        font-size: 1.2rem;
        line-height: 1.5;
        margin: 1rem 0;
      }

      a {
        color: ${accent};
        text-decoration: none;
      }
    `}</style>
  </main>
);
