import React from "react";
import { ProgressContext } from "./../types";

export default React.createContext<ProgressContext>({
  currentId: 0,
  videoDuration: 0,
  bufferAction: false,
  pause: false,
  next: () => {},
});
