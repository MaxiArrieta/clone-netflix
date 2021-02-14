module.exports = {
  siteMetadata: {
    title: `Netflix`,
    description: `Clone de Netflix by Maximiliano Arrieta`,
    author: `Maximiliano Arrieta <arrieta.maxi18@gmail.com>`,
    siteUrl: `https://the-netflix.netlify.app/`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-offline",
      options: {
        precachePages: [`/*`],
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `Netflix`,
        short_name: `Netflix`,
        lang: `es`,
        display: `standalone`,
        icon: "src/images/icon.png",
        start_url: `/`,
        background_color: `#000000`,
        theme_color: `#000000`,
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: "SWAPI",
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: "swapi",
        // Url to query from
        url: "https://swapi-graphql.netlify.app/.netlify/functions/index",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
}
