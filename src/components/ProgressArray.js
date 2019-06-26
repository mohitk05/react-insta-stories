import React from 'react'
import Progress from './Progress'
import PropTypes from 'prop-types'

class ProgressArray extends React.PureComponent {
  render() {
    return (
      <div style={styles.progressArr(this.props.progressAtBottom)}>
        {this.props.length.map((i, index) =>
          <Progress
            key={index}
            width={1 / this.props.length.length}
            next={this.props.next}
            defaultInterval={this.props.defaultInterval}
            videoDuration={this.props.videoDuration}
            currentStory={this.props.currentStory}
            active={i === this.props.progress.id ? 1 : (i < this.props.progress.id ? 2 : 0)}
            pause={this.props.pause}
            bufferAction={this.props.bufferAction}
          />)}
      </div>
    )
  }
}

const defaultProgressStyle = {
  display: 'flex',
  justifyContent: 'center',
  maxWidth: '100%',
  flexWrap: 'row',
  position: 'absolute',
  width: '98%',
  padding: '7px 5px 5px 5px',
  alignSelf: 'center',
  zIndex: 99,
  filter: 'drop-shadow(0 1px 8px #000)'
}

const progressBottomStyle = {
  ...defaultProgressStyle,
  bottom: 0
}

const getProgressStyle = progressAtBottom =>
  progressAtBottom ? progressBottomStyle : defaultProgressStyle

const styles = {
  progressArr: getProgressStyle
}

ProgressArray.propTypes = {
  length: PropTypes.array,
  progress: PropTypes.object,
  pause: PropTypes.bool,
  next: PropTypes.func,
  currentStory: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  defaultInterval: PropTypes.number,
  videoDuration: PropTypes.number,
  bufferAction: PropTypes.bool,
  progressAtBottom: PropTypes.bool
}

ProgressArray.defaultProps = {
  progressAtBottom: false
}

export default ProgressArray
