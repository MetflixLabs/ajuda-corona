const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Ajuda Corona`,
    description: `Nos ajude a minerar criptomoedas que serão doadas na causa contra a COVID-19.`,
    author: `@MetflixLabs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ajuda Corona`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icons/maskIcon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`roboto`],
        display: 'swap',
      },
    },
    {
      resolve: `gatsby-plugin-gtag`,
      options: {
        // your google analytics tracking id
        trackingId: `UA-161435848-1`,
        // Puts tracking script in the head instead of the body
        head: false,
        // enable ip anonymization
        anonymize: true,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": path.resolve(__dirname, 'src'),
          "@components": path.resolve(__dirname, 'src/components'),
          "@hooks": path.resolve(__dirname, 'src/hooks'),
          "@layouts": path.resolve(__dirname, 'src/layouts'),
          "@pages": path.resolve(__dirname, 'src/pages'),
          "@sections": path.resolve(__dirname, 'src/sections'),
        },
        extensions: [
          "js",
          "css"
        ],
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
};
