import React from 'react';
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
          <p>{this.state.quote}</p>
        </Header>

        <style jsx>{`
          h1 {
            font-family: 'Alegreya', serif;
            font-weight: 800;
            font-size: 4rem;
            color: ${accent};
          }

          p {
            font-family: 'Alegreya', serif;
            font-weight: 800;
            font-size: 3rem;
            line-height: 3rem;
          }
        `}</style>
      </main>
    );
  }
}
