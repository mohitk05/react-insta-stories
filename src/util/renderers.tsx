import { Renderer, Story, Tester } from "../interfaces";

export const getRenderer = (story: Story, renderers: { renderer: Renderer, tester: Tester }[]): Renderer => {
    let probable = renderers.map(r => {
        return {
            ...r,
            testerResult: r.tester(story)
        }
    }).filter(r => r.testerResult.condition);
    probable.sort((a, b) => b.testerResult.priority - a.testerResult.priority);
    return probable[0].renderer;
}