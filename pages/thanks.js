import React from 'react';
import Link from 'next/link';
import Header from '../components/Header.jsx';
import MainLayout from '../components/layouts/MainLayout.jsx';
import { BREAKPOINT } from '../config';

const WTF = () => (
  <MainLayout>
    <Header
      title="Thanks"
      description="A galiña polo que vale."
    />

    <section>
      <p>
        A galiña polo que vale:

        <ul>
          <li>As iconas de twitter de abaixo e a maioria </li>
        </ul>
      </p>

      <p>
        Non sei que máis poñer de momento, pero estou niso. Mira o{' '}
        <Link href={'/portfolio'}>
          <a>portfolio</a>
        </Link>{' '}
        de momento, se tal.
      </p>
    </section>

    <style jsx>{`
      p {
        max-width: ${BREAKPOINT};
        line-height: 1.4;
        font-size: 1.2rem;
      }
    `}</style>
  </MainLayout>
);

export default WTF;
