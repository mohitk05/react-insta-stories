import React from 'react'
import { ReactInstaStoriesProps, GlobalCtx, Story } from './interfaces'
import Container from './components/Container'
import GlobalContext from './context/Global'
import { getRenderer } from './util/renderers'
import { renderers as defaultRenderers } from './renderers/index';
import withHeader from './renderers/wrappers/withHeader'
import withSeeMore from './renderers/wrappers/withSeeMore'

const ReactInstaStories = function (props: ReactInstaStoriesProps) {
    let renderers = props.renderers ? props.renderers.concat(defaultRenderers) : defaultRenderers;
    let context: GlobalCtx = {
        stories: props.stories.map(s => {
            let story: Story = {};

            if (typeof s === 'string') {
                story.url = s;
                story.type = 'image';
            } else if (typeof s === 'object') {
                story = Object.assign(story, s);
            }

            let renderer = getRenderer(story, renderers);
            story.originalContent = story.content;
            story.content = renderer;
            return story
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

export const WithHeader = withHeader;
export const WithSeeMore = withSeeMore;

export default React.memo(ReactInstaStories);