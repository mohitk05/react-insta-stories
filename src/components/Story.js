import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'

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
    let isHeader = typeof this.props.story === 'object' && this.props.story.header
    return (
      <div style={{...styles.story, width: this.props.width, height: this.props.height}}>
        <img
          style={styles.storyContent}
          src={source}
          onLoad={this.imageLoaded}
        />
        {isHeader && <div style={{position: 'absolute', left: 12, top: 20}}>
          {this.props.header ? () => this.props.header(this.props.story.header) : <Header heading={this.props.story.header.heading} subheading={this.props.story.header.subheading} profileImage={this.props.story.header.profileImage} />}
        </div>}
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
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto'
  }
}

Story.propTypes = {
  story: PropTypes.object || PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  action: PropTypes.func,
  loader: PropTypes.element,
  header: PropTypes.element
}
