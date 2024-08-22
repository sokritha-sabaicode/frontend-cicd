import type { Meta, StoryObj } from '@storybook/react';

import TodoItem from '../app/components/todo';
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
const meta: Meta<typeof TodoItem> = {
  component: TodoItem,
  render: (args, { loaded: { todo } }) => <TodoItem {...args} {...todo} />,
};

export default meta;
type Story = StoryObj<typeof TodoItem>;

export const Primary: Story = {
  loaders: [
    async () => ({
      todo: await (await fetch('https://jsonplaceholder.typicode.com/todos/1')).json(),
    }),
  ],
};