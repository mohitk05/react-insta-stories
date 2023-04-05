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
import { timestamp } from "../util/time";

export default () => {
  const [count, setCount] = useState<number>(0);
  const lastTime = useRef<number>();

  const { currentId, next, videoDuration, pause, bufferAction } =
    useContext<ProgressContext>(ProgressCtx);
  const {
    defaultInterval,
    onStoryEnd,
    onStoryStart,
    progressContainerStyles,
  } = useContext<GlobalCtx>(GlobalContext);
  const { stories } = useContext<StoriesContextInterface>(StoriesContext);

  useEffect(() => {
    setCount(0);
  }, [currentId, stories]);

  useEffect(() => {
    if (!pause) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
      lastTime.current = timestamp();
    }
    return () => {
      cancelAnimationFrame(animationFrameId.current);
    };
  }, [currentId, pause]);

  let animationFrameId = useRef<number>();

  let countCopy = count;
  const incrementCount = () => {
    if (countCopy === 0) storyStartCallback();
    if (lastTime.current == undefined) lastTime.current = timestamp();
    const t = timestamp();
    const dt = t - lastTime.current;
    lastTime.current = t;
    setCount((count: number) => {
      const interval = getCurrentInterval();
      countCopy = count + (dt * 100) / interval;
      return countCopy;
    });
    if (countCopy < 100) {
      animationFrameId.current = requestAnimationFrame(incrementCount);
    } else {
      storyEndCallback();
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

  const getCurrentInterval = () => {
    if (stories[currentId].type === "video") return videoDuration;
    if (typeof stories[currentId].duration === "number")
      return stories[currentId].duration;
    return defaultInterval;
  };

  const opacityStyles = {
    opacity: pause && !bufferAction ? 0 : 1,
  };

  return (
    <div style={{
      ...styles.progressArr,
      ...progressContainerStyles,
      ...opacityStyles
    }}>
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
    transition: "opacity 400ms ease-in-out",
  },
};
