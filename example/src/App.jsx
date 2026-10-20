import React, { Suspense } from "react";
import "./App.css";
const StoriesLazy = React.lazy(() => import("react-insta-stories"));
const WithSeeMore = React.lazy(() =>
  import("react-insta-stories").then((module) => ({
    default: module.WithSeeMore,
  }))
);

function App() {
  return (
    <div className="App">
      <div className="left">
        <h2>
          <code>
            <a
              rel="noopener noreferrer"
              href="https://www.npmjs.com/package/react-insta-stories"
              target="_blank"
            >
              react-insta-stories
            </a>
            <br />
            <a href="https://www.npmjs.com/package/react-insta-stories">
              <img
                alt="NPM"
                src="https://img.shields.io/npm/v/react-insta-stories.svg"
              />
            </a>
          </code>
        </h2>
        <p>Create Instagram like stories on the web using React</p>
        <br />
        <code style={{ marginTop: 10, marginBottom: 10 }}>
          <span
            style={{
              background: "#eee",
              padding: 5,
              paddingLeft: 10,
              paddingRight: 10,
              borderRadius: 5,
              width: "auto",
            }}
          >
            npm i react-insta-stories
          </span>
        </code>
        <p>
          <a href="https://github.com/mohitk05/react-insta-stories#react-insta-stories">
            Documentation →
          </a>
        </p>
        <p>
          Made with ♥ by{" "}
          <a
            rel="noopener noreferrer"
            href="https://github.com/mohitk05/react-insta-stories"
            target="_blank"
          >
            @mohitk05
          </a>
        </p>
        <div
          style={{
            background: "#eee",
            padding: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 5,
            width: "auto",
          }}
        >
          <p>◀ Tap left for previous story</p>
          <p>▶︎ Tap right for next story</p>
          <p>◉ Press and hold to pause</p>
        </div>
        <br />
        <div className="updates">
          <p>
            <mark>
              <b>🎉 Version 3.0.0 - Modern Build System</b>
            </mark>
          </p>
          <p>
            <strong>⚠️ Breaking Changes:</strong>
          </p>
          <ul style={{ textAlign: 'left', paddingLeft: 20 }}>
            <li>Node.js ≥20.0.0 required</li>
            <li>Pure ESM package with CommonJS fallback</li>
            <li>UMD format removed</li>
            <li>TypeScript 5.0+ recommended</li>
          </ul>
          <p>
            <strong>✨ Improvements:</strong>
          </p>
          <ul style={{ textAlign: 'left', paddingLeft: 20 }}>
            <li>⚡️ Built with Vite + SWC (faster builds)</li>
            <li>📦 Better tree-shaking with native ESM</li>
            <li>🔧 Development uses pnpm workspaces</li>
            <li>📝 TypeScript 5.9 with modern module resolution</li>
            <li>🗺️ Source maps for better debugging</li>
          </ul>
          <p>
            <a href="https://github.com/mohitk05/react-insta-stories/blob/master/MIGRATION.md">
              📖 Migration Guide →
            </a>
          </p>
          <p>
            <a href="https://github.com/mohitk05/react-insta-stories/blob/master/CHANGELOG.md">
              📋 Full Changelog →
            </a>
          </p>
          <br />
          <p>
            <mark>
              <b>Previous Updates [V2.5.0]</b>
            </mark>
          </p>
          <p>
            • React 18 progress bar bug fix (
            <a href="https://github.com/mohitk05/react-insta-stories/issues/214">
              #214
            </a>
            )
          </p>
          <p>
            <mark>
              <b>Updates [V2.0.0]</b>
            </mark>
          </p>
          <p>• Render custom components/JSX in stories</p>
          <p>• Multiple instances support</p>
          <p>• TypeScript support 🎉</p>
          <p>• Prop-based control and event callbacks</p>
        </div>
        <br />
        <p>
          Know more about me here:{" "}
          <a
            rel="noopener noreferrer"
            href="https://mohitkarekar.com"
            target="_blank"
          >
            mohitkarekar.com
          </a>
        </p>
      </div>
      <div className="stories">
        <Suspense>
          <StoriesLazy
            preloadCount={3}
            loop
            keyboardNavigation
            defaultInterval={8000}
            stories={stories2}
            onStoryEnd={(s, st) => console.log("story ended", s, st)}
            onAllStoriesEnd={(s, st) => console.log("all stories ended", s, st)}
            onStoryStart={(s, st) => console.log("story started", s, st)}
            onNext={() => console.log("next button pressed")}
            onPrevious={() => console.log("previous button pressed")}
            storyContainerStyles={{ borderRadius: 8, overflow: "hidden" }}
          />
        </Suspense>
      </div>
    </div>
  );
}

const Story2 = ({ action, isPaused }) => {
  return (
    <div style={{ ...contentStyle, background: "Aquamarine", color: "#333" }}>
      <h1>You get the control of the story.</h1>
      <p>
        Render your custom JSX by passing just a{" "}
        <code style={{ fontStyle: "italic" }}>content</code> property inside
        your story object.
      </p>
      <p>
        You get a <code style={{ fontStyle: "italic" }}>action</code> prop as an
        input to your content function, that can be used to play or pause the
        story.
      </p>
      <h1>{isPaused ? "Paused" : "Playing"}</h1>
      <h4>v3.0 is out 🎉</h4>
      <p>Built with modern tools: Vite + ESM + TypeScript 5.9</p>
    </div>
  );
};

const stories2 = [
  {
    content: ({ action, isPaused }) => {
      return (
        <div style={{...contentStyle, overflowY: 'auto'}}>
          <h1>Version 3.0 🎉</h1>
          <p>Modern build with Vite + ESM</p>
          <pre>
            <code style={code}>npm i react-insta-stories</code>
          </pre>
          <br />
          <img
            style={image}
            src="https://images.unsplash.com/photo-1565506737357-af89222625ad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80"
          ></img>
          <h3>Swipe for more! →</h3>
        </div>
      );
    },
  },
  {
    content: ({ action, story }) => {
      return (
        <Suspense>
          <WithSeeMore story={story} action={action}>
            <div style={{ background: "snow", padding: 20, height: "100%" }}>
              <h1 style={{ marginTop: "100%", marginBottom: 0 }}>🌝</h1>
              <h1 style={{ marginTop: 5 }}>
                We have our good old image and video stories, just the same.
              </h1>
            </div>
          </WithSeeMore>
        </Suspense>
      );
    },
    seeMoreCollapsed: ({ toggleMore, action }) => (
      <p style={customSeeMore} onClick={() => toggleMore(true)}>
        A custom See More message →
      </p>
    ),
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white",
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
    duration: 5000,
  },
  {
    url: "https://picsum.photos/1080/1920",
    seeMore: ({ close }) => (
      <div
        style={{
          maxWidth: "100%",
          height: "100%",
          padding: 40,
          background: "white",
        }}
      >
        <h2>Just checking the see more feature.</h2>
        <p style={{ textDecoration: "underline" }} onClick={close}>
          Go on, close this popup.
        </p>
      </div>
    ),
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/2/22/Volcano_Lava_Sample.webm/Volcano_Lava_Sample.webm.360p.vp9.webm",
    type: "video",
  },
  {
    url: "https://upload.wikimedia.org/wikipedia/commons/transcoded/4/47/Astrophysics_Holiday_Vertical_Video_%28SVS14800_-_Fermi_YuleLog_Rotate_Reel%29.webm/Astrophysics_Holiday_Vertical_Video_%28SVS14800_-_Fermi_YuleLog_Rotate_Reel%29.webm.480p.vp9.webm",
    type: "video",
  },
  {
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    type: "youtube",
    duration: 30000,
  },
  {
    content: Story2,
  },
  {
    url: "https://plus.unsplash.com/premium_photo-1676231417481-5eae894e7f68?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1676321626679-2513969695d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1676359912443-1bf438548584?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    url: "https://images.unsplash.com/photo-1676316698468-a907099ad5bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    preloadResource: false,
  },
  {
    url: "https://images.unsplash.com/photo-1676310483825-daa08914445e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2920&q=80",
    preloadResource: false,
  },
  {
    url: "https://images.unsplash.com/photo-1676321685222-0b527e61d5c7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    preloadResource: false,
  },
];

const image = {
  display: "block",
  maxWidth: "100%",
  borderRadius: 4,
};

const code = {
  background: "#eee",
  padding: "5px 10px",
  borderRadius: "4px",
  color: "#333",
};

const contentStyle = {
  background: "#333",
  width: "100%",
  padding: 20,
  color: "white",
  height: "100%",
};

const customSeeMore = {
  textAlign: "center",
  fontSize: 14,
  bottom: 20,
  position: "relative",
};

export default App;
