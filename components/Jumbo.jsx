import React from 'react';
import { sample } from 'lodash';

import Nav from './Nav.jsx';
import Head from './Head.jsx';

import { COLOR_ACCENT } from '../config';

class Jumbo extends React.Component {
  constructor() {
    super();

    this.quotes = [
      'Creative coding por amor ao arte',
      'Bots e outras movidas en internet',
      'Axencia galega do contido aleatorio',
      'd[ o_0 ]b',
      'bip, bip, bip...',
      '🤖🌈'
    ];

    this.state = {
      quote: sample(this.quotes)
    };
  }

  componentDidMount() {
    this.cycle = setInterval(
      () => this.setState({ quote: sample(this.quotes) }),
      6 * 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.cycle);
  }

  render() {
    return (
      <header>
        <Head
          title={this.props.title}
          description={this.props.description || this.props.title}
          frontpage={true}
        />

        <Nav main={true} />
        <h1>{this.props.title}</h1>
        <p>{this.state.quote}</p>

        <style jsx>{`
          header {
            margin-top: 5rem;
            padding: 0 1rem;
            min-height: 24rem;
          }

          h1 {
            font-family: 'Alegreya', serif;
            font-weight: 800;
            font-size: 4rem;
            color: ${COLOR_ACCENT};
          }

          p {
            font-family: 'Alegreya', serif;
            font-weight: 800;
            font-size: 3rem;
            line-height: 1;
          }
        `}</style>
      </header>
    );
  }
}

export default Jumbo;
