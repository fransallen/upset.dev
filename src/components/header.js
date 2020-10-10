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
      content="Independent software developer, creator of Statically, thedev.id, etc."
    />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="@fransallen" />
    <meta
      name="twitter:title"
      content="upset.dev - independent software developer"
    />
    <meta
      name="twitter:description"
      content="Independent software developer, creator of Statically, thedev.id, etc."
    />
    <meta property="og:url" content="https://upset.dev" />
    <meta property="og:type" content="website" />
    <meta
      property="og:title"
      content="upset.dev - independent software developer"
    />
    <meta
      property="og:description"
      content="Independent software developer, creator of Statically, thedev.id, etc."
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
