import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../layouts/default';
import SEO from '../components/seo';
import BlogList from '../components/BlogList';

const BlogPage = ({ data }) => (
  <Layout>
    <SEO
      title="Blog"
      description="Provides the resources to build fast, secure, and reliable modern web applications."
      keywords={[`blog`, `news`, `ai`, `web`, `optimization`]}
    />
    <div className="blogpage-header">
      <h1>Blog</h1>
      <p>
        From conceptual to technical, this blog helps provide the resources for
        building fast, secure, and reliable modern web applications.
      </p>
    </div>

    <div className="blogpage-content">
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
        excerpt
        published_at_pretty: published_at(formatString: "DD MMMM, YYYY")
        primary_author {
          name
          profile_image
        }
        primary_tag {
          name
        }
      }
    }
  }
`;
