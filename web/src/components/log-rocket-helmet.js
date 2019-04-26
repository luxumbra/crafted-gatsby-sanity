import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

function LogRocketHelmet ({ project }) {
  return (
    <>
      <Helmet>
        <script src='https://cdn.logrocket.io/LogRocket.min.js' crossOrigin='anonymous' />
        <script>{`
          console.log('Hello')
          window.LogRocket && window.LogRocket.init('k6wwrb/crafted')
        `}
        </script>
      </Helmet>
    </>
  )
}

LogRocketHelmet.defaultProps = {
  project: 'k6wwrb/crafted'
}

LogRocketHelmet.propTypes = {
  project: PropTypes.string
}

export default LogRocketHelmet
