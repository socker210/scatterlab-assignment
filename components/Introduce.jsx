import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

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
        <Link href={url}>
          <div className='introduce__href'>
            <a>{urlTitle}</a>
          </div>
        </Link>
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