import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const Post = ({ data }) => {
  const post = data.ghostPost
  return (
    <>
      <Layout>
        <SEO
          title={post.title}
          description={post.meta_description}
        />
        <article className="blog">
          <div className="blog-header">
            <h1>{post.title}</h1>
            <div className="meta">
              <div className="published-at"><time>{post.published_at_pretty}</time> · {post.reading_time} minutes read</div>
              <div className="author"><img src={post.primary_author.profile_image} /> {post.primary_author.name}</div>
            </div>
          </div>
          <div
            className="blog-content"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <div className="blog-footer">
            <Link to="/blog">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
              <span>Back to Blog</span>
            </Link>
          </div>
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
