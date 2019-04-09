import React from 'react'
import Loader from '../components/Loader'
import Header from '../components/Header'

export default React.createContext({
  defaultInterval: 4000,
  width: 340,
  height: 640,
  loader: Loader,
  header: Header,
  storyContentStyles: undefined
})
