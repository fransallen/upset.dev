import React from 'react';
import { Link, StaticQuery, graphql } from 'gatsby';

const menuQuery = graphql`
  query {
    takeshape {
      about: getAbout {
        socials {
          url
          icon
        }
      }
    }
  }
`;

const Menu = ({ data }) => (
  <header>
    <Link to="/">
      <h1>upset.dev</h1>
    </Link>

    <nav>
      {data.takeshape.about.socials.map((social, i) => (
        <li key={i}>
          <a href={social.url}>
            <i class={social.icon}></i>
          </a>
        </li>
      ))}
      <li>
        <a href="https://www.patreon.com/fransallen" class="patreon">
          Become A Patron
        </a>
      </li>
    </nav>
  </header>
);

export default () => (
  <StaticQuery query={menuQuery} render={data => <Menu data={data} />} />
);
