import React from 'react'
import { ProgressContext } from './../interfaces'

export default React.createContext<ProgressContext>({
    numArray: [],
    currentId: 0,
    count: 0,
    currentStory: { url: '' },
    videoDuration: 0,
    bufferAction: false,
    pause: false
})