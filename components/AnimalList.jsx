import React from 'react'
import PropTypes from 'prop-types'
import AnimalCard from './AnimalCard'
import '../styles/animalList.scss'

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]

const AnimalList = ({ animal }) => (
  <section className='animalList' role='list'>
    <div className='animalList__container'>
      {
        data.map(d => (
          <div className='animalList__item'>
            <AnimalCard
              img='https://loremflickr.com/320/240/cat?lock=2'
              name='Tabatha'
              gender='female'
              age={8}
            />
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
  animal: PropTypes.instanceOf(Array).isRequired
}

export default AnimalList