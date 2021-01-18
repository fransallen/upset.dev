import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <>
      <Layout>
        <SEO
          title={post.title}
          description={post.excerpt}
        />
        <article className="blog">
          <div className="blog-header">
            <div className="info">
              <span>{post.primary_tag.name}</span>
            </div>
            <h1>{post.title}</h1>
            <div className="meta">
              By <strong>{post.primary_author.name}</strong> at <strong>{post.published_at_pretty}</strong>
            </div>
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
      </Layout>
    </>
  )
}

Post.propTypes = {
  data: PropTypes.shape({
    ghostPost: PropTypes.shape({
      title: PropTypes.string.isRequired,
      html: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
}

export default Post;

export const postQuery = graphql`
  query($slug: String!) {
    ghostPost(slug: { eq: $slug }) {
      ...GhostPostFields
    }
  }
`;
