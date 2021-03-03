module.exports = {
  siteMetadata: {
    title: `Getting Started`,
    siteUrl: `https://skigengettingstarteddemo.gatsbyjs.io/`,
    description: `Getting started with Gatsby`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog/`,
      },
    },
  ],
};
