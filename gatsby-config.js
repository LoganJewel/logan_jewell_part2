/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: 'The Shadow Realm',
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: ['gatsby-plugin-image',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: path.join(__dirname, 'src', 'images'),
      },
    },  
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
