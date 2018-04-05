import React from 'react';
import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import TweetEmbed from 'react-tweet-embed';
import GihubLink from './GithubLink.jsx';

import { BREAKPOINT, COLOR_ACCENT, COLOR_NEUTRAL } from '../config';

const ItemInfo = ({p, featured}) => (
  <div>
    <h3 className={featured ? 'featured': null}>
      <Link href={p.url}>
        <a>{p.name}</a>
      </Link>
    </h3>
    <p className="url">
      <Link href={p.url}>
        <a>{p.url}</a>
      </Link>
    </p>

    <p>{p.github ? <GihubLink url={p.github} /> : null}</p>

    <ReactMarkdown source={p.description} />

    <style jsx>{`
      a {
        text-decoration: none;
      }

      h3 {
        font-family: 'Alegreya', serif;
        font-size: 1.5rem;
        font-weight: 800;
        margin-top: 0;
      }

      h3.featured {
        font-size: 2.5rem;
      }

      p.url {
        margin-top: 0;
        margin-bottom: 0.5rem;
      }

      p.url a {
        color: ${COLOR_NEUTRAL};
        font-size: 1rem;
      }
    `}</style>
  </div>
);

export const FeaturedItem = p => (
  <li>
    <div className="preview">
      {p.featured ? (
        <TweetEmbed
          id={p.featured}
          options={{
            linkColor: COLOR_ACCENT
          }}
        />
      ) : null}
    </div>
    <ItemInfo p={p} featured={true} />

    <style jsx>{`
      li {
        margin-bottom: 2rem;
        display: flex;
        flex-wrap: wrap;
      }

      div.preview {
        max-width: 20rem;
      }

      @media all and (min-width: ${BREAKPOINT}) {
        li {
          flex-wrap: nowrap;
        }

        div.preview {
          margin-right: 2rem;
        }
      }
    `}</style>
  </li>
);

export const Item = p => (
  <li>
    <div className="avatar">
      <img src={`/static/avatars/${p.handle}.jpg`} />
    </div>
    <ItemInfo p={p} />
    <style jsx>{`
      li {
        margin-bottom: 2rem;
        display: flex;
      }

      div.avatar {
        margin-right: 1rem;
      }

      img {
        width: 4rem;
        height: 4rem;
        margin-top: 0.52rem;
        border-radius: 50%;
      }

      @media all and (min-width: ${BREAKPOINT}) {
        li {
          max-width: 20rem;
          margin-right: 2rem;
        }
      }
    `}</style>
  </li>
);
