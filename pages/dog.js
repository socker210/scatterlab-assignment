import React from 'react'
import AnimalLayout from '../layout/AnimalLayout'
import { fetchDogs } from '../api'

class Dog extends React.Component {
  render () {
    return (
      <AnimalLayout
        containerId='dog'
        jumbotronProps={{
          bg: 'static/images/dog_sample.jpg',
          title: '멍멍이 리스트',
          desc: '멍멍이를 볼 수 있는 리스트입니다'
        }}
        api={fetchDogs}
      />
    )
  }
}

export default Dog