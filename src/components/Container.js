import React from 'react'
import Story from './Story'
import ProgressArray from './ProgressArray'
import PropTypes from 'prop-types'

export default class Container extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentId: 0,
      pause: true,
      count: 0,
      storiesDone: 0
    }
    this.defaultInterval = 4000
    this.width = props.width || 360
    this.height = props.height || 640
  }

  componentDidMount() {
    this.props.defaultInterval && (this.defaultInterval = this.props.defaultInterval)
    // this.start()
  }

  // start = async () => {
  //   while (this.state.currentId < this.props.stories.length - 1) {
  //     let curr = this.state.currentId + 1
  //     this.setState({ currentId: curr })
  //     let interval = this.props.stories[curr].duration
  //     await this.wait(interval || this.defaultInterval).then(() => {
  //       this.state.currentId < this.props.stories.length - 1 && this.setState({count: 0})
  //     })
  //   }
  // }

  wait = (time) => {
    return new Promise(resolve => {
      this.setState({count: 0})
      let id = setInterval(() => {
        if (this.state.count < time) {
          if (!this.state.pause) {
            this.setState({ count: this.state.count + 1 })
          }
        } else {
          clearInterval(id)
          resolve()
        }
      }, 1)
    })
  }

  pause = (action) => {
    this.setState({ pause: action === 'pause' })
  }

  previous = () => {
    if (this.state.currentId > 0) {
      this.setState({
        currentId: this.state.currentId - 1,
        count: 0
      })
    }
  }

  next = () => {
    if (this.state.currentId < this.props.stories.length - 1) {
      this.setState({
        currentId: this.state.currentId + 1,
        count: 0
      })
    }
  }

  debouncePause = (e) => {
    e.preventDefault()
    this.mousedownId = setTimeout(() => {
      this.pause('pause')
    }, 200)
  }

  mouseUp = (e, type) => {
    e.preventDefault()
    this.mousedownId && clearTimeout(this.mousedownId)
    if (this.state.pause) {
      this.pause('play')
    } else {
      type === 'next' ? this.next() : this.previous()
    }
  }

  getVideoDuration = duration => {
    this.setState({ videoDuration: duration })
  }

  render() {
    return (
      <div style={{...styles.container, ...{width: this.width, height: this.height}}}>
        <ProgressArray
          next={this.next}
          pause={this.state.pause}
          videoDuration={this.state.videoDuration}
          length={this.props.stories.map((s, i) => i)}
          defaultInterval={this.defaultInterval}
          currentStory={this.props.stories[this.state.currentId]}
          progress={{id: this.state.currentId, completed: this.state.count / ((this.props.stories[this.state.currentId] && this.props.stories[this.state.currentId].duration) || this.defaultInterval)}}
        />
        <Story action={this.pause} height={this.height} playState={this.state.pause} width={this.width} story={this.props.stories[this.state.currentId]} loader={this.props.loader} header={this.props.header} getVideoDuration={this.getVideoDuration} />
        <div style={styles.overlay}>
          <div style={{width: this.width / 2, zIndex: 999}} onTouchStart={this.debouncePause} onTouchEnd={e => this.mouseUp(e, 'previous')} onMouseDown={this.debouncePause} onMouseUp={(e) => this.mouseUp(e, 'previous')} />
          <div style={{width: this.width / 2, zIndex: 999}} onTouchStart={this.debouncePause} onTouchEnd={e => this.mouseUp(e, 'next')} onMouseDown={this.debouncePause} onMouseUp={(e) => this.mouseUp(e, 'next')} />
        </div>
      </div>
    )
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    background: '#111',
    position: 'relative'
  },
  overlay: {
    position: 'absolute',
    height: 'inherit',
    width: 'inherit',
    display: 'flex'
  },
  left: {
  },
  right: {
  }
}

Container.propTypes = {
  stories: PropTypes.array,
  defaultInterval: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  loader: PropTypes.element,
  header: PropTypes.element
}
