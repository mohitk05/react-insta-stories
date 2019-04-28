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

  next = () => {
    this.props.next()
  }

  render() {
    const { width, pause, bufferAction, active, defaultInterval } = this.props
    return (
      <ProgressWrapper width={width} pause={pause} bufferAction={bufferAction}>
        <div ref={r => { this.inner = r }} className={style.inner} style={getProgressStyle({ active, defaultInterval, pause })} />
      </ProgressWrapper>
    )
  }
}

const animation = (defaultInterval) => `${defaultInterval}ms linear 0ms ${style.slidein}`
const animationPlayState = (pause) => pause ? 'paused' : 'running'

const getProgressStyle = ({ active, defaultInterval, pause }) => {
  switch (active) {
    case 2:
      return { width: '100%' }
    case 1:
      return { animation: animation(defaultInterval), animationPlayState: animationPlayState(pause) }
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
  bufferAction: PropTypes.bool
}
