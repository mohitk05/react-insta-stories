import * as React from 'react';
import { Renderer, Tester } from './../interfaces';

export const renderer: Renderer = (props) => {
    React.useEffect(() => {
        if (!props.isPaused) {
            props.action('play');
        }
    }, [props.story, props.isPaused])
    const Content = props.story.originalContent;
    return <Content {...props} />
}

export const tester: Tester = (story) => {
    return {
        condition: !!story.content,
        priority: 2
    }
}

export default {
    renderer,
    tester
}