import React from 'react'
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
    return (
      <header ref={ref => this.header = ref}>
        <div className='header__container'>
          <div className='logo'>
            <img src='http://www.scatterlab.co.kr/wp-content/uploads/2016/06/1.png' />
            <span className='alt'>Animals</span>
          </div>
          <nav>
            <a href='/cat'>
              <span>cat</span>
              <i className='fas fa-cat' />
            </a>
            <a href='/dog'>
              <span>dog</span>
              <i className='fas fa-dog' />
            </a>
          </nav>
        </div>
      </header>
    )
  }
}

export default StickyHeader