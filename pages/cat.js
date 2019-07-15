import React from 'react'
import AnimalLayout from '../layout/AnimalLayout'
import { fetchCats } from '../api'

class Cat extends React.Component {
  render () {
    return (
      <AnimalLayout
        containerId='cat'
        jumbotronProps={{
          bg: 'static/images/cat_sample.jpg',
          title: '냥냥이 리스트',
          desc: '냥냥이를 볼 수 있는 리스트입니다'
        }}
        api={fetchCats}
      />
    )
  }
}

export default Cat