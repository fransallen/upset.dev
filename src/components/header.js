import React from 'react';
import { Link } from 'gatsby';

const Header = () => (
  <header>
    <Link to="/">
      <h2 className="logo">upset.dev</h2>
    </Link>

    <nav>
      <li>
        <Link to="/projects/">Projects</Link>
      </li>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      <li>
        <a href="https://twitter.com/fransallen">Twitter</a>
      </li>
      <li>
        <Link to="/press/">Press</Link>
      </li>
      <li className="cta">
        <a href="https://www.patreon.com/fransallen">Become A Patron</a>
      </li>
    </nav>
  </header>
);

export default Header;
