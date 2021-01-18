const path = require('path');

/**
 * Here is the place where Gatsby creates the URLs for all the
 * posts, tags, pages and authors that we fetched from the Ghost site.
 */
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query {
      allGhostPost(sort: { order: ASC, fields: published_at }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `);

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Extract query results
  const posts = result.data.allGhostPost.edges

  // Create post pages
  posts.forEach(({ node }) => {
    // This part here defines, that our posts will use
    // a `/blog/:slug/` permalink.
    node.url = `/blog/${node.slug}/`;

    createPage({
      path: node.url,
      component: path.resolve('./src/components/Blog.js'),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
      },
    });
  });
};