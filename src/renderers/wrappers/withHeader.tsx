import React from "react";
import { Story } from "../../interfaces";
import Header from "./../../components/Header";

const withHeader: React.FC<
  React.PropsWithChildren<{
    story: Story;
    globalHeader: Function;
  }>
> = ({ story, globalHeader, children }) => {
  return (
    <>
      {children}
      {story.header && (
        <div style={{ position: "absolute", left: 12, top: 20, zIndex: 1001 }}>
          {typeof story === "object" ? (
            globalHeader ? (
              globalHeader(story.header)
            ) : (
              <Header
                externalLink={story.header.externalLink}
                heading={story.header.heading}
                subheading={story.header.subheading}
                profileImage={story.header.profileImage}
              />
            )
          ) : null}
        </div>
      )}
    </>
  );
};

export default withHeader;
