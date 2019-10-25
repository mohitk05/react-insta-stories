import React, { useEffect } from 'react'
import { ReactInstaStoriesProps, GlobalCtx } from './interfaces'
import Container from './components/Container'
import GlobalContext from './context/Global'

const ReactInstaStories = function (props: ReactInstaStoriesProps) {
    useEffect(() => {
        props.stories.forEach((s, i) => {
            let images = []
            const url = typeof s === 'object' && s.url && (s.type === 'image' || !s.type) ? s.url : (typeof s === 'string' ? s : null)
            if (url) {
                images[i] = new Image()
                images[i].src = url
            }
        })
    }, [props.stories])

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
        defaultInterval: props.defaultInterval,
        isPaused: props.isPaused,
        currentIndex: props.currentIndex,
        onStoryStart: props.onStoryStart,
        onStoryEnd: props.onStoryEnd,
        onAllStoriesEnd: props.onAllStoriesEnd
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