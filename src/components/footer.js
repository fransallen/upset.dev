import { Link } from 'gatsby';
import React from 'react';

const Footer = () => (
  <footer>
    <div className="content">
      <div>
        <h3>About this website</h3>
        <section>
          <p>
            Welcome to my personal website! This place is where I showcase the
            projects I'm working on, most of them are open source.
          </p>
        </section>
      </div>

      <div class="connect">
        <h3>Connect</h3>
        <li>
          <a href="https://fransceo.com/">My Indonesian blog</a>
        </li>
        <li>
          <a href="https://twitter.com/fransallen">Follow me on Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/fransallen/">
            Follow me on Instagram
          </a>
        </li>
        <li>
          <a href="https://github.com/fransallen">Follow me on GitHub</a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/fransallen">
            Let's connect on LinkedIn
          </a>
        </li>
      </div>
    </div>

    <div className="copyright">
      <div>
        &copy; 2021 <Link to="/">Frans Allen</Link>
      </div>
      <div className="thanks-to">
        Special thanks to <a href="https://ljs.dev/">ljs.dev</a> for buying me
        this super cool domain and all my sponsors, contributors, and followers
        for supporting me on my journey ❤️
      </div>
    </div>
  </footer>
);

export default Footer;
