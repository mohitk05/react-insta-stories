import React from "react";
import { ReactNode } from "react";

interface Props {
  condition: any;
  children?: ReactNode;
}

export default function RenderIf({ condition, children }: Props) {
  if (!condition) return null;

  return <>{children}</>;
}
