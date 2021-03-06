const {
  api: { projectId, dataset }
} = require('../studio/sanity.json')

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`
})

module.exports = {
  plugins: [
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
        token: 'skrA5UVGeTdPSO53kafzAHzLPDXMjOoG3p5Uuef5ilv8LsncVZ2iDPFtBosKVnznVZixAlIxwcLPAm7NXId3kY5aUHDdjp8ixurK5KZFLwlyxz0SGWiEjyAoyyiqqWsTB29D5j5Kaf9eQbzYEkbRgm13QK2FMS5WKs3cQleyOtuZ2FTRXzPl',
        watchMode: true,
        overlayDrafts: true
      }
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`
  ]
}
