import React from 'react';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';

import Layout from '../layouts/default';
import SEO from '../components/seo';

const Post = ({ data }) => {
  const post = data.ghostPost
  const discussUrl = `https://twitter.com/search?q=${encodeURIComponent(
    `https://upset.dev/blog/${post.slug}`
  )}`;

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
            <Link className="left" to="/blog">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z"/></svg>
              <span>Back to Blog</span>
            </Link>
            <a className="right" href={discussUrl} rel="noopener noreferrer" target="_blank">
              <span>Open a discussion</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 32C114.6 32 0 125.1.0 240c0 47.6 19.9 91.2 52.9 126.3C38 405.7 7 439.1 6.5 439.5c-6.6 7-8.4 17.2-4.6 26S14.4 480 24 480c61.5.0 110-25.7 139.1-46.3C192 442.8 223.2 448 256 448c141.4.0 256-93.1 256-208S397.4 32 256 32zm0 368c-26.7.0-53.1-4.1-78.4-12.1l-22.7-7.2-19.5 13.8c-14.3 10.1-33.9 21.4-57.5 29 7.3-12.1 14.4-25.7 19.9-40.2l10.6-28.1-20.6-21.8C69.7 314.1 48 282.2 48 240c0-88.2 93.3-160 208-160s208 71.8 208 160-93.3 160-208 160z"/></svg>
            </a>
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
