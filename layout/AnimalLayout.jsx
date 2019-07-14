import React from 'react'
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroller'
import { clone, concat } from 'lodash'
import Jumbotron from '../components/Jumbotron'
import Loading from '../components/Loading'
import AnimalList from '../components/AnimalList'

class AnimalLayout extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      animal: [],
      last: false,
      current: 0
    }

    this.loadMore = this.loadMore.bind(this)
  }

  loadMore () {
    const { api } = this.props
    const { current } = this.state

    api({
      params: { current },
      success: ({ data }) => {
        let animal = clone(this.state.animal)

        animal = concat(animal, data.data)

        this.setState({
          animal: animal,
          last: data.last,
          current: data.current
        })
      },
      error: err => {
        console.log(err)
      }
    })
  }

  render () {
    const { containerId, jumbotronProps } = this.props
    const { animal, last } = this.state

    return (
      <div id={containerId}>
        <Jumbotron {...jumbotronProps} />
        <InfiniteScroll
          loadMore={this.loadMore}
          hasMore={!last}
          loader={<Loading key={0} />}
        >
          <AnimalList animals={animal} />
        </InfiniteScroll>
      </div>
    )
  }
}

AnimalLayout.propTypes = {
  /**
   * Container ID
   */
  containerId: PropTypes.string.isRequired,
  /**
   * Jumbotron props
   */
  jumbotronProps: PropTypes.object.isRequired,
  /**
   * List API
   */
  api: PropTypes.func.isRequired
}

export default AnimalLayout