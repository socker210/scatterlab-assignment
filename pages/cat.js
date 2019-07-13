import React from 'react'
import Jumbotron from '../components/Jumbotron'

class Cat extends React.Component {
  render () {
    return (
      <div id='cat'>
        <Jumbotron
          bg='static/images/cat_sample.jpg'
          title='냥냥이 리스트'
          desc='냥냥이를 볼 수 있는 리스트입니다'
        />
      </div>
    )
  }
}

export default Cat