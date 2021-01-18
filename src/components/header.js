import React from 'react';
import Helmet from 'react-helmet';

const Header = () => (
  <Helmet>
    <html lang="en" />
    <meta charSet="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="dns-prefetch" href="//cdn.statically.io" />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400;600;700;900&display=swap"
    />
  </Helmet>
);

export default Header;
