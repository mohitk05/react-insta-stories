import React from 'react';
import {
	StoriesContext as StoriesContextInterface,
	Story,
} from '../interfaces';

export const initialContext: { stories: Story[] } = {
	stories: [],
};

const StoriesContext = React.createContext<StoriesContextInterface>(
	initialContext
);

export default StoriesContext;
