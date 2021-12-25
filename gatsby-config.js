module.exports = {
  siteMetadata: {
    siteUrl: 'https://www.yourdomain.tld',
    title: 'portfolio',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-image',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    // {
    //   resolve: 'gatsby-plugin-manifest',
    //   options: {
    //     icon: 'static/music.svg',
    //   },
    // },
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    // {
    //   resolve: 'gatsby-plugin-layout',
    //   options: {
    //     component: require.resolve('./src/components/Layout/index.tsx'),
    //   },
    // },
    // {
    //   resolve: 'gatsby-source-filesystem',
    //   options: {
    //     name: 'images',
    //     path: './src/images/',
    //   },
    //   __key: 'images',
    // },
  ],
};
