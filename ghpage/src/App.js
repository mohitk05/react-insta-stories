import React, { Component } from 'react'

import Stories from 'react-insta-stories'
import SeeMore from './SeeMoreForm'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="left">
          <h2><code><a rel="noopener noreferrer" href="https://www.npmjs.com/package/react-insta-stories" target="_blank">react-insta-stories</a></code></h2>
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
        <div className="stories"><Stories ref={s => this.stories = s} stories={stories} defaultInterval={5000} loop horizontalAnimation /></div>
      </div>
    )
  }
}

const stories = [
  'https://images.unsplash.com/photo-1561343431-adbd8c7be1ef?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80',
  'https://images.unsplash.com/photo-1559638849-71cafc038a2e?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1561241312-2bade8fbadf0?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9',
  'https://images.unsplash.com/photo-1560620979-322d97c9de30?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjF9'
].map((s, i) => ({
  url: s,
  styles: {
    objectFit: 'cover',
    width: '100%',
  }
}))
