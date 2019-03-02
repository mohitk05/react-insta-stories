import React, { Component } from 'react'

import Stories from 'react-insta-stories'

export default class App extends Component {
  render () {
    return (
      <div className="App">
        <div className="left">
          <h2><code><a rel="noopener noreferrer" href="https://www.npmjs.com/package/react-insta-stories" target="_blank">react-insta-stories</a></code></h2>
          <p>Create Instagram like stories on the web using React</p>
          <br/>
          <code ><span style={{background: '#eee', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5, width: 'auto'}}>npm i react-insta-stories</span></code>
          <br/>
          <p>Made with ♥ by <a rel="noopener noreferrer" href="https://github.com/mohitk05/react-insta-stories" target="_blank">@mohitk05</a></p>
          <br/>
          <div style={{background: '#eee', padding: 5, paddingLeft: 10, paddingRight: 10, borderRadius: 5, width: 'auto'}}><p>◀ Tap left for previous story</p>
          <p>▶︎ Tap right for next story</p>
          <p>◉ Press and hold to pause</p></div>
          <br/>
          <p><mark><b>Updates [V1.3.0]</b></mark></p>
          <p>1. Video support added 🎉</p>
          <p>2. babel-polyfill error fix 👾</p>
          <p>3. Changed progress animation to plain CSS</p>
          <br/>
          <p><mark><b>Updates [V1.2.0]</b></mark></p>
          <p>1. Now you can add a header to the story</p>
          <p>2. Image aspect ratio retained if story size changed (fix)</p>
          <br/>
          <p>Know more about me here: <a rel="noopener noreferrer" href="https://mohitkarekar.com" target="_blank">mohitkarekar.com</a></p>
        </div>
        <div className="stories"><Stories stories={stories} defaultDuration={1200} loader={<div>Loading..</div>}/></div>
      </div>
    )
  }
}

const stories = [{ url: 'https://picsum.photos/1080/1920', header: { heading: 'Mohit Karekar', subheading: 'Posted 5h ago', profileImage: 'https://picsum.photos/1000/1000' } }, { url: 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN', header: { heading: 'Mohit Karekar', subheading: 'Posted 32m ago', profileImage: 'https://picsum.photos/1080/1920' } }, { url: 'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', header: { heading: 'mohitk05/react-insta-stories', subheading: 'Posted 32m ago', profileImage: 'https://avatars0.githubusercontent.com/u/24852829?s=400&v=4' } }, { url: 'https://storage.googleapis.com/coverr-main/mp4/Footboys.mp4', type: 'video', duration: 1000 }, 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80', 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1499202189329-5d76e29aa2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80']
