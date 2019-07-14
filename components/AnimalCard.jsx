import React from 'react'
import PropTypes from 'prop-types'
import '../styles/AnimalCard.scss'

const getGenderIcon = gender => (gender === 'female' ? <i className='gender--f fas fa-venus' /> : <i className='gender--m fas fa-mar' />)

const AnimalCard = ({
  img,
  name,
  age,
  gender
}) => (
  <div className='animal'>
    <div className='animal__img'>
      <img src={img} alt='animal' />
      <div className='animal_placeholder' />
    </div>
    <div className='animal__text'>
      <div>
        <span className='name'>{name}</span>
        <span className='age'>{age}세</span>
        {getGenderIcon(gender)}
      </div>
    </div>
  </div>
)

AnimalCard.propTypes = {
  /**
   * Image
   */
  img: PropTypes.string.isRequired,
  /**
   * Name
   */
  name: PropTypes.string.isRequired,
  /**
   * Age
   */
  age: PropTypes.number.isRequired,
  /**
   * Gender
   */
  gender: PropTypes.string.isRequired
}

export default AnimalCard