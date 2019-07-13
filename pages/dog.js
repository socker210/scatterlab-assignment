import React from 'react'
import Jumbotron from '../components/Jumbotron'

class Dog extends React.Component {
  render () {
    return (
      <div id='dog'>
        <Jumbotron
          bg='static/images/dog_sample.jpg'
          title='멍멍이 리스트'
          desc='멍멍이를 볼 수 있는 리스트입니다'
        />
      </div>
    )
  }
}

export default Dog