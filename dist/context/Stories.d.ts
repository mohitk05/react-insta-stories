import React from 'react';
import { StoriesContext as StoriesContextInterface, Story } from '../interfaces';
export declare const initialContext: {
    stories: Story[];
};
declare const StoriesContext: React.Context<StoriesContextInterface>;
export default StoriesContext;
