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
      resolve: `gatsby-source-graphql`,
      options: {
        typeName: `TS`,
        fieldName: `takeshape`,
        url: `https://api.takeshape.io/project/${
          process.env.TAKESHAPE_PROJECT
        }/graphql`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`,
        },
        fetchOptions: {},
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
        srcUrl: `https://anila.statically.io/script.js`,
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
