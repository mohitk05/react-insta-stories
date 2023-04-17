import {Story} from "../interfaces";
import {useEffect, useRef, useState} from "react";


// Caches given Story[] using HTMLImageElement and HTMLVideoElement
const cacheContent = async (contents: Story[]) => {
	const promises = contents.map((content) => {
		return new Promise(function (resolve, reject) {
			if(!content.url) return

			if(content.type === 'video') {
				const video = document.createElement('video');
				video.src = content.url;
				video.onloadeddata = resolve;
				video.onerror = reject;
				return;
			}

			const img = new Image();
			img.src = content.url;
			img.onload = resolve;
			img.onerror = reject;

		})
	})

	await Promise.all(promises);
}

// Keeps track of urls that have been loaded
const urlsLoaded = new Set<string>();

// Pushes urls to urlsLoaded
const markUrlsLoaded = (contents: Story[]) => {
	contents.forEach((content) => {
		urlsLoaded.add(content.url)
	})
}

// Preloads images and videos from given Story[] using a cursor and preloadCount
// Preload count is the number of images/videos to preload after the cursor
// Cursor is the current index to start preloading from
export const usePreLoader = (contents: Story[], cursor: number, preloadCount: number) => {


	useEffect(() => {
		const start = cursor + 1;
		const end = cursor + preloadCount + 1;

		const toPreload = contents.slice(start, end)
			.filter((content) => !urlsLoaded.has(content.url)); // Only preload urls that haven't been loaded yet

		markUrlsLoaded(toPreload)

		cacheContent(toPreload)
	}, [cursor, preloadCount, contents])
}
