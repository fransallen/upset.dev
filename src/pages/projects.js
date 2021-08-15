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
            <img
              src="https://cdn.statically.io/libs/twemoji/13.1.0/svg/1f973.svg"
              alt="Partying face"
            />
            Upcoming!
          </h3>
        </div>

        <div className="products">
          <a
            href="https://twitter.com/devfess"
            style={{ background: `#fffad9` }}
          >
            <div>
              <span class="project-icon">D</span>
            </div>
            <div>
              <h4>Devfess</h4>
              <p>A QnA-based community on Twitter.</p>
            </div>
          </a>

          <a href="https://imagesimple.co/" style={{ background: `#e7fffe` }}>
            <div>
              <span class="project-icon">I</span>
            </div>
            <div>
              <h4>ImageSimple</h4>
              <p>
                An affordable image optimization service well designed for
                Indonesian users.
              </p>
            </div>
          </a>

          <a href="https://blobcdn.com/" style={{ background: `#ffeef7` }}>
            <img
              src="https://cdn.statically.io/img/blobcdn.com/blobcdn-mark.svg"
              alt="BlobCDN"
            />
            <div>
              <h4>BlobCDN</h4>
              <p>The CDN for beautiful SVG shapes.</p>
            </div>
          </a>
        </div>
      </div>

      <div className="products-all">
        <h3>All my projects</h3>
        <div className="projects2">
          <div>
            <a href="https://indostatus.com/">
              <h4>Indostatus</h4>
              Independent monitoring for government websites.
            </a>
          </div>

          <div>
            <a href="https://cekwebsitesaya.com/">
              <h4>CekWebsiteSaya.com</h4>
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
            <a href="https://github.com/fransallen/puredns">
              <h4>PureDNS</h4>
              An open source DNS resolver.
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
          Check out my open source projects
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
