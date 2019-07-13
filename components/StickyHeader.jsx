import React from 'react'

class StickyHeader extends React.Component {
  constructor (props) {
    super(props)

    this.onSticky = this.onSticky.bind(this)
  }

  componentDidMount () {
    window.addEventListener('scroll', this.onSticky)

    this.onSticky()
  }

  componentWillUnmont () {
    window.removeEventListener('scroll', this.onSticky)
  }

  onSticky () {
    if (window.pageYOffset) {
      this.header.classList.add('header--sticky')
    } else {
      this.header.classList.remove('header--sticky')
    }
  }

  render () {
    return (
      <header ref={ref => this.header = ref}>
        <div className='header__container'>
          <div className='container__logo'>
            <img src='static/images/scatterlab.png' />
            <small>with <span className='logo__species logo__species--dog'>dogs</span> & <span className='logo__species logo__species--cat'>cats</span></small>
          </div>
          <nav>
            <a href='/dogs' className='nav__dogs'>dogs</a>
            <a href='/cats' className='nav__cats'>cats</a>
          </nav>
        </div>
      </header>
    )
  }
}

export default StickyHeader