import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import '../styles/stickyHeader.scss'

class StickyHeader extends React.Component {
  constructor (props) {
    super(props)

    this.onSticky = this.onSticky.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onSticky)

    this.onSticky()
  }

  componentWillUnmount () {
    window.removeEventListener('scroll', this.onSticky)
  }

  onSticky () {
    if (window.pageYOffset) {
      this.header.classList.add('header--scroll')
    } else {
      this.header.classList.remove('header--scroll')
    }
  }

  render () {
    const { pathname } = this.props

    return (
      <header ref={ref => this.header = ref}>
        <div className='header__container'>
          <a href='/' className='logo'>
            <img src='http://www.scatterlab.co.kr/wp-content/uploads/2016/06/1.png' />
            <span className='alt'>Animals</span>
          </a>
          <nav>
            <Link href='/cat'>
              <a className={pathname === '/cat' ? 'focus' : ''}>
                <span>cat</span>
                <i className='fas fa-cat' />
              </a>
            </Link>
            <Link href='/dog'>
              <a className={pathname === '/dog' ? 'focus' : ''}>
                <span>dog</span>
                <i className='fas fa-dog' />
              </a>
            </Link>
          </nav>
        </div>
      </header>
    )
  }
}

StickyHeader.propTypes = {
  /**
   * Pathname
   */
  pathname: PropTypes.string.isRequired
}

export default StickyHeader