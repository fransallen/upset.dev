import { Link } from 'gatsby';
import React from 'react';
import Layout from '../layouts/default';
import SEO from '../components/seo';

import FransAllenPhoto from '../../static/images/frans-allen.jpg';
import logoGoogle from '../../static/images/partners/google.svg';
import logoAmazon from '../../static/images/partners/amazon.svg';
import logoCloudflare from '../../static/images/partners/cloudflare.svg';
import logoFastly from '../../static/images/partners/fastly.svg';
import logoDigitalocean from '../../static/images/partners/digitalocean.svg';

const resizedFransPhoto = FransAllenPhoto + '?w=300';

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
        <h2>👋 Hi, I'm Frans Allen!</h2>

        <p>
          I am an independent software developer who loves to build things that
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
          <p>A free CDN for developers.</p>
          <small>Released in 2018</small>
        </a>

        <a href="https://thedev.id/" className="project">
          <div className="header">
            <div>
              <span class="project-icon">t</span>
            </div>
            <h3>thedev.id</h3>
          </div>
          <p>An identity for developers on the web.</p>
          <small>Released in 2020</small>
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
          <small>Released in 2021</small>
        </a>
      </div>
    </div>

    <div id="projects2">
      <div className="projects2">
        <div>
          <a href="https://github.com/staticallyio/avatar">
            <h4>Avatar</h4>A simple and beautiful avatar service.
          </a>
        </div>

        <div>
          <a href="https://github.com/staticallyio/icon">
            <h4>Icon</h4>
            Get a website icon by crawling HTML.
          </a>
        </div>

        <div>
          <a href="https://github.com/staticallyio/screenshot">
            <h4>Screenshot</h4>
            Screenshot API to convert web to image or PDF. Supports desktop and
            mobile view.
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

    <div id="partners" className="section mt-20">
      <h2 className="title">Brands I've Partnered With</h2>

      <div className="partners-logo">
        <div>
          <img className="partner-google" src={logoGoogle} alt="Google" />
        </div>

        <div>
          <img className="partner-amazon" src={logoAmazon} alt="Amazon" />
        </div>

        <div>
          <img
            className="partner-cloudflare"
            src={logoCloudflare}
            alt="Cloudflare"
          />
        </div>

        <div>
          <img className="partner-fastly" src={logoFastly} alt="Fastly" />
        </div>

        <div>
          <img
            className="partner-digitalocean"
            src={logoDigitalocean}
            alt="DigitalOcean"
          />
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
