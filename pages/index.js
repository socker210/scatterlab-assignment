import React from 'react'
import Jumbotron from '../components/Jumbotron'

class Index extends React.Component {
  render () {
    return (
      <div style={{ height: 5000 }}>
        <Jumbotron
          bg='static/images/bg.png'
          title='반려동물과 함께 행복한 인생을'
          desc='강아지 고양이와 함께 행복한 인생을 살아봐요'
        />
      </div>
    )
  }
}

export default Index