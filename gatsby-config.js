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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-148362748-1",
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
