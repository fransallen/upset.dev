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
        display: `minimal-ui`
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
          Authorization: `Bearer ${process.env.TAKESHAPE_TOKEN}`
        },
        fetchOptions: {}
      }
    },
    {
      resolve: `gatsby-plugin-umami`,
      options: {
        websiteId: `f9d79de3-ecc3-4b2e-98b8-f00c314a58aa`,
        srcUrl: `https://anila.statically.io/script.js`,
        includeInDevelopment: false,
        autoTrack: true,
        respectDoNotTrack: true,
      },
    }
  ]
};