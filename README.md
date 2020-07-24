![Main image](https://i.imgur.com/OAL12S5.jpg)

<h1 style="margin: 0" align="center">react-insta-stories</h1>
<p align="center">A React component for Instagram like stories</p>

<p align="center"><a href="https://mohitk05.github.io/react-insta-stories/">Homepage</a> • <a href="http://react-insta-stories-v2.surge.sh">Demo</a></p>

<div align="center"><a href="https://www.npmjs.com/package/react-insta-stories"><img alt="NPM" src="https://img.shields.io/npm/v/react-insta-stories.svg"></a>&nbsp;<a href="https://standardjs.com"><img alt="JavaScript Style Guide" src="https://img.shields.io/badge/code_style-standard-brightgreen.svg"></a>&nbsp;<a href="#backers"><img alt="Backers on Open Collective" src="https://opencollective.com/react-insta-stories/backers/badge.svg"></a>&nbsp;<a href="#sponsors"><img alt="Sponsors on Open Collective" src="https://opencollective.com/react-insta-stories/sponsors/badge.svg"></a></div>
<br>
<p style="text-align: center">This package is being sponsored by the following tool; please help to support us by taking a look and signing up to a free trial.</p>
<a style="width: 100%" href="https://tracking.gitads.io/?repo=react-insta-stories"><img style="display: block; margin: auto" src="https://images.gitads.io/react-insta-stories" alt="GitAds"/></a>

## What's new in v2? 🚀

-   Render your own components/JSX in stories
-   Create multiple instances to recreate stories by multiple users easily, jump to stories using props
-   Prop based control, event callbacks
-   Custom JSX gives control to pause/play story
-   **(for devs)** TypeScript 🎉
-   **(for devs)** Updated for easier feature additions, hooks

<br>

<img height="600" src="https://i.imgur.com/Y1s8FKb.png" alt="Demo screenshot"/>

## Install

```bash
npm install --save react-insta-stories
```

## Demo

The component responds to actions like tap on right side for next story, on left for previous and tap and hold for pause. Custom time duration for each story can be provided.
See it in action here: https://mohitk05.github.io/react-insta-stories/

## Usage

```jsx
import React, { Component } from 'react';

import Stories from 'react-insta-stories';

const App = () => {
	return (
		<Stories
			stories={stories}
			defaultInterval={1500}
			width={432}
			height={768}
		/>
	);
};
```

Here `stories` is an array of story objects, which can be of various types as described [below](#story-object).

## Props

| Property          | Type            | Default                   | Description                                                                                                                                                         |
| ----------------- | --------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `stories`         | [String/Object] | `required`                | An array of image urls or array of story objects (options described below)                                                                                          |
| `defaultInterval` | Number          | 1200                      | Milliseconds duration for which a story persists                                                                                                                    |
| `loader`          | Component       | Ripple loader             | A loader component as a fallback until image loads from url                                                                                                         |
| `header`          | Component       | Default header as in demo | A header component which sits at the top of each story. It receives the `header` object from the `story` object. Data for header to be sent with each story object. |
| `width`           | Number          | 360                       | Width of the component in pixels                                                                                                                                    |
| `height`          | Number          | 640                       | Height of the component in pixels                                                                                                                                   |
| `storyStyles`     | Object          | none                      | Override the default story styles mentioned below.                                                                                                                  |
| `loop`            | Boolean         | false                     | The last story loop to the first one and restart the stories.                                                                                                       |
| **New props**     | ⭐️             | ⭐️                       | ⭐️                                                                                                                                                                 |
| `isPaused`        | Boolean         | false                     | Toggle story playing state                                                                                                                                          |
| `currentIndex`    | Number          | undefined                 | Set the current story index                                                                                                                                         |
| `onStoryStart`    | Function        | -                         | Callback when a story starts                                                                                                                                        |
| `onStoryEnd`      | Function        | -                         | Callback when a story ends                                                                                                                                          |
| `onAllStoriesEnd` | Function        | -                         | Callback when all stories in the array have ended                                                                                                                   |

### Story object

Instead of simple string url, a comprehensive 'story object' can also be passed in the `stories` array.

| Property   | Description                                                                                                                                   |
| ---------- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `url`      | The url of the resource, be it image or video.                                                                                                |
| `duration` | Optional. Duration for which a story should persist.                                                                                          |
| `header`   | Optional. Adds a header on the top. Object with `heading`, `subheading` and `profileImage` properties.                                        |
| `seeMore`  | Optional. Adds a see more icon at the bottom of the story. On clicking, opens up this component. (v2: updated to Function instead of element) |
| `type`     | Optional. To distinguish a video story. `type: 'video'` is necessary for a video story.                                                       |
| `styles`   | Optional. Override the default story styles mentioned below.                                                                                  |

### Default story styles

Following are the default story content styles. Override them by providing your own style object with each story or a global override by using the `storyStyles` prop.

```js
storyContent: {
    width: 'auto',
    maxWidth: '100%',
    maxHeight: '100%',
    margin: 'auto'
}
```

## Common Usage

#### 1. Basic implementation with string URLs

If you wish to have a bare minimum setup and only need to show image stories, you can simply pass the image urls inside the `stories` array.
This will show all your images as stories.

```js
import Stories from 'react-insta-stories';

const stories = [
	'https://example.com/pic.jpg',
	'data:image/jpg;base64,R0lGODl....',
	'https://mohitkarekar.com/icon.png',
];

return () => <Stories stories={stories} />;
```

#### 2. Customising stories

If plain images does not suffice your usecase, you can pass an object instead of a string. This object supports all the properties mentioned above in the section [story object](#story-object). While using the object type, use `url` to denote the source url in case of media.

These properties can be mixed in different ways to obtain desired output.

##### Duration

Each story can be set to have a different duration.

```jsx
const stories = [
	'https://example.com/pic.jpg',
	{
		url: 'https://example.com/pic2.jpg',
		duration: 5000,
	},
];
```

##### Header

Adds a header to the story.

```jsx
const stories = [
	'https://example.com/pic.jpg',
	{
		url: 'https://example.com/pic2.jpg',
		duration: 5000,
		header: {
			heading: 'Mohit Karekar',
			subheading: 'Posted 30m ago',
			profileImage: 'https://picsum.photos/100/100',
		},
	},
];
```

##### See More

Adds a click to see more option at the bottom of the story. When present, shows the arrow at the bottom and when clicked, shows the provided component.

```jsx
const stories = [
	'https://example.com/pic.jpg',
	{
		url: 'https://example.com/pic2.jpg',
		duration: 5000,
		seeMore: SeeMore, // some component
	},
	{
		url: 'https://example.com/pic3.jpg',
		duration: 2000,
		seeMore: ({ close }) => {
			return <div onClick={close}>Hello, click to close this.</div>;
		},
	},
];
```

##### Type

If provided `type: video`, then the component loads a video player. All expected features come in automatically. Duration is ignored, if provided and actual video duration is considered.

```jsx
const stories = [
	'https://example.com/pic.jpg',
	{
		url: 'https://example.com/vid.mp4',
		duration: 5000, // ignored
		type: 'video',
	},
];
```

##### Styles

Override default story element styles. Regular style object can be provided.

#### 3. Custom JSX as a story

You can render custom JSX inside a story by sending a `content` property inside the story object. If a `content` property is present, all other media related properties are ignored. `duration` holds true here.

```jsx
const stories = [
	'https://example.com/pic.jpg',
	{
		content: (props) => (
			<div style={{ background: 'pink', padding: 20 }}>
				<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
				<h1 style={{ marginTop: 5 }}>A custom title can go here.</h1>
			</div>
		),
	},
];
```

The content property can hold any React component. For further control, it receives two important props:

-   `action` It allows you to fire play/pause actions.
-   `isPaused` Holds true is the story is currently paused, false otherwise.

```jsx
const stories = [
	'https://example.com/pic.jpg',
	{
		content: ({ action, isPaused }) => {
			useEffect(() => {
				setTimeout(() => {
					action('pause');
					setTimeout(() => {
						action('play');
					}, 2000);
				}, 2000);
			}, []);
			return (
				<div style={{ background: 'pink', padding: 20 }}>
					<h1 style={{ marginTop: '100%', marginBottom: 0 }}>🌝</h1>
					<h1>{isPaused ? 'Paused' : 'Playing'}</h1>
				</div>
			);
		},
	},
];
```

In the code above, on render a timeout will be set which would fire a 'pause' action after 2 seconds. Again after 2 seconds, a 'play' action would be fired.
In the JSX, `isPaused` is used to display the current play state.

## Development

To develop this package locally, you can follo these steps:

1. Clone the repo to your local.
2. Run `npm install`.
3. Then `cd example && npm install`
4. Come back to the root directory `cd ..`
5. Run `npm start`
6. In a new command window/tab, run `npm run example`.

This will start a hot-reloading setup with a live example.

## Websites using `react-insta-stories`

-   [Corsza](http://corsza.com/)
-   [TLDR Stories](https://www.producthunt.com/posts/tldr-stories-a0c16732-ba1e-4a40-b420-8582b9128bac)

Do you use `react-insta-stories` too? Raise a PR to include your site in this list!

## Contributors

This project exists thanks to all the people who contribute.
<a href="https://github.com/mohitk05/react-insta-stories/graphs/contributors"><img src="https://opencollective.com/react-insta-stories/contributors.svg?width=890&button=false" /></a>

## Backers

Thank you to all our backers! 🙏 [Become a backer](https://opencollective.com/react-insta-stories#backer)

<a href="https://opencollective.com/react-insta-stories#backers" target="_blank"><img src="https://opencollective.com/react-insta-stories/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. [Become a sponsor](https://opencollective.com/react-insta-stories#sponsor)

<a href="https://opencollective.com/react-insta-stories/sponsor/0/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/1/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/2/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/3/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/4/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/5/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/6/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/7/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/8/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/react-insta-stories/sponsor/9/website" target="_blank"><img src="https://opencollective.com/react-insta-stories/sponsor/9/avatar.svg"></a>

## License

MIT © [mohitk05](https://github.com/mohitk05)
