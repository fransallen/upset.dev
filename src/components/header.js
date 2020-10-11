import React from 'react';
import Helmet from 'react-helmet';

const Header = ({ siteTitle }) => (
  <Helmet>
    <html lang="en" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>{siteTitle}</title>
    <meta
      name="description"
      content="Frans Allen is creating Statically &amp; other open source software."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@fransallen" />
    <meta name="twitter:title" content="Frans Allen" />
    <meta
      name="twitter:description"
      content="Frans Allen is creating Statically &amp; other open source software."
    />
    <meta property="og:url" content="https://upset.dev" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Frans Allen" />
    <meta
      property="og:description"
      content="Frans Allen is creating Statically &amp; other open source software."
    />
    <meta
      property="og:image"
      content="https://cdn.statically.io/screenshot/upset.dev"
    />
    <meta
      name="twitter:image"
      content="https://cdn.statically.io/screenshot/upset.dev"
    />
    <link
      rel="stylesheet"
      href="https://cdn.statically.io/libs/font-awesome/5.13.1/css/brands.min.css"
    />
  </Helmet>
);

export default Header;
