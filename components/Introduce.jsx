import React from 'react'
import PropTypes from 'prop-types'
import '../styles/introduce.scss'

const Introduce = ({
  title,
  desc,
  img,
  url,
  urlTitle
}) => (
  <section className='introduce'>
    <div className='introduce__container'>
      {
        img &&
        <>
          <div style={{ backgroundImage: `url(${img})` }} className='introduce__img' />
          <div className='introduce__opacity' />
        </>
      }
      <div className={`introduce__text ${!img ? 'introduce__text--no-bg' : ''}`}>
        <h1 className='title'>{title}</h1>
        <h3 className='desc'>{desc}</h3>
      </div>
      {
        url &&
        <div className='introduce__href'>
          <a href={url}>{urlTitle}</a>
        </div>
      }
    </div>
  </section>
)

Introduce.propTypes = {
  /**
   * Title
   */
  title: PropTypes.string.isRequired,
  /**
   * Description
   */
  desc: PropTypes.string.isRequired,
  /**
   * Sample image
   */
  img: PropTypes.string,
  /**
   * Url
   */
  url: PropTypes.string,
  /**
   * Url button title
   */
  urlTitle: PropTypes.string
}

export default Introduce