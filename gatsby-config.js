/**
 * @type {import('gatsby').GatsbyConfig}
 */

const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: 'The Shadow Realm',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ['gatsby-plugin-image',  
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: path.join(__dirname, `src`, `images`),
    },
  },
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp', 
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/DeckInfo`,
      }
    }
  ],
};
