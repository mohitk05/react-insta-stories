import React from 'react'
import PropTypes from 'prop-types'
import Header from './Header'
import SeeMore from './SeeMore'
import globalStyle from './../styles.css'

class Story extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false
    }
    this.getStoryContent = this.getStoryContent.bind(this)
  }

  componentDidUpdate(prevProps) {
    if (this.props.story !== prevProps.story) {
      this.pauseId && clearTimeout(this.pauseId)
      this.pauseId = setTimeout(() => {
        this.setState({ loaded: false })
      }, 300)
      this.props.action('pause', true)
      this.vid && this.vid.addEventListener('waiting', () => {
        this.props.action('pause', true)
      })
      this.vid && this.vid.addEventListener('playing', () => {
        this.props.action('play', true)
      })
    }

    if (this.vid && (this.props.playState !== prevProps.playState) && !this.props.bufferAction) {
      if (this.props.playState) {
        this.vid.pause()
      } else {
        this.vid.play().catch(e => console.log(e))
      }
    }
  }

  toggleMore = show => {
    this.setState({ showMore: show })
  }

  imageLoaded = () => {
    try {
      if (this.pauseId) clearTimeout(this.pauseId)
      this.setState({ loaded: true })
      this.props.action('play', true)
    } catch (e) {
      console.log(e)
    }
  }

  videoLoaded = () => {
    try {
      this.props.getVideoDuration(this.vid.duration)
      this.vid && this.vid.play().then(() => {
        this.imageLoaded()
      }).catch(e => {
        this.props.action('pause')
        console.log(e)
      })
    } catch (e) {
      console.log(e)
    }
  }

  getStoryContent() {
    const { story, storyContentStyles, horizontalAnimation } = this.props
    const source = typeof story === 'object' ? story.url : story
    const style = story.styles || storyContentStyles || styles.storyContent
    const type = story.type === 'video' ? 'video' : 'image'
    const className = (horizontalAnimation && this.state.loaded) ? globalStyle.storyImg : ''

    if (type === 'image') {
      return (
        <img
          className={className}
          style={style}
          src={source}
          onLoad={this.imageLoaded}
        />
      )
    }

    if (type === 'video') {
      return (
        <video
          ref={r => { this.vid = r }}
          style={style}
          src={source}
          controls={false}
          onLoadedData={this.videoLoaded}
          autoPlay
          playsInline
        />
      )
    }
  }

  render() {
    if (!this.props.active) return null

    let isHeader = typeof this.props.story === 'object' && this.props.story.header

    return (
      <div style={{ ...styles.story, width: this.props.width, height: this.props.height }}>
        {this.getStoryContent()}
        {isHeader && <div style={{ position: 'absolute', left: 12, top: 20, zIndex: 19 }}>
          {this.props.header ? () => this.props.header(this.props.story.header) : <Header heading={this.props.story.header.heading} subheading={this.props.story.header.subheading} profileImage={this.props.story.header.profileImage} />}
        </div>}
        {!this.state.loaded && <div style={{ width: this.props.width, height: this.props.height, position: 'absolute', left: 0, top: 0, background: 'rgba(0, 0, 0, 0.9)', zIndex: 9, display: 'flex', justifyContent: 'center', alignItems: 'center', color: '#ccc' }}>{this.props.loader || <div className={globalStyle.spinner} />}</div>}
        {this.props.story.seeMore &&
          <div style={{ position: 'absolute', margin: 'auto', bottom: 0, zIndex: 9999, width: '100%' }}>
            <SeeMore action={this.props.action} toggleMore={this.toggleMore} showContent={this.state.showMore} seeMoreContent={this.props.story.seeMore} />
          </div>}
      </div>
    )
  }
}

const styles = {
  story: {
    display: 'flex',
    position: 'relative',
    overflow: 'hidden'
  },
  storyContent: {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto'
  }
}

Story.propTypes = {
  story: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.string
  ]),
  height: PropTypes.number,
  width: PropTypes.number,
  action: PropTypes.func,
  loader: PropTypes.element,
  header: PropTypes.element,
  playState: PropTypes.bool,
  getVideoDuration: PropTypes.func,
  bufferAction: PropTypes.bool,
  storyContentStyles: PropTypes.object,
  active: PropTypes.bool,
  horizontalAnimation: PropTypes.bool
}

Story.defaultProps = {
  active: false,
  horizontalAnimation: false
}

export default Story
