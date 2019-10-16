import React from 'react'
import PropTypes from 'prop-types'
import style from './../styles.css'
import ProgressWrapper from './ProgressWrapper'

export default class Progress extends React.PureComponent {
  componentDidMount() {
    if (this.inner) {
      this.inner.addEventListener('webkitAnimationEnd', this.next, false)
      this.inner.addEventListener('animationend', this.next, false)
      this.inner.addEventListener('oanimationend', this.next, false)
    }
  }

  static getDerivedStateFromProps(props, state) {
    let current = props.currentStory
    if (typeof current === 'object') {
      if (current.type && props.videoDuration) return { duration: props.videoDuration * 1000 }
      if (current.duration) return { duration: current.duration }
      return { duration: props.defaultInterval }
    } else {
      return { duration: props.defaultInterval }
    }
  }

  next = () => {
    this.props.next()
  }

  render() {
    const { width, pause, bufferAction, active } = this.props
    return (
      <ProgressWrapper width={width} pause={pause} bufferAction={bufferAction}>
        <div
          ref={r => { this.inner = r }}
          className={style.inner}
          style={getProgressStyle({ active, pause, duration: this.state.duration })} />
      </ProgressWrapper>
    )
  }
}

const animation = (duration) => `${duration}ms linear 0ms ${style.slidein}`
const animationPlayState = (pause) => pause ? 'paused' : 'running'

const getProgressStyle = ({ active, duration, pause }) => {
  switch (active) {
    case 2:
      return { width: '100%' }
    case 1:
      return { animation: animation(duration), animationPlayState: animationPlayState(pause) }
    case 0:
      return { width: 0 }
    default:
      return { width: 0 }
  }
}

Progress.propTypes = {
  width: PropTypes.number,
  defaultInterval: PropTypes.number,
  pause: PropTypes.bool,
  next: PropTypes.func,
  active: PropTypes.number,
  bufferAction: PropTypes.bool,
  videoDuration: PropTypes.number,
  currentStory: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
}
