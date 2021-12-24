import React, { useEffect, useState } from 'react'
import { ReactInstaStoriesProps, GlobalCtx, Story, Tester, Renderer } from './types'
import _GlobalContext from './context/Global'
import _StoriesContext from './context/Stories';
import _ProgressContext from './context/Progress';
import { getRenderer } from './util/renderers'

export type BaseProps = ReactInstaStoriesProps;

export const GlobalContext = _GlobalContext;
export const StoriesContext = _StoriesContext;
export const ProgressContext = _ProgressContext;

export const ReactInstaStoriesRoot = function (props: ReactInstaStoriesProps & { defaultRenderers: Array<any>, children: React.ReactChild }) {
    let renderers = props.renderers ? props.renderers.concat(props.defaultRenderers) : props.defaultRenderers;
    let context: GlobalCtx = {
        width: props.width,
        height: props.height,
        loader: props.loader,
        header: props.header,
        storyContainerStyles: props.storyContainerStyles,
        storyStyles: props.storyStyles,
        loop: props.loop,
        defaultInterval: props.defaultInterval,
        isPaused: props.isPaused,
        currentIndex: props.currentIndex,
        onStoryStart: props.onStoryStart,
        onStoryEnd: props.onStoryEnd,
        onAllStoriesEnd: props.onAllStoriesEnd,
        keyboardNavigation: props.keyboardNavigation,
        preventDefault: props.preventDefault
    }
    const [stories, setStories] = useState<{ stories: Story[] }>({ stories: generateStories(props.stories, renderers) });
    useEffect(() => {
        setStories({ stories: generateStories(props.stories, renderers) });
    }, [props.stories, props.renderers]);
    console.log('commmon', stories);
    return <GlobalContext.Provider value={context}>
        <StoriesContext.Provider value={stories}>
            {props.children}
        </StoriesContext.Provider>
    </GlobalContext.Provider>
}

ReactInstaStoriesRoot.defaultProps = {
    width: 360,
    height: 640,
    defaultInterval: 4000
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