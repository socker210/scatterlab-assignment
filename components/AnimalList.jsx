import React from 'react'
import PropTypes from 'prop-types'
import AnimalCard from './AnimalCard'

const AnimalList = ({ animals }) => (
  <section className='animalList' role='list'>
    <div className='animalList__container'>
      {
        animals.map(animal => (
          <div
            key={animal._id}
            className='animalList__item'>
            <AnimalCard {...animal} />
          </div>
        ))
      }
    </div>
  </section>
)

AnimalList.propTypes = {
  /**
   * Animal list
   */
  animals: PropTypes.instanceOf(Array).isRequired
}

export default AnimalList