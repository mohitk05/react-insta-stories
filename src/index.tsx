import React from 'react'
import { ReactInstaStoriesProps, GlobalCtx } from './interfaces'
import Container from './components/Container'
import GlobalContext from './context/Global'

const ReactInstaStories = function (props: ReactInstaStoriesProps) {
    let context: GlobalCtx = {
        stories: props.stories.map(s => {
            if (typeof s === 'string') return { url: s }
            else return s
        }),
        width: props.width,
        height: props.height,
        loader: props.loader,
        header: props.header,
        storyStyles: props.storyStyles,
        loop: props.loop,
        defaultInterval: props.defaultInterval
    }
    return <GlobalContext.Provider value={context}>
        <Container />
    </GlobalContext.Provider>
}

ReactInstaStories.defaultProps = {
    width: 360,
    height: 640,
    defaultInterval: 4000
}

export default ReactInstaStories