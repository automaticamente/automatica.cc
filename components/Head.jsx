import React from 'react';
import Head from 'next/head';
import GA from 'react-ga';
import Router from 'next/router';

import { GA_TRACKING, COLOR_ACCENT } from '../config';

GA.initialize(GA_TRACKING);

Router.onRouteChangeComplete = () => {
  GA.pageview(window.location.pathname);
};

const CustomHead = ({ title, description }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />

      <meta name="author" content="Automática" />
      <meta name="description" content={description || title} />
      <link rel="icon" type="image/png" href="/static/favicon-32x32.png" sizes="32x32" />
      <link rel="icon" type="image/png" href="/static/favicon-16x16.png" sizes="16x16" />

      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING}`}
        key="spy"
      />

      <script
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || []
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date())
          gtag('config', '${GA_TRACKING}')
        `
        }}
      />
    </Head>
    <style global jsx>{`
      html {
        box-sizing: border-box;
        font-size: 16px;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      p,
      ol,
      ul {
        margin: 0;
        padding: 0;
        font-weight: normal;
      }

      ol,
      ul {
        list-style: none;
      }

      img {
        max-width: 100%;
        height: auto;
      }

      @import url('https://fonts.googleapis.com/css?family=Alegreya:800|Source+Sans+Pro:400,700');

      body {
        font-family: 'Source Sans Pro', sans-serif;
      }

      a {
        color: ${COLOR_ACCENT};
      }
    `}</style>
  </div>
);

export default CustomHead;
