require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: `Frans Allen`,
    siteUrl: `https://upset.dev`,
    description: `Web performance and security resources.`,
    author: `@fransallen`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `upset.dev`,
        start_url: `/`,
        display: `minimal-ui`,
        icon: `static/images/icon.png`,
      }
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: process.env.GHOST_API_URL,
        contentApiKey: process.env.GHOST_CONTENT_API_KEY,
      }
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-remove-generator`,
    `gatsby-plugin-sitemap`,
  ]
};
