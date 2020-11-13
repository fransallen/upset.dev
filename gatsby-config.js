require(`dotenv`).config();

module.exports = {
  siteMetadata: {
    title: `upset.dev`
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
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: `024613e4-2391-49da-8577-c9aeb85e4e0b`,
        srcUrl: `https://anila.statically.io/script.js`,
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    },
    `gatsby-plugin-remove-generator`,
  ]
};
