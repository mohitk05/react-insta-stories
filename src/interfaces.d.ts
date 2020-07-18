/// <reference types="react" />
export interface ReactInstaStoriesProps {
    stories: Story[];
    width?: number;
    height?: number;
    loader?: JSX.Element;
    header?: Function;
    storyStyles?: Object;
    loop?: boolean;
    defaultInterval?: number;
}
export interface GlobalCtx extends ReactInstaStoriesProps {
}
export interface ContainerState {
    currentId: number;
    pause: boolean;
    count: number;
    storiesDone: number;
}
export interface StoryProps {
    story: Story;
    action: Function;
    playState: boolean;
    getVideoDuration: Function;
    bufferAction: boolean;
}
export interface StoryState {
    loaded: boolean;
    showMore: boolean;
}
export interface Story {
    url?: string;
    seeMore?: JSX.Element;
    header?: Header;
    type?: string;
    duration?: number;
    styles?: object;
    content?: Function;
}
export interface Header {
    heading: string;
    subheading: string;
    profileImage: string;
}
export interface SeeMoreProps {
    seeMoreContent: JSX.Element;
    showContent: boolean;
    action: Function;
    toggleMore: Function;
}
export interface HeaderProps {
    profileImage: string;
    heading: string;
    subheading: string;
}
export interface ProgressProps {
    width: number;
    active: number;
}
export interface ProgressWrapperProps {
    children: any;
    width: number;
    pause: boolean;
    bufferAction: boolean;
}
export interface ProgressArrayProps {
}
export interface ProgressContext {
    numArray: number[];
    currentId: number;
    count: number;
    currentStory: Story;
    videoDuration: number;
    bufferAction: boolean;
    pause: boolean;
}
