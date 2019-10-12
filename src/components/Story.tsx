import React, { useState, useEffect, useContext } from "react";
import { StoryProps, GlobalCtx } from "./../interfaces";
import Header from "./Header";
import SeeMore from "./SeeMore";
// import globalStyle from './../styles.css'
import GlobalContext from "./../context/Global";

const Story = (props: StoryProps) => {
	const [loaded, setLoaded] = useState<boolean>(false);
	const [showMore, setShowMore] = useState<boolean>(false);

	const { width, height, loader, header, storyStyles } = useContext<GlobalCtx>(
		GlobalContext
	);

	useEffect(() => {
		pauseId && clearTimeout(pauseId);
		pauseId = setTimeout(() => {
			setLoaded(false);
		}, 300);
		props.action("pause", true);
		vid &&
			vid.addEventListener("waiting", () => {
				props.action("pause", true);
			});
		vid &&
			vid.addEventListener("playing", () => {
				props.action("play", true);
			});
	}, [props.story]);

	let pauseId: NodeJS.Timeout;
	let vid: HTMLVideoElement;

	useEffect(() => {
		if (vid && !props.bufferAction) {
			if (props.playState) {
				vid.pause();
			} else {
				vid.play().catch(e => console.log(e));
			}
		}
	}, [props.playState]);

	const toggleMore = (show: boolean) => {
		setShowMore(show);
	};

	const imageLoaded = () => {
		try {
			if (pauseId) clearTimeout(pauseId);
			setLoaded(true);
			props.action("play", true);
		} catch (e) {
			console.log(e);
		}
	};

	const videoLoaded = () => {
		try {
			props.getVideoDuration(vid.duration);
			vid &&
				vid
					.play()
					.then(() => {
						imageLoaded();
					})
					.catch(e => {
						props.action("pause");
						console.log(e);
					});
		} catch (e) {
			console.log(e);
		}
	};

	const getStoryContent = () => {
		let source =
			typeof props.story === "object" ? props.story.url : props.story;
		let storyContentStyles =
			(typeof props.story === "object" && props.story.styles) ||
			storyStyles ||
			styles.storyContent;
		let type =
			typeof props.story === "object" && props.story.type === "video"
				? "video"
				: "image";
		return type === "image" ? (
			<img style={storyContentStyles} src={source} onLoad={imageLoaded} />
		) : type === "video" ? (
			<video
				ref={r => {
					vid = r;
				}}
				style={storyContentStyles}
				src={source}
				controls={false}
				onLoadedData={videoLoaded}
				autoPlay
				playsInline
			/>
		) : null;
	};

	let isHeader = typeof props.story === "object" && props.story.header;
	return (
		<div style={{ ...styles.story, width: width, height: height }}>
			{getStoryContent()}
			{isHeader && (
				<div style={{ position: "absolute", left: 12, top: 20, zIndex: 19 }}>
					{typeof props.story === "object" ? (
						header ? (
							header(props.story.header)
						) : (
								<Header
									heading={props.story.header.heading}
									subheading={props.story.header.subheading}
									profileImage={props.story.header.profileImage}
								/>
							)
					) : null}
				</div>
			)}
			{!loaded && (
				<div
					style={{
						width: width,
						height: height,
						position: "absolute",
						left: 0,
						top: 0,
						background: "rgba(0, 0, 0, 0.9)",
						zIndex: 9,
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						color: "#ccc"
					}}
				>
					{loader || <p>Loading...</p>/*<div className={globalStyle.spinner} />*/}
				</div>
			)}
			{typeof props.story === "object" && props.story.seeMore && (
				<div
					style={{
						position: "absolute",
						margin: "auto",
						bottom: 0,
						zIndex: 9999,
						width: "100%"
					}}
				>
					<SeeMore
						action={props.action}
						toggleMore={toggleMore}
						showContent={showMore}
						seeMoreContent={props.story.seeMore}
					/>
				</div>
			)}
		</div>
	);
};

const styles = {
	story: {
		display: "flex",
		position: "relative",
		overflow: "hidden"
	},
	storyContent: {
		width: "auto",
		maxWidth: "100%",
		maxHeight: "100%",
		margin: "auto"
	}
};

export default Story;
