import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const menuQuery = graphql`
  query {
    takeshape {
      about: getAbout {
        socials {
          name
          url
        }
      }
    }
  }
`;

const Menu = ({ data }) => (
  <header>
    <Link to="/">
      <h2 className="logo">upset.dev</h2>
    </Link>

    <nav>
      <li>
        <Link to="/blog/">Blog</Link>
      </li>
      {data.takeshape.about.socials.map((social, i) => (
        <li key={i}>
          <a href={social.url}>{social.name}</a>
        </li>
      ))}
      <li className="patreon">
        <a href="https://www.patreon.com/fransallen">Become A Patron</a>
      </li>
    </nav>
  </header>
);

export default () => (
  <StaticQuery query={menuQuery} render={data => <Menu data={data} />} />
);
