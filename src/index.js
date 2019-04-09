import React, { Component } from 'react'
import Container from './components/Container'
import PropTypes from 'prop-types'
import MainPropsContext from './contexts/mainPropsContext'

export default class ReactInstaStories extends Component {
  componentDidMount() {
    this.props.stories.map(s => {
      let i = new Image()
      if (!(typeof s === 'object' && s.type === 'video')) {
        i.src = typeof s === 'object' ? s.url : s
      }
    })
  }

  render() {
    return (
      <MainPropsContext.Provider value={this.props}>
        <Container
          stories={this.props.stories}
          defaultInterval={this.props.defaultInterval}
          width={this.props.width}
          height={this.props.height}
          loader={this.props.loader}
          header={this.props.header}
          storyContentStyles={this.props.storyStyles}
        />
      </MainPropsContext.Provider>
    )
  }
}

ReactInstaStories.propTypes = {
  stories: PropTypes.array,
  defaultInterval: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  loader: PropTypes.element,
  header: PropTypes.element,
  storyStyles: PropTypes.object
}
