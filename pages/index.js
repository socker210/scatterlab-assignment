import React from 'react'
import Jumbotron from '../components/Jumbotron'
import Introduce from '../components/Introduce'

class Index extends React.Component {
  render () {
    return (
      <div id='index'>
        <Jumbotron
          bg='static/images/bg.png'
          title='반려동물과 함께 행복한 인생을'
          desc='강아지 고양이와 함께 행복한 인생을 살아봐요'
        />
        <Introduce
          title='반려동물? 관심?'
          desc='반려동물에게 얼마나 관심이 있나요?'
        />
        <Introduce
          title='멍멍이와 함께'
          desc='귀여운 멍멍이와 함께 인생을 살아가는건 어떤가요?'
          img='static/images/dog_sample.jpg'
          url='/dog'
          urlTitle='멍멍이 보러 가기'
        />
        <Introduce
          title='또 다른 매력'
          desc='시크한 매력을 가진 반려동물?'
        />
        <Introduce
          title='냥냥이와 함께'
          desc='시크한 냥냥이와 함께 인생을 살아가는건 어떤가요?'
          img='static/images/cat_sample.jpg'
          url='/cat'
          urlTitle='냥냥이 보러 가기'
        />
      </div>
    )
  }
}

export default Index