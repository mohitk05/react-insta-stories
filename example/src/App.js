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
          <p>Know more about me here: <a rel="noopener noreferrer" href="https://mohitkarekar.com" target="_blank">mohitkarekar.com</a></p>
        </div>
        <div className="stories"><Stories stories={stories} defaultDuration={1200} loader={<div>Loading..</div>} /></div>
      </div>
    )
  }
}

const stories = ['https://picsum.photos/1080/1920', 'https://fsa.zobj.net/crop.php?r=dyJ08vhfPsUL3UkJ2aFaLo1LK5lhjA_5o6qEmWe7CW6P4bdk5Se2tYqxc8M3tcgYCwKp0IAyf0cmw9yCmOviFYb5JteeZgYClrug_bvSGgQxKGEUjH9H3s7PS9fQa3rpK3DN3nx-qA-mf6XN',  'https://media.idownloadblog.com/wp-content/uploads/2016/04/iPhone-wallpaper-abstract-portrait-stars-macinmac.jpg', 'https://images.unsplash.com/photo-1534856966153-c86d43d53fe0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80', 'https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80', 'https://images.unsplash.com/photo-1499202189329-5d76e29aa2b6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1482&q=80']
