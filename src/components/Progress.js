import React from 'react'
import PropTypes from 'prop-types'

export default class Progress extends React.Component {
  render() {
    return (
      <div style={{...styles.progress, ...{width: `${this.props.width * 100}%`}}}>
        <div style={{...styles.overlay, width: `${this.props.completed * 100}%`}} />
      </div>
    )
  }
}

const styles = {
  progress: {
    height: 2,
    maxWidth: '100%',
    background: '#555',
    margin: 2
  },
  overlay: {
    height: '100%',
    background: 'white'
  }
}

Progress.propTypes = {
  width: PropTypes.number,
  completed: PropTypes.number
}
