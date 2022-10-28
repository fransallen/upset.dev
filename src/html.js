import React from 'react';
import PropTypes from 'prop-types';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="dns-prefetch" href="//cdn.statically.io" />
        <link rel="preconnect" href="https://fontbit.io" />
        <link
          rel="stylesheet"
          href="https://fontbit.io/css2?family=Source+Sans+Pro:wght@400;700&amp;display=swap"
        />
        <script
          defer
          type="text/javascript"
          src="https://api.pirsch.io/pirsch.js"
          id="pirschjs"
          data-code="lCVviH51DAyy2sfVsZQfRNte267mrYcf"
        ></script>
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <noscript key="noscript" id="gatsby-noscript">
          upset.dev works best with JavaScript enabled.
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
