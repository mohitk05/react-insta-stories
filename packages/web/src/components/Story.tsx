import React, { CSSProperties, useContext } from "react";
import { StoryProps, GlobalCtx } from "react-stories-common/dist/types";
import { GlobalContext } from 'react-stories-common';

const Story = (props: StoryProps) => {
	const globalContext = useContext<GlobalCtx>(
		GlobalContext
	);

	const { width, height, loader, header, storyStyles } = globalContext;

	const rendererMessageHandler = (type: string, data: any) => {
		switch (type) {
			case 'UPDATE_VIDEO_DURATION':
				props.getVideoDuration(data.duration);
				return { ack: 'OK' as 'OK' }
		}
	}

	const getStoryContent = () => {
		let InnerContent = props.story.content;
		let config = { width, height, loader, header, storyStyles };
		return <InnerContent
			action={props.action}
			isPaused={props.playState}
			story={props.story}
			config={config}
			messageHandler={rendererMessageHandler}
		/>
	};

	return (
		<div
			style={{ ...styles.story, width: width, height: height } as CSSProperties}
		>
			{getStoryContent()}
		</div>
	);
};

const styles = {
	story: {
		display: "flex",
		position: "relative",
		overflow: "hidden",
		alignItems: "center"
	},
	storyContent: {
		width: "auto",
		maxWidth: "100%",
		maxHeight: "100%",
		margin: "auto"
	}
};

export default Story;
