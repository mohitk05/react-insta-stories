import React, { useEffect, useState } from 'react'
import { ReactInstaStoriesProps, GlobalCtx, Story, Tester, Renderer } from './interfaces'
import Container from './components/Container'
import GlobalContext from './context/Global'
import StoriesContext from './context/Stories';
import { getRenderer } from './util/renderers'
import { renderers as defaultRenderers } from './renderers/index';
import withHeader from './renderers/wrappers/withHeader'
import withSeeMore from './renderers/wrappers/withSeeMore'

const ReactInstaStories = function (props: ReactInstaStoriesProps) {
    let renderers = props.renderers ? props.renderers.concat(defaultRenderers) : defaultRenderers;
    let context: GlobalCtx = {
        width: props.width,
        height: props.height,
        loader: props.loader,
        header: props.header,
        storyContainerStyles: props.storyContainerStyles,
        storyInnerContainerStyles: props.storyInnerContainerStyles,
        storyStyles: props.storyStyles,
        progressContainerStyles: props.progressContainerStyles,
        progressWrapperStyles: props.progressWrapperStyles,
        progressStyles: props.progressStyles,
        loop: props.loop,
        defaultInterval: props.defaultInterval,
        isPaused: props.isPaused,
        currentIndex: props.currentIndex,
        onStoryStart: props.onStoryStart,
        onStoryEnd: props.onStoryEnd,
        onAllStoriesEnd: props.onAllStoriesEnd,
        onNext: props.onNext,
        onPrevious: props.onPrevious,
        keyboardNavigation: props.keyboardNavigation,
        preventDefault: props.preventDefault,
        preloadCount: props.preloadCount,
    }
    const [stories, setStories] = useState<{ stories: Story[] }>({ stories: generateStories(props.stories, renderers) });


    useEffect(() => {
        setStories({ stories: generateStories(props.stories, renderers) });
    }, [props.stories, props.renderers]);

    return <GlobalContext.Provider value={context}>
        <StoriesContext.Provider value={stories}>
            <Container />
        </StoriesContext.Provider>
    </GlobalContext.Provider>
}

const generateStories = (stories: Story[], renderers: { renderer: Renderer, tester: Tester }[]) => {
    return stories.map(s => {
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
    })
};

ReactInstaStories.defaultProps = {
    width: 360,
    height: 640,
    defaultInterval: 4000,
    preloadCount: 1,
}

export const WithHeader = withHeader;
export const WithSeeMore = withSeeMore;

export default ReactInstaStories
