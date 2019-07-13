import React from 'react'
import PropTypes from 'prop-types'
import '../styles/jumbotron.scss'

const Jumbotron = ({
  bg,
  title,
  desc
}) => (
  <section className='jumbotron' role='banner'>
    <div className='jumbotron__bg' style={{ backgroundImage: `url(${bg})` }} />
    <div className='jumbotron__opacity' />
    <div className='jumbotron__desc'>
      <h1>{title}</h1>
      <h3>{desc}</h3>
    </div>
  </section>
)

Jumbotron.propTypes = {
  /**
   * Background image
   */
  bg: PropTypes.string.isRequired,
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Description
   */
  desc: PropTypes.string.isRequired
}

export default Jumbotron