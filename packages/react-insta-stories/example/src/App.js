import React, { useEffect } from 'react';
import './App.css';
import Stories from 'react-insta-stories'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }
  componentDidMount() {
    setTimeout(() => {
      // this.setState({ stories: stories2 })
    }, 3000);
  }
  render() {
    return (
      <div className="App">
        <div className="left">
          <h2><code><a rel="noopener noreferrer" href="https://www.npmjs.com/package/react-insta-stories" target="_blank">react-insta-stories [v2]</a></code></h2>
          <p>Create Instagram like stories on the web using React</p>
          <br />
          <code ><span style={{ background: '#eee', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5, width: 'auto' }}>npm i react-insta-stories</span></code>
          <br />
          <p>Made with ♥ by <a rel="noopener noreferrer" href="https://github.com/mohitk05/react-insta-stories" target="_blank">@mohitk05</a></p>
          <br />
          <div style={{ background: '#eee', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5, width: 'auto' }}><p>◀ Tap left for previous story</p>
            <p>▶︎ Tap right for next story</p>
            <p>◉ Press and hold to pause</p></div>
          <br />
          <div className="updates">
            <p><mark><b>Updates [V2.0.0]</b></mark></p>
            <p>1. Render your own components/JSX in stories</p>
            <p>2. Create multiple instances to recreate stories by multiple users easily, jump to stories using props</p>
            <p>3. Prop based control, event callbacks</p>
            <p>4. Custom JSX gives control to pause/play story</p>
            <p>5. (for devs) TypeScript 🎉</p>
            <p>6. (for devs) Updated for easier feature additions, hooks</p>
            <br></br>
            <p><mark><b>Updates [V1.4.1]</b></mark></p>
            <p>1. Stories stretch to fill screen by default</p>
            <p>2. Style story content using 'storyStyles' prop 💅</p>
            <p>3. Add individual styling to each story</p>
            <br />
            <p><mark><b>Updates [V1.4.0]</b></mark></p>
            <p>1. 'See more' feature added 🤳</p>
            <p>2. Video playback fixes</p>
            <br />
            <p><mark><b>Updates [V1.3.0]</b></mark></p>
            <p>1. Video support added 🎉</p>
            <p>2. babel-polyfill error fix 👾</p>
            <p>3. Changed progress animation to plain CSS</p>
            <br />
            <p><mark><b>Updates [V1.2.0]</b></mark></p>
            <p>1. Now you can add a header to the story</p>
            <p>2. Image aspect ratio retained if story size changed (fix)</p>
          </div>
          <br />
          <p>Know more about me here: <a rel="noopener noreferrer" href="https://mohitkarekar.com" target="_blank">mohitkarekar.com</a></p>
        </div>
        <div className="stories">
          <Stories loop defaultInterval={8000} stories={stories2} onStoryEnd={(s, st) => console.log('story ended', s, st)} onAllStoriesEnd={(s, st) => console.log('all stories ended', s, st)} onStoryStart={(s, st) => console.log('story started', s, st)} />
        </div>
      </div>
      // <div className="App">
      //   <a href="https://github.com/mohitk05/react-insta-stories/pull/32">react-insta-stories</a>
      // </div>
    );
  }
}

const Story2 = ({ action, isPaused }) => {
  useEffect(() => {
    setTimeout(() => {
      action('pause')
      setTimeout(() => {
        action('play')
      }, 2000)
    }, 2000)
  }, [])
  return <div style={{ ...contentStyle, background: 'Aquamarine', color: '#16161d' }}>
    <h1>You get the control of the story.</h1>
    <p>Render your custom JSX by passing just a <code style={{ fontStyle: 'italic' }}>content</code> property inside your story object.</p>
    <p>You get a <code style={{ fontStyle: 'italic' }}>action</code> prop as an input to your content function, that can be used to play or pause the story.</p>
    <h1>{isPaused ? 'Paused' : 'Playing'}</h1>
    <h4>Excited to launch v2!! Expect it around October endish. Cheers! 🎉</h4>
    <p>react-insta-stories v2 coming soon.</p>
    <p>And so is the React Native version 💫</p>
  </div>
}

const stories2 = [{
  content: () => {
    return <div style={contentStyle}>
      <h1>The new version is here.</h1>
      <p>This is the new story.</p>
      <p>Now render React components right into your stories.</p>
      <p>Possibilities are endless, like here - here's a code block!</p>
      <pre>
        <code style={code}>
          console.log('Hello, world!')
        </code>
      </pre>
      <p>Or here, an image!</p>
      <img style={image} src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"></img>
      <h3>Pefect. But there's more! →</h3>
    </div>
  }
}, {
  content: props => {
    return <div style={{ background: 'pink', padding: 20 }}>
      <h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
      <h1 style={{ marginTop: 5 }}>We have our good old image and video stories, just the same.</h1>
    </div>
  },
  seeMore: ({ close }) => <div style={{ maxWidth: '100%', height: '100%', padding: 40, background: 'white' }}><h2>Just checking the see more feature.</h2><p style={{ textDecoration: 'underline' }} onClick={close}>Go on, close this popup.</p></div>,
  duration: 5000
}, 'https://picsum.photos/1080/1920', { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video' }, {
  content: Story2
}]

const image = {
  display: 'block',
  maxWidth: '100%',
  borderRadius: 4,
}

const code = {
  background: '#eee',
  padding: '5px 10px',
  borderRadius: '4px',
  color: '#333'
}

const contentStyle = {
  background: 'salmon',
  width: '100%',
  padding: 20,
  color: 'white'
}

const stories = [{ url: 'https://picsum.photos/1080/1920', header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' }, seeMore: <div>Hello</div> }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4', type: 'video' }, { url: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4', type: 'video' }, 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80', 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1499202189329-5d76e29aa2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80'].map((s, i) => {
  if (i !== 4 && i !== 5) {
    if (typeof s === 'string') {
      let o = {}
      o.url = s
      o.styles = {
        objectFit: 'cover',
        width: '100%', margin: 'none'
      }
      return o
    }
    s.styles = {
      objectFit: 'cover',
      width: '100%', margin: 'none'
    }
    return s
  } else return s
})

export default App;
