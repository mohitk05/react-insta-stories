import React, { Component } from 'react'
import Container from './components/Container'
import PropTypes from 'prop-types'

export default class ReactInstaStories extends Component {
  constructor(props) {
    super(props)
    this.pause = this.pause.bind(this)
    this.play = this.play.bind(this)
    this.previous = this.previous.bind(this)
    this.next = this.next.bind(this)
  }

  componentDidMount() {
    this.props.stories.map(s => {
      let i = new Image()
      if (!(typeof s === 'object' && s.type === 'video')) {
        i.src = typeof s === 'object' ? s.url : s
      }
    })
  }

  pause() {
    if (this.c) {
      this.c.pause('pause')
      return true
    } else return false
  }

  play() {
    if (this.c) {
      this.c.pause('play')
      return true
    } else return false
  }

  previous() {
    if (this.c) {
      this.c.previous()
      return true
    } else return false
  }

  next() {
    if (this.c) {
      this.c.next()
      return true
    } else return false
  }

  toggleSeeMore(show) {
    if (this.c) {
      return this.c.toggleMore(show)
    } else return false
  }

  render() {
    return (
      <div>
        <Container
          ref={c => this.c = c}
          stories={this.props.stories}
          defaultInterval={this.props.defaultInterval}
          width={this.props.width}
          height={this.props.height}
          loader={this.props.loader}
          header={this.props.header}
          storyContentStyles={this.props.storyStyles}
          loop={this.props.loop}
        />
      </div>
    )
  }
}

ReactInstaStories.defaultProps = {
  loop: false
}

ReactInstaStories.propTypes = {
  stories: PropTypes.array,
  defaultInterval: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  loader: PropTypes.element,
  header: PropTypes.element,
  storyStyles: PropTypes.object,
  loop: PropTypes.bool
}
