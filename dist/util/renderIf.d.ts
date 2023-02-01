import { ReactNode } from "react";
interface Props {
    condition: any;
    children?: ReactNode;
}
export default function RenderIf({ condition, children }: Props): JSX.Element;
export {};
