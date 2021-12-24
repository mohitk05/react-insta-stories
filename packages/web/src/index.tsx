import React from 'react';
import { BaseProps, ReactInstaStoriesRoot } from 'react-stories-common';
import Container from './components/Container';
import { renderers } from './renderers';
import withHeader from './renderers/wrappers/withHeader'
import withSeeMore from './renderers/wrappers/withSeeMore'

export const WithHeader = withHeader;
export const WithSeeMore = withSeeMore;

export default (props: BaseProps) => {
  return <ReactInstaStoriesRoot {...props} defaultRenderers={renderers}>
    <Container />
  </ReactInstaStoriesRoot>
}
