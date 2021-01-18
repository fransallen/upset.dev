import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/default';
import SEO from '../components/seo';
import BlogList from '../components/BlogList';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      description="Web performance and security resources."
      keywords={[`blog`, `news`, `ai`, `web`, `optimization`]}
    />
    <div>
      <BlogList blogs={data.allGhostPost.nodes} />
    </div>
  </Layout>
);

export default BlogPage;

export const query = graphql`
  query {
    allGhostPost {
      nodes {
        slug
        title
        reading_time
      }
    }
  }
`;
