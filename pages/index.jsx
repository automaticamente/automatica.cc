import React from 'react';
import Link from 'next/link';
import Jumbo from '../components/Jumbo.jsx';
import MainLayout from '../components/layouts/MainLayout.jsx';

import { COLOR_ACCENT, MAILCHIMP_URL } from '../config';

const Home = () => (
  <MainLayout>
    <Jumbo
      title={'Automática'}
      description={'Axencia galega do contido aleatorio.'}
    />

    <section>
      <article>
        <p>
          <strong>Automática</strong> existe para para facer cousas divertidas
          en Internet, ata agora{' '}
          <Link href="/portfolio">
            <a>bots de Twitter</a>
          </Link> maiormente.
        </p>

        <p>
          A maioria dos proxectos son por amor ao arte pero tes interese en que
          fagamos algo xuntas (e dispós de carto). Manda{' '}
          <Link href="mailto:ola@automatica.cc">
            <a>un mail</a>
          </Link>{' '}
          e miramos.
        </p>
      </article>

      <article className="highlight">
        <p>Ultimo proxecto:</p>
        <h2>
          <Link href="https://twitter.com/bertez">
            <a>Insultómata</a>
          </Link>
        </h2>
        <p>Un bot de twitter que borda insultos en punto de cruz.</p>
      </article>

      <article>
        <h2>Newsletter</h2>
        <p>
          Pode que de cando en vez mande unha newsletter con novidades e cousas
          interesantes. Pode que non. É un misterio. Pero por se acaso:{' '}
          <Link href={MAILCHIMP_URL}>
            <a target="_blank">Subscribete</a>
          </Link>.
        </p>
      </article>
    </section>

    <style jsx>{`
      section {
        display: flex;
        flex-direction: column;
      }

      p {
        line-height: 1.4;
        font-size: 1.2rem;
        margin: 0.5rem 0;
      }

      article {
        margin-bottom: 2rem;
      }

      article h2 {
        font-family: 'Alegreya', serif;
        font-size: 2.5rem;
      }

      article.highlight {
        box-sizing: border-box;
        background: ${COLOR_ACCENT};
        color: white;
        padding: 1rem;
      }

      article.highlight a {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </MainLayout>
);

export default Home;
