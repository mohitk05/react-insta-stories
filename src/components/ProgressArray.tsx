import React, { useContext, useState, useEffect, useRef } from "react";
import Progress from "./Progress";
import {
  ProgressContext,
  GlobalCtx,
  StoriesContext as StoriesContextInterface,
} from "./../interfaces";
import ProgressCtx from "./../context/Progress";
import GlobalContext from "./../context/Global";
import StoriesContext from "./../context/Stories";

export default () => {
  const [count, setCount] = useState<number>(0);
  const { currentId, next, videoDuration, pause, bufferAction } = useContext<ProgressContext>(
    ProgressCtx
  );
  const {
    defaultInterval,
    onStoryEnd,
    onStoryStart,
    onAllStoriesEnd,
  } = useContext<GlobalCtx>(GlobalContext);
  const { stories } = useContext<StoriesContextInterface>(StoriesContext);

  useEffect(() => {
    setCount(0);
  }, [currentId, stories]);

  useEffect(() => {
    if (!pause) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    }
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [currentId, pause]);

  let animationFrameId = useRef<number>();

  const startTime = Date.now();
  let frame = 0;

  let countCopy = count;

  const incrementCount = () => {
    frame++;

    if (countCopy === 0) storyStartCallback();

    const time = Date.now();

    setCount((count: number) => {
      const interval = getCurrentInterval();
      const fps = frame / ((time - startTime) / 1000);

      countCopy = count + 100 / ((interval / 1000) * fps);
      return count + 100 / ((interval / 1000) * fps);
    });

    if (countCopy < 100) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    } else {
      storyEndCallback();

      if (currentId === stories.length - 1) {
        allStoriesEndCallback();
      }

      cancelAnimationFrame(animationFrameId.current);
      next();
    }
  };

  const storyStartCallback = () => {
    onStoryStart && onStoryStart(currentId, stories[currentId]);
  };

  const storyEndCallback = () => {
    onStoryEnd && onStoryEnd(currentId, stories[currentId]);
  };

  const allStoriesEndCallback = () => {
    onAllStoriesEnd && onAllStoriesEnd(currentId, stories);
  };

  const getCurrentInterval = () => {
    if (stories[currentId].type === "video") return videoDuration;
    if (typeof stories[currentId].duration === "number")
      return stories[currentId].duration;
    return defaultInterval;
  };

  const opacityStyles = {
    opacity: pause && !bufferAction ? 0 : 1
  }

  return (
    <div style={{ ...styles.progressArr, ...opacityStyles }}>
      {stories.map((_, i) => (
        <Progress
          key={i}
          count={count}
          width={1 / stories.length}
          active={i === currentId ? 1 : i < currentId ? 2 : 0}
        />
      ))}
    </div>
  );
};

const styles = {
  progressArr: {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    flexWrap: "nowrap" as const,
    position: "absolute" as const,
    width: "98%",
    padding: 5,
    paddingTop: 7,
    alignSelf: "center",
    zIndex: 1001,
    filter: "drop-shadow(0 1px 8px #222)",
    transition: 'opacity 400ms ease-in-out'
  },
};
