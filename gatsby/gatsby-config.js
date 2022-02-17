module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-sanity',
    options: {
      "projectId": "6hj37n3f",
      "dataset": "production",
      token: process.env.SANITY_TOKEN,
      watchMode: true,
    }
  }, 
  "gatsby-plugin-styled-components", 
  "gatsby-plugin-image", 
  "gatsby-plugin-react-helmet", 
  "gatsby-plugin-sitemap",
  "gatsby-plugin-sharp", 
  "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};