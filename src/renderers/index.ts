import image from './Image';
import video from './Video';
import defaultRenderer from './Default';
import autoplayContent from './AutoPlayContent';
import youtube from './YouTube';

export const renderers = [image, video, youtube, autoplayContent, defaultRenderer];
