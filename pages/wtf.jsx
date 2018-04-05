import React from 'react';
import Link from 'next/link';
import Header from '../components/Header.jsx';
import MainLayout from '../components/layouts/MainLayout.jsx';
import { BREAKPOINT } from '../config';

const WTF = () => (
  <MainLayout>
    <Header
      title="WTF"
      description="Explicación automática do que é automática."
    />

    <section>
      <p>
        Automática é un proxecto personal de Berto Yáñez (<Link
          href={'https://twitter.com/bertez'}>
          <a>@bertez</a>
        </Link>) para facer experiementos relacionados coa xeración de contido
        aleatorio, ou sexa, o que viña facendo ata agora, pero baixo unha nova
        marca.
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
