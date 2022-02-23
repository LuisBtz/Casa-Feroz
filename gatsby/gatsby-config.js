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
  },
  {
    resolve: "gatsby-plugin-mailchimp",
    options: {
      endpoint:
        "https://dreamx.us20.list-manage.com/subscribe/post?u=11a03b5699119a55c0e253226&amp;id=cc04537fdd", // string; add your MC list endpoint here; see instructions below
      timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
    },
  },
]
};