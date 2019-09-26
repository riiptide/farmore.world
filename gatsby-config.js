module.exports = {
  siteMetadata: {
    title: `Farmore Landing Page`,
    description: `A barebone landing page starter with some minimal styles.`,
    author:`farmore`,
    siteUrl:`http://farmore.world`,
    
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
//     {
//     resolve: "gatsby-plugin-google-tagmanager",
//     options: {
//       id: "G-4HGLPCCZQJ",

//       // Include GTM in development.
//       // Defaults to false meaning GTM will only be loaded in production.
//       includeInDevelopment: false,

//       // datalayer to be set before GTM is loaded
//       // should be an object or a function that is executed in the browser
//       // Defaults to null
//       defaultDataLayer: { platform: "gatsby" },

//       // Specify optional GTM environment details.
//       //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
//       //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
//       //dataLayerName: "YOUR_DATA_LAYER_NAME",
//     },
//   },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "G-4HGLPCCZQJ",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
}
