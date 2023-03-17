import React, { ComponentType, useState } from "react";
import { Action, SeeMoreProps, Story } from "../../interfaces";
import SeeMore from "./../../components/SeeMore";

const withSeeMore: React.FC<React.PropsWithChildren<{
  story: Story;
  action: Action;
  customCollapsed?: SeeMoreProps["customCollapsed"];
}>> = ({ story, action, customCollapsed, children }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleMore = (show: boolean) => {
    action(show ? "pause" : "play");
    setShowMore(show);
  };
  const CollapsedComponent = SeeMore;
  return (
    <>
      {children}
      {story.seeMore && (
        <div
          style={{
            position: "absolute",
            margin: "auto",
            bottom: showMore ? "unset" : 0,
            zIndex: 9999,
            width: "100%",
            height: showMore ? "100%" : "auto",
          }}
        >
          <CollapsedComponent
            action={action}
            toggleMore={toggleMore}
            showContent={showMore}
            seeMoreContent={story.seeMore}
            customCollapsed={customCollapsed || story.seeMoreCollapsed}
          />
        </div>
      )}
    </>
  );
};

export default withSeeMore;
