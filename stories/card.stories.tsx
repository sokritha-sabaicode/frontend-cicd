import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Card from '../app/components/Card';
export default {
  title: 'Components/Card',
  component: Card,
  tags:["autodocs"],
} as Meta<typeof Card>;

// Define the story template using StoryObj
const Template: StoryObj<typeof Card> = {
  render: (args) => <Card {...args} />,
};

// Define the Default story
export const Default: StoryObj<typeof Card> = {
  ...Template,
  args: {
    title: 'Card Title',
    content: 'This is the card content. It provides some details about the card.',
  },
};

// Define a story with a footer
export const WithFooter: StoryObj<typeof Card> = {
  ...Template,
  args: {
    title: 'Card with Footer',
    content: 'This card has a footer section.',
    footer: 'Footer Content',
  },
};

// Define a story with different content
export const DifferentContent: StoryObj<typeof Card> = {
  ...Template,
  args: {
    title: 'Another Card Title',
    content: 'This card has different content to show variation.',
  },
};



