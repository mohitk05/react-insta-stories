import React, { Component } from 'react'

import Stories from 'react-insta-stories'

export default class App extends Component {
  render () {
    return (
      <div>
        <Stories stories={stories} defaultDuration={1200} />
      </div>
    )
  }
}

const stories = ['https://i.imgur.com/YA4fraZ.png', 'https://picsum.photos/1080/1920', 'https://i.imgur.com/Ik635gD.jpg', {url: 'https://i.imgur.com/mDuSAmB.png', duration: 500}, 'https://www.jlstms.com/data/wallpapers/54/im58571310.jpg', 'https://i.imgur.com/YA4fraZ.png']
