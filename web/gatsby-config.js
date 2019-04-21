const {
  api: { projectId, dataset }
} = require('../studio/sanity.json')

require('dotenv').config()

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-rollbar',
      options: {
        accessToken: process.env.ROLLBAR_SECRET_TOKEN,
        // For all configuration options, see https://docs.rollbar.com/v1.0.0/docs/rollbarjs-configuration-reference
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
          environment: 'production'
        }
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto:100`, `Roboto Slab:100`, `Assistant:200`, `Material Icons`]
        }
      }
    },
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId,
        dataset,
        // To enable preview of drafts, copy .env-example into .env,
        // and add a token with read permissions
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}
