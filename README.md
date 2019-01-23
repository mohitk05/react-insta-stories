# react-insta-stories

> A React component for Instagram like stories

[![NPM](https://img.shields.io/npm/v/react-insta-stories.svg)](https://www.npmjs.com/package/react-insta-stories) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-insta-stories
```

## Usage

```jsx
import React, { Component } from 'react'

import Stories from 'react-insta-stories'

class Example extends Component {
  render () {
    return (
      <Stories 
        stories={stories}
        defaultInterval={1500}
        width={432}
        height={768}
      />
    )
  }
}

const stories = [
  'https://i.imgur.com/YA4fraZ.png', 
  'https://i.imgur.com/Ik635gD.jpg', 
  { url: 'https://i.imgur.com/mDuSAmB.png', duration: 1500 }, 'https://www.jlstms.com/data/wallpapers/54/im58571310.jpg',
  'https://i.imgur.com/YA4fraZ.png'
]
```

## License

MIT © [mohitk05](https://github.com/mohitk05)
