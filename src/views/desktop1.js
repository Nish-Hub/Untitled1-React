import React from 'react'

import { Helmet } from 'react-helmet'

import SignIn6 from '../components/sign-in6'
import './desktop1.css'

const Desktop1 = (props) => {
  return (
    <div className="desktop1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="desktop1-desktop1"></div>
      <form className="desktop1-form"></form>
      <SignIn6></SignIn6>
    </div>
  )
}

export default Desktop1
