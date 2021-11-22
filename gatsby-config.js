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
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: `024613e4-2391-49da-8577-c9aeb85e4e0b`,
        srcUrl: `https://respectedprivacy.com/app`,
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-remove-generator`,
    `gatsby-plugin-sitemap`,
  ]
};
