import React from 'react'
import Progress from './Progress'
import PropTypes from 'prop-types'

export default class ProgressArray extends React.Component {
  render() {
    return (
      <div style={styles.progressArr}>
        {this.props.length.map(i => <Progress width={1 / this.props.length.length} completed={i === this.props.progress.id ? this.props.progress.completed : (i < this.props.progress.id ? 1 : 0)} />)}
      </div>
    )
  }
}

const styles = {
  progressArr: {
    display: 'flex',
    justifyContent: 'center',
    maxWidth: '100%',
    flexWrap: 'row',
    position: 'absolute',
    width: '98%',
    padding: 5,
    alignSelf: 'center',
    filter: 'drop-shadow(0 1px 8px #000)'
  }
}

ProgressArray.propTypes = {
  length: PropTypes.array,
  progress: PropTypes.object
}
