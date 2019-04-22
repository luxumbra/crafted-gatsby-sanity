import { graphql, StaticQuery } from 'gatsby'
import React, { useState, useEffect } from 'react'
// import ErrorBoundary from '../components/error-boundary'

import Layout from '../components/layout'

import feather from 'feather-icons'
import Typed from 'typed.js'

import '../styles/theme.css'
import styles from '../components/header.module.css'

const query = graphql`
  query SiteTitleQuery {
    site: sanitySiteSettings(_id: { regex: "/(drafts.|)siteSettings/" }) {
      title
    }
    companyInfo: sanityCompanyInfo(_id: { regex: "/(drafts.|)companyInfo/" }) {
      name
      address1
      address2
      zipCode
      city
      country
    }
  }
`

function LayoutContainer (props) {
  const [showNav, setShowNav] = useState(false)
  function handleShowNav () {
    setShowNav(true)
  }
  function handleHideNav () {
    setShowNav(false)
  }

  useEffect(() => {
    // const srRevealSlooooow = {
    //   delay: 1500,
    //   duration: 1000,
    //   reset: true,
    //   mobile: true
    // }
    // const srRevealSlooow = {
    //   delay: 700,
    //   duration: 700,
    //   reset: true,
    //   mobile: true
    // }
    // const srRevealSlow = {
    //   delay: 600,
    //   duration: 700,
    //   reset: true,
    //   mobile: true
    // }
    // const srRevealFast = {
    //   delay: 400,
    //   duration: 400,
    //   reset: true,
    //   mobile: true
    // }
    // const srRevealOnce = {
    //   reset: false
    // }

    if (typeof window !== `undefined`) {
      // we need to check if `window` is defined when building the site so not to break the build
      // https://www.gatsbyjs.org/docs/debugging-html-builds/

      // ScrollReveal().reveal(['sr-fast'], srRevealFast)
      // ScrollReveal().reveal(['sr-slow'], srRevealSlow)
      // ScrollReveal().reveal(['sr-really-slow'], srRevealSlooooow)
      // ScrollReveal().reveal(['sr-once'], srRevealOnce)

      /* typed effect */
      const typedEl = document.querySelector('.typed')
      const typedOptions = {
        strings: [
          'Web development^1000',
          'Web design^1000',
          'Ecommerce ^1000',
          'Hand crafted websites^700 made in the Isle of Man^400.'
        ],
        typeSpeed: 50,
        backDelay: 200,
        fadeOut: false,
        loop: false
      }
      if (typedEl) {
        const typed = new Typed(typedEl, typedOptions)
      }

      // var scroll = new SmoothScroll('a[href*='#']', {
      //   easing: 'easeInOutQuad',
      //   updateURL: true,
      //   popstate: true,
      //   speed: 1000
      // });

      feather.replace()

      // sticky nav bar.
      const content = document.querySelector('#content')
      const navbar = document.querySelector('header')
      const navHeight = navbar.offsetHeight
      const sticky = content.offsetTop

      const navbarSticky = () => {
        if (window.pageYOffset > sticky + navHeight + 25) {
          navbar.classList.add(styles.sticky)
        } else {
          navbar.classList.remove(styles.sticky)
        }
      }
      window.onscroll = () => navbarSticky()
    }
  }, [])

  return (
    <StaticQuery
      query={query}
      render={data => {
        if (!data.site) {
          throw new Error(
            'Missing "Site settings". Open the studio at http://localhost:3333 and add "Site settings" data'
          )
        }
        if (!data.companyInfo) {
          throw new Error(
            'Missing "Company info". Open the studio at http://localhost:3333 and add "Company info" data'
          )
        }
        return (
          <Layout
            {...props}
            showNav={showNav}
            companyInfo={data.companyInfo}
            siteTitle={data.site.title}
            onHideNav={handleHideNav}
            onShowNav={handleShowNav}
          />
        )
      }}
    />
  )
}

export default LayoutContainer
