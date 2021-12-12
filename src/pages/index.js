import { Link } from 'gatsby';
import React from 'react';
import Layout from '../layouts/default';
import SEO from '../components/seo';

import FransAllenPhoto from '../../static/images/frans-allen.jpg';

const resizedFransPhoto = `https://cdn.statically.io/img/upset.dev` + FransAllenPhoto + '?w=300';

const IndexPage = () => (
  <Layout>
    <SEO
      title="Founder of Statically and other open source projects"
      description="I am an independent software developer who loves to build things that can improve people's lives."
      keywords={[`open source`, `software`, `javascript`]}
    />
    <div className="block md:flex items-center" id="whoami">
      <div className="text-center">
        <img src={resizedFransPhoto} />
      </div>
      <div className="bio">
        <h2 style={{fontSize: `2.2em`}}>Hi, I'm Frans Allen</h2>

        <p>
          I am an <span className="text-gradient">independent software developer</span> who loves to build things that
          can improve people's lives. Most of my work is open source and
          publicly available on{' '}
          <a href="https://github.com/fransallen">GitHub</a>.
        </p>

        <p>In a single day: playing music and watching movies.</p>
      </div>
    </div>

    <div id="projects">
      <h2 className="title">Projects/OSS</h2>

      <div className="projects">
        <a href="https://statically.io/" className="project">
          <div className="header">
            <div>
              <img
                src="https://cdn.statically.io/img/statically.io/images/branding/statically-mark.svg"
                alt="Statically"
              />
            </div>
            <h3>Statically</h3>
          </div>
          <p>The CDN for developers.</p>
          <small><em>Released in 2018</em></small>
        </a>

        <a href="https://blobcdn.com/" className="project">
          <div className="header">
            <div>
              <img
                style={{ width: `42px`, height: `42px`, marginRight: `8px` }}
                src="https://cdn.statically.io/img/blobcdn.com/blobcdn-mark.svg"
                alt="BlobCDN"
              />
            </div>
            <h3>BlobCDN</h3>
          </div>
          <p>On-the-fly SVG shapes maker.</p>
          <small><em>Released in 2021</em></small>
        </a>

        <a href="https://http2.me/" className="project">
          <div className="header">
            <div>
              <span className="project-icon">h</span>
            </div>
            <h3>http2.me</h3>
          </div>
          <p>Check HTTP/2 support.</p>
          <small><em>Released in 2021</em></small>
        </a>
      </div>
    </div>

    <div id="projects2">
      <div className="projects2">
        <div>
          <a href="https://dinly.co/">
            <h4>Dinly</h4>
            Simple URL shortener with analytics &amp; custom back-half.
          </a>
        </div>

        <div>
          <a href="https://thedev.id/">
            <h4>thedev.id</h4>
            An identity for developers on the web.
          </a>
        </div>

        <div>
          <a href="https://github.com/staticallyio/screenshot">
            <h4>Screenshot</h4>
            Open-source screenshot API.
          </a>
        </div>

        <div>
          <a href="https://wordpress.org/plugins/statically/">
            <h4>Statically WordPress Plugin</h4>
            Statically + WordPress integration.
          </a>
        </div>
      </div>

      <div className="see-more mt-10">
        <Link to="/projects/">
          View all my projects
          <svg
            width="24"
            height="24"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
          </svg>
        </Link>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
