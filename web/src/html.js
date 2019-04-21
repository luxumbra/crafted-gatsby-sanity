import React from 'react'
import PropTypes from 'prop-types'
// import Rollbar from 'rollbar'
import LogRocket from 'logrocket'

export default class HTML extends React.Component {
  // constructor (props) {
  //   super(props)

  //   this.state = {
  //     rollbar: new Rollbar({
  //       accessToken: process.env.ROLLBAR_SECRET_TOKEN,
  //       captureUncaught: true,
  //       captureUnhandledRejections: true,
  //       payload: {
  //         environment: 'development'
  //       }
  //     })
  //   }

  //   this.logInfo = this.logInfo.bind(this)
  //   this.throwError = this.throwError.bind(this)
  // }

  // logInfo () {
  //   this.state.rollbar.info('Crafted test log')
  // }

  // throwError () {
  //   throw new Error('Crafted test error')
  // }

  componentWillMount () {
    LogRocket.init('k6wwrb/crafted')
  }

  render () {
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <meta charSet='utf-8' />
          <meta httpEquiv='x-ua-compatible' content='ie=edge' />
          <meta name='viewport' content='width=device-width, initial-scale=1, shrink-to-fit=no' />
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#cf142b' />
          <meta name='msapplication-TileColor' content='#181717' />
          <meta name='theme-color' content='#181717' />
          {this.props.headComponents}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <noscript key='noscript' id='gatsby-noscript'>
            This app works best with JavaScript enabled.
          </noscript>
          <div key={`body`} id='___gatsby' dangerouslySetInnerHTML={{ __html: this.props.body }} />
          {this.props.postBodyComponents}
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
