import React from 'react'
import PropTypes from 'prop-types'

export default class Story extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
  }
  componentDidUpdate(prevProps) {
    if (this.props.story !== prevProps.story) {
      this.pauseId && clearTimeout(this.pauseId)
      this.pauseId = setTimeout(() => {
        this.setState({loaded: false})
      }, 300)
      this.props.action('pause')
    }
  }
  imageLoaded = () => {
    if (this.pauseId) clearTimeout(this.pauseId)
    this.setState({loaded: true})
    this.props.action('play')
  }
  render() {
    let source = typeof this.props.story === 'object' ? this.props.story.url : this.props.story
    return (
      <div style={{...styles.story, width: this.props.width, height: this.props.height}}>
        <img
          style={styles.storyContent}
          src={source}
          onLoad={this.imageLoaded}
        />
        {!this.state.loaded && <div style={{width: this.props.width, height: this.props.height, position: 'absolute', left: 0, top: 0, background: 'rgba(0, 0, 0, 0.9)', zIndex: 9, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ccc'}}>{this.props.loader || `Loading..`}</div>}
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
  height: PropTypes.number || PropTypes.string,
  width: PropTypes.number || PropTypes.string,
  action: PropTypes.func,
  loader: PropTypes.Component
}
