import * as React from 'react';

export interface ReactInstaStoriesProps {
    stories: Story[],
    width?: number,
    height?: number,
    loader?: JSX.Element,
    header?: Function,
    storyStyles?: Object,
    loop?: boolean,
    defaultInterval?: number,
    isPaused?: boolean,
    currentIndex?: number,
    renderers?: {
        renderer: Renderer,
        tester: Tester
    }[],
    onAllStoriesEnd?: Function,
    onStoryStart?: Function,
    onStoryEnd?: Function
}

export interface GlobalCtx extends ReactInstaStoriesProps { }

export interface ContainerState {
    currentId: number,
    pause: boolean,
    count: number,
    storiesDone: number
}

export interface Renderer extends React.FC<{
    action: (action: string, bufferAction?: boolean) => void;
    isPaused: boolean;
    story: Story,
    config: {
        width?: number,
        height?: number,
        loader?: JSX.Element,
        header?: Function,
        storyStyles?: Object,
    },
    messageHandler: (type: string, data: any) => ({ ack: 'OK' | 'ERROR' })
}> { }

export type Tester = (story: Story) => {
    condition: boolean;
    priority: number;
};

export interface StoryProps {
    story: Story;
    action: (action: string, bufferAction?: boolean) => void;
    playState: boolean;
    getVideoDuration: Function;
    bufferAction: boolean;
}

export interface StoryState {
    loaded: boolean,
    showMore: boolean
}

export interface Story {
    url?: string,
    seeMore?: Function,
    header?: Header,
    type?: string,
    duration?: number,
    styles?: object,
    content?: Renderer
}

export interface Header {
    heading: string,
    subheading: string,
    profileImage: string
}

export interface SeeMoreProps {
    seeMoreContent: Function,
    showContent: boolean,
    action: Function,
    toggleMore: Function
}

export interface HeaderProps {
    profileImage: string,
    heading: string,
    subheading: string
}

export interface ProgressProps {
    width: number,
    active: number,
    count: number
}

export interface ProgressWrapperProps {
    children: any,
    width: number,
    pause: boolean,
    bufferAction: boolean
}

export interface ProgressArrayProps {

}

export interface ProgressContext {
    currentId: number,
    videoDuration: number,
    bufferAction: boolean,
    pause: boolean,
    next: Function
}