import React from 'react';
import Layout from '../layouts/default';
import SEO from '../components/seo';

const ProductsPage = () => (
  <Layout>
    <SEO
      title="Projects"
      description="Projects made by Frans Allen."
      keywords={[`projects`, `news`, `ai`, `web`, `optimization`]}
    />
    <div className="blogpage-header">
      <h1>Projects</h1>
      <p>All my projects, sorted from newest.</p>
    </div>

    <div id="products">
      <div className="upcoming">
        <div className="header">
          <h3>
            Upcoming
          </h3>
        </div>

        <div className="products">
          <a
            href="https://twitter.com/fransallen"
            style={{ background: `#c0d4ff` }}
          >
            <div>
              <span class="project-icon">P</span>
            </div>
            <div>
              <h4>PureDNS</h4>
              <p>Secure &amp; fast public DNS resolver.</p>
            </div>
          </a>
        </div>
      </div>

      <div className="products-all">
        <h3>All my projects</h3>
        <div className="projects2">
          <div>
            <a href="https://facemashclone.com/">
              <h4>Facemash Clone</h4>
              The Facemash site in the The Social Network movie.
            </a>
          </div>

          <div>
            <a href="https://http2.me/">
              <h4>http2.me</h4>
              The fun way to verify HTTP/2 support for websites and servers.
            </a>
          </div>

          <div>
            <a href="https://dinly.co/">
              <h4>Dinly</h4>
              Simple URL shortener with analytics &amp; custom back-half.
            </a>
          </div>

          <div>
            <a href="https://blobcdn.com/">
              <h4>BlobCDN</h4>
              A simple CDN for generating SVG shapes on the fly.
            </a>
          </div>

          <div>
            <a href="https://indi.wtf/">
              <h4>indi.wtf</h4>
              Website checking tool using the Telkom Indonesia network.
            </a>
          </div>

          <div>
            <a href="https://thedev.id/">
              <h4>thedev.id</h4>
              An identity for developers on the web.
            </a>
          </div>

          <div>
            <a href="https://statically.io/">
              <h4>Statically</h4>A free CDN for developers.
            </a>
          </div>
        </div>
      </div>

      <div className="see-more mt-10">
        <a href="https://github.com/fransallen">
          Check out my open-source projects
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>
        </a>
      </div>
    </div>
  </Layout>
);

export default ProductsPage;
