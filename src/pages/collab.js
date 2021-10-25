import React from 'react';
import Layout from '../layouts/default';
import SEO from '../components/seo';

import JoinDiscordButton from '../../static/images/join-discord-button.png';

const CollabPage = () => (
  <Layout>
    <SEO
      title="Collab with Frans"
      description="Collab with Frans and make exciting products."
      keywords={[`collab`, `groups`, `community`, `frans allen`]}
    />
    <div className="blogpage-header">
      <h1>Collab with Frans</h1>
      <p>Let's make useful products for people :)</p>
    </div>

    <div className="blogpage-content text-center">
      <a href="https://discord.gg/qHFDk7BxfQ">
        <img style={{maxWidth: `250px`, borderRadius: `8px`}} src={JoinDiscordButton} alt="Join Discord server upset.dev" />
      </a>
    </div>
  </Layout>
);

export default CollabPage;
