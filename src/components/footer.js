import React from 'react';
import { StaticQuery, graphql } from 'gatsby';

const menuFooterQuery = graphql`
  query {
    takeshape {
      footer: getFooter {
        descriptionHtml
        links {
          url
          text
        }
      }
    }
  }
`;

const MenuFooter = ({ data }) => (
  <footer>
    <div className="content">
      <div>
        <h3>About this website</h3>
        <section
          dangerouslySetInnerHTML={{
            __html: data.takeshape.footer.descriptionHtml,
          }}
        />
      </div>

      <div>
        <h3>Connect</h3>
        {data.takeshape.footer.links.map((link, i) => (
          <li key={i}>
            <a href={link.url}>{link.text}</a>
          </li>
        ))}
      </div>
    </div>

    <div className="copyright">
      Thanks to <a href="https://ljs.dev">ljs.dev</a> for buying me this cool
      domain.
    </div>
  </footer>
);

export default () => (
  <StaticQuery
    query={menuFooterQuery}
    render={data => <MenuFooter data={data} />}
  />
);
