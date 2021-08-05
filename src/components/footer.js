import React from 'react';

const Footer = () => (
  <footer>
    <div className="content">
      <div>
        <h3>About this website</h3>
        <section>
          <p>Welcome to my personal website! This place is where I showcase the projects I'm working on, most of them are open source.</p>
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
          <a href="https://instagram.com/fransallen">Follow me on Instagram</a>
        </li>
        <li>
          <a href="https://github.com/fransallen">Collaborate with me</a>
        </li>
        <li>
          <a href="https://volt.fm/frans">My playlist</a>
        </li>
      </div>
    </div>

    <div className="copyright">
      Thanks to <a href="https://ljs.dev">ljs.dev</a> for buying me this cool
      domain.
    </div>
  </footer>
);

export default Footer;
