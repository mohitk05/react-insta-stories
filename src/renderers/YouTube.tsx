import * as React from "react";
import { Renderer, Tester } from "./../interfaces";
import WithHeader from "./wrappers/withHeader";
import WithSeeMore from "./wrappers/withSeeMore";

const getYouTubeId = (url: string): string | null => {
  const match = url.match(
    /(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
  );
  return match ? match[1] : null;
};

export const renderer: Renderer = ({ story, action, config }) => {
  const [loaded, setLoaded] = React.useState(false);
  const { width, height } = config;
  const videoId = story.url ? getYouTubeId(story.url) : null;

  React.useEffect(() => {
    action("pause");
  }, []);

  if (!videoId) return null;

  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&rel=0&modestbranding=1`;

  return (
    <WithHeader {...{ story, globalHeader: config.header ?? (() => null) }}>
      <WithSeeMore {...{ story, action }}>
        <div style={{ width, height, background: "#000", position: "relative" }}>
          {!loaded && (
            <div style={styles.loader}>
              <div style={styles.playIcon}>▶</div>
            </div>
          )}
          <iframe
            src={embedUrl}
            style={{ ...styles.iframe, opacity: loaded ? 1 : 0 }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={() => setLoaded(true)}
          />
        </div>
      </WithSeeMore>
    </WithHeader>
  );
};

const styles: Record<string, React.CSSProperties> = {
  iframe: {
    width: "100%",
    height: "100%",
    border: "none",
    position: "absolute",
    top: 0,
    left: 0,
  },
  loader: {
    position: "absolute",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "#000",
    zIndex: 1,
  },
  playIcon: {
    fontSize: 48,
    color: "#fff",
    opacity: 0.7,
  },
};

export const tester: Tester = (story) => ({
  condition: story.type === "youtube",
  priority: 3,
});

export default { renderer, tester };
