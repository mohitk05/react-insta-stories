import React from 'react'
import PropTypes from 'prop-types'
import style from './../styles.css'

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
    return (
      <ProgressWrapper width={this.props.width} pause={this.props.pause} bufferAction={this.props.bufferAction}>
        <div ref={r => { this.inner = r }} className={style.inner} style={getProgressStyle(this.props)} />
      </ProgressWrapper>
    )
  }
}

const ProgressWrapper = (props) => (
  <div className={style.autoHide} style={{ ...styles.progress, ...getProgressWrapperStyle(props) }}>
    {props.children}
  </div>
)

const getProgressWrapperStyle = ({ width, pause, bufferAction }) => ({
  width: `${width * 100}%`,
  opacity: pause && !bufferAction ? 0 : 1
})

const animationPlayState = (pause) => pause ? 'paused' : 'running'

const getProgressStyle = ({ active, defaultInterval, pause }) => {
  switch (active) {
    case 2:
      return { width: '100%' }
    case 1:
      return { animation: `${defaultInterval}ms linear 0ms ${style.slidein}`, animationPlayState: animationPlayState(pause) }
    case 0:
      return { width: 0 }
    default:
      return { width: 0 }
  }
}

const styles = {
  progress: {
    height: 2,
    maxWidth: '100%',
    background: '#555',
    margin: 2
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
