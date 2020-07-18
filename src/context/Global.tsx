import React from 'react'
import { GlobalCtx } from '../interfaces'

const GlobalContext = React.createContext<GlobalCtx>({
    stories: [],
    defaultInterval: 4000,
    width: 360,
    height: 640
})

export default GlobalContext