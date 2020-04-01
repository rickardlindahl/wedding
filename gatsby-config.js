module.exports = {
  pathPrefix: "/wedding",
  siteMetadata: {
    title: "Linnéa & Rickard",
    description:
      "Linnéa & Rickards bröllop 8/8 2020. Här hittar du all information om vigselceremonin, bröllopsfesten, mat, tal, transport, boende, m.m.",
    author: "@rickardlindahl",
    email: "linneaochrickard@gmail.com",
    url: "https://wedding.rickardlindahl.com",
    image: "/images/1080p_RickardLinnea.jpg",
  },
  plugins: [
    {
      resolve: "gatsby-plugin-typescript",
      options: {
        isTSX: true,
        jsxPragma: "React",
        allExtensions: true,
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "${__dirname}/src/images",
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Linnéa & Rickards bröllop",
        short_name: "L&R bröllop",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#ded4cd",
        display: "minimal-ui",
        icon: "src/images/icon512.png", // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        cssLoaderOptions: {
          camelCase: false,
        },
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
  ],
}
