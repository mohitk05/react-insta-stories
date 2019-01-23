import React from 'react'
import PropTypes from 'prop-types'

export default class Story extends React.Component {
  render() {
    let source = typeof this.props.story === 'object' ? this.props.story.url : this.props.story
    return (
      <div style={{...styles.story, width: this.props.width, height: this.props.height}}>
        <img style={styles.storyContent} src={source} />
      </div>
    )
  }
}

const styles = {
  story: {
    display: 'flex'
  },
  storyContent: {
    width: 'inherit',
    maxWidth: '100%',
    maxHeight: '100%',
    alignSelf: 'center'
  }
}

Story.propTypes = {
  story: PropTypes.object || PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number
}
