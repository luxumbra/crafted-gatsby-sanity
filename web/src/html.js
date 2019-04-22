import React from 'react'
import PropTypes from 'prop-types'
import * as Sentry from '@sentry/browser'

export default class HTML extends React.Component {
  constructor (props) {
    super(props)
    this.state = { error: null, eventId: null }
  }

  componentDidCatch (error, errorInfo) {
    this.setState({ error })
    Sentry.withScope(scope => {
      scope.setExtras(errorInfo)
      const eventId = Sentry.captureException(error)
      this.setState({ eventId })
    })
  }

  render () {
    if (this.state.error) {
      // render fallback UI
      return (
        <>
          <h1>Ooops! There's a bit of a problem.</h1>
          <p>We use full error tracking and monitoring at Crafted, so will be notified of this problem and will get it fixed ASAP.</p>
          <p>If you'd like, you can <a onClick={() => Sentry.showReportDialog({ eventId: this.state.eventId })}>report feedback</a> to us.</p>
        </>
      )
    } else {
      // when there's not an error, render children untouched
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
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
