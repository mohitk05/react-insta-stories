import React from "react";
import NextSVG from "../assets/next.svg";
import PrevSVG from "../assets/prev.svg";

const NavigatePrev = ({ onPrev }: { onPrev(): void }) => {
  return <PrevSVG style={icon} onClick={onPrev} />;
};

const NavigateNext = ({ onNext }: { onNext(): void }) => {
  return <NextSVG style={icon} onClick={onNext} />;
};

const icon = {
  position: "absolute",
  background: "rgb(255 255 255 / 80%)",
  borderRadius: "50%",
  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
};

export { NavigatePrev, NavigateNext };
