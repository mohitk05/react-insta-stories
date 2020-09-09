import React from 'react';
import { Renderer, Story, Tester } from "../interfaces";

export const getRenderer = (story: Story, renderers: { renderer: Renderer, tester: Tester }[]): Renderer => {
    return renderers.find(r => {
        return r.tester(story);
    }).renderer
}