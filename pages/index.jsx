import React from 'react';
import Link from 'next/link';
import Jumbo from '../components/Jumbo.jsx';
import MainLayout from '../components/layouts/MainLayout.jsx';

import { COLOR_ACCENT, MAILCHIMP_URL, BREAKPOINT, MAX_WIDTH } from '../config';

const Home = () => (
  <MainLayout>
    <Jumbo
      title={'Automática'}
      description={'Axencia galega do contido aleatorio.'}
    />

    <section>
      <article>
        <p>
          <strong>Automática</strong> existe para para facer experimentos
          divertidos en Internet relacionados coa xeración de contido aleatorio,
          ata agora{' '}
          <Link href="/portfolio">
            <a>bots de Twitter</a>
          </Link>. Se a túa curiosidade non quedou satisfeita,{' '}
          <Link href="/wtf">
            <a>mira aquí</a>
          </Link>.
        </p>

        <p>
          A maioria dos proxectos son por amor á arte pero tes interese en que
          fagamos algo xuntas (e dispós de carto, of course). Manda{' '}
          <Link href="mailto:ola@automatica.cc">
            <a>un mail</a>
          </Link>{' '}
          e miramos.
        </p>
      </article>

      <article className="highlight">
        <span>Último proxecto:</span>
        <h2>
          <Link href="https://twitter.com/insultomata">
            <a>Insultómata</a>
          </Link>
        </h2>
        <p>
          Un bot de twitter que borda insultos en punto de cruz. Nen máis nen
          menos.
        </p>
      </article>

      <article>
        <h2>Newsletter</h2>
        <p>
          Pode que de cando en vez mande unha newsletter con novidades e cousas
          interesantes. Pode que non. É un misterio. Pero por se acaso:{' '}
          <Link href={MAILCHIMP_URL}>
            <a target="_blank">subscríbete</a>
          </Link>, fai o favor.
        </p>
      </article>
    </section>

    <style jsx>{`
      section {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        max-width: ${MAX_WIDTH};
      }

      p {
        line-height: 1.4;
        font-size: 1.2rem;
      }

      article {
        margin-bottom: 2rem;
        width: 100%;
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
        display: flex;
        flex-direction: column;
      }

      article.highlight a {
        color: white;
        text-decoration: none;
      }

      article.highlight span {
        font-size: 1rem;
        flex-grow: 1;
      }

      @media all and (min-width: ${BREAKPOINT}) {
        article {
          max-width: 20rem;
          margin-right: 2rem;
        }
      }
    `}</style>
  </MainLayout>
);

export default Home;
