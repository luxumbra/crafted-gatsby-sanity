const {
  api: { projectId, dataset }
} = require('../studio/sanity.json')

require('dotenv').config()

module.exports = {
  plugins: [
    // {
    //   resolve: 'gatsby-plugin-sentry',
    //   options: {
    //     dsn: 'https://4623fe299a494902b98fdc047357484d@sentry.io/1391874',
    //     // Optional settings, see https://docs.sentry.io/clients/node/config/#optional-settings
    //     environment: process.env.NODE_ENV,
    //     enabled: (() => ['production', 'stage'].indexOf(process.env.NODE_ENV) !== -1)()
    //   }
    // },
    {
      resolve: "gatsby-plugin-rollbar",
      options: {
        accessToken: "d1d3f261f8aa4673bab4211b4a3c9178",
        // For all configuration options, see https://docs.rollbar.com/v1.0.0/docs/rollbarjs-configuration-reference
        captureUncaught: true,
        captureUnhandledRejections: true,
        payload: {
          environment: "production"
        }
      }
    },
    'gatsby-plugin-postcss',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-web-font-loader`,
      options: {
        google: {
          families: [`Roboto:100`, `Roboto Slab:100`, `Assistant:200`]
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
