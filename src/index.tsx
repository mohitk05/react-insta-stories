import React, { useEffect, useState } from 'react'
import { ReactInstaStoriesProps, GlobalCtx, Story, Tester, Renderer } from './interfaces'
import Container from './components/Container'
import GlobalContext from './context/Global'
import StoriesContext from './context/Stories';
import { getRenderer } from './util/renderers'
import { renderers as defaultRenderers } from './renderers/index';
import withHeader from './renderers/wrappers/withHeader'
import withSeeMore from './renderers/wrappers/withSeeMore'

const ReactInstaStories = function ({
  width = 360,
  height = 640,
  defaultInterval = 4000,
  preloadCount = 1,
  ...restProps
}: ReactInstaStoriesProps) {
  let renderers = restProps.renderers
    ? restProps.renderers.concat(defaultRenderers)
    : defaultRenderers;
  let context: GlobalCtx = {
    width,
    height,
    loader: restProps.loader,
    header: restProps.header,
    storyContainerStyles: restProps.storyContainerStyles,
    storyInnerContainerStyles: restProps.storyInnerContainerStyles,
    storyStyles: restProps.storyStyles,
    progressContainerStyles: restProps.progressContainerStyles,
    progressWrapperStyles: restProps.progressWrapperStyles,
    progressStyles: restProps.progressStyles,
    loop: restProps.loop,
    defaultInterval,
    isPaused: restProps.isPaused,
    currentIndex: restProps.currentIndex,
    onStoryStart: restProps.onStoryStart,
    onStoryEnd: restProps.onStoryEnd,
    onAllStoriesEnd: restProps.onAllStoriesEnd,
    onNext: restProps.onNext,
    onPrevious: restProps.onPrevious,
    keyboardNavigation: restProps.keyboardNavigation,
    preventDefault: restProps.preventDefault,
    preloadCount,
  };
  const [stories, setStories] = useState<{ stories: Story[] }>({
    stories: generateStories(restProps.stories, renderers),
  });

  useEffect(() => {
    setStories({ stories: generateStories(restProps.stories, renderers) });
  }, [restProps.stories, restProps.renderers]);

  return (
    <GlobalContext.Provider value={context}>
      <StoriesContext.Provider value={stories}>
        <Container />
      </StoriesContext.Provider>
    </GlobalContext.Provider>
  );
};


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

export const WithHeader = withHeader;
export const WithSeeMore = withSeeMore;

export default ReactInstaStories
