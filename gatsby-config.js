module.exports = {
  pathPrefix: "/wedding",
  siteMetadata: {
    title: `Linnéa & Rickard`,
    description: `Information om vigselceremoni, festen, etc`,
    author: `@rickardlindahl`,
    email: `linneaochrickard@gmail.com`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `React`,
        allExtensions: true,
      },
    },
    `gatsby-plugin-react-helmet`,
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
        name: `Linnéa & Rickards bröllop`,
        short_name: `Linnéa & Rickard`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ded4cd`,
        display: `minimal-ui`,
        icon: `src/images/icon512.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
