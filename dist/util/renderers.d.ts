import { Renderer, Story, Tester } from "../interfaces";
export declare const getRenderer: (story: Story, renderers: {
    renderer: Renderer;
    tester: Tester;
}[]) => Renderer;
