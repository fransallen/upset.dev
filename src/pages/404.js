import React from 'react';
import Layout from '../layouts/default';
import SEO from '../components/seo';

const NotFoundPage = () => (
  <Layout>
    <SEO title="Not Found" />
    <h2>NOT FOUND</h2>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
);

export default NotFoundPage;
