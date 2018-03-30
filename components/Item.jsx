import React from 'react';
import Link from 'next/link';
import { COLOR_ACCENT, COLOR_NEUTRAL } from '../config';
// import TweetEmbed from 'react-tweet-embed';
// {p.featured ? (
//   <TweetEmbed
//     id={p.featured}
//     options={{
//       linkColor: COLOR_ACCENT
//     }}
//   />
// ) : null}

export const Item = p => (
  <li>
    <div className="avatar">
      <img src={`/static/avatars/${p.handle}.jpg`} />
    </div>
    <div>
      <h3>
        <Link href={p.url}>
          <a>{p.name}</a>
        </Link>
      </h3>
      <p className="url">
        <Link href={p.url}>
          <a>{p.url}</a>
        </Link>
      </p>

      <p>{p.description}</p>
    </div>
    <style jsx>{`
      li {
        max-width: 20rem;
        margin-right: 2rem;
        margin-bottom: 2rem;
        display: flex;
      }

      div.avatar {
        margin-right: 1rem;
      }

      img {
        width: 4rem;
        height: 4rem;
        border: 4px solid ${COLOR_ACCENT};
      }

      a {
        text-decoration: none;
      }

      h3 {
        font-size: 1.4rem;
        font-weight: 800;
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
  </li>
);
