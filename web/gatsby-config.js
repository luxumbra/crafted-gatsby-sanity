const {
  api: { projectId, dataset }
} = require('../studio/sanity.json')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-sentry',
      options: {
        dsn: process.env.SENTRY_DSN_URL,
        // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
        environment: process.env.NODE_ENV,
        enabled: (() => ['production', 'development', 'stage'].indexOf(process.env.NODE_ENV) !== -1)()
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
