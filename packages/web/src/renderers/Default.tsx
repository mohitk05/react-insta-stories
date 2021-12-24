import * as React from 'react';
import { Renderer, Tester } from 'react-stories-common/dist/types';

export const renderer: Renderer = ({ story, action }) => {
    React.useEffect(() => {
        action('play');
    }, [story])

    return <div style={styles.storyContent}>
        <p style={styles.text as React.CSSProperties}>This story could not be loaded.</p>
    </div>
}

const styles = {
    storyContent: {
        width: "100%",
        maxHeight: "100%",
        margin: "auto"
    },
    text: {
        textAlign: 'center',
        color: 'white',
        width: '90%',
        margin: 'auto'
    }
};

export const tester: Tester = () => {
    return {
        condition: true,
        priority: 1
    };
}

export default {
    renderer,
    tester
}