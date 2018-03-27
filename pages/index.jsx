import React from 'react';
import Link from 'next/link';
import Head from '../components/Head.jsx';
import Header from '../components/Header.jsx';
import { sample } from 'lodash';

import { accent } from '../config';

export default class Home extends React.Component {
  constructor() {
    super();

    this.quotes = [
      'Creative coding por amor ao arte',
      'Bots e outras movidas en internet',
      'Axencia galega do contido aleatorio',
      'bip, bip, bip...'
    ];

    this.state = {
      quote: sample(this.quotes)
    };
  }

  componentDidMount() {
    this.cycle = setInterval(
      () => this.setState({ quote: sample(this.quotes) }),
      10 * 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.cycle);
  }

  render() {
    return (
      <main>
        <Head title="Ola!" description="Automática fai bots" />

        <Header main={true}>
          <h1>Automática</h1>
          <p className="tagline">{this.state.quote}</p>
        </Header>

        <section>
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
        </section>

        <style jsx>{`
          h1 {
            font-family: 'Alegreya', serif;
            font-weight: 800;
            font-size: 4rem;
            color: ${accent};
          }

          p.tagline {
            font-family: 'Alegreya', serif;
            font-weight: 800;
            font-size: 3rem;
            line-height: 1;
          }

          section {
            padding: 0 1rem;
          }

          section p {
            line-height: 1.4;
            font-size:1.3rem;
           }
        `}</style>
      </main>
    );
  }
}
