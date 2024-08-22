import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Button from '../app/components/button';
import { fn } from '@storybook/test';

export default {
  title: 'Components/button',
  component: Button,
} as Meta<typeof Button>;

// Define the story template using StoryObj
const Template: StoryObj<typeof Button> = {
  render: (args) => <Button {...args} />,
};

// Define the Default story
export const Default: StoryObj<typeof Button> = {
  ...Template,
  args: {
    title: 'Click me',
    onclick:fn()
  },
};

// Define the WithCustomLabel story
export const WithCustomLabel: StoryObj<typeof Button> = {
  ...Template,
  args: {
    title: 'Custom Label',
    onclick:fn()
  },
};
