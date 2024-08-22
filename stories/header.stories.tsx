import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Header from '../app/components/Header';

export default {
  title: 'Components/Header',
  component: Header,
} as Meta<typeof Header>;

// Default template for the Header component
const Template: StoryObj<typeof Header> = {
  render: (args) => <Header {...args} />,
};

// Default story
export const Default: StoryObj<typeof Header> = {
  ...Template,
  args: {
    logo: 'https://via.placeholder.com/32',
    title: 'My Website',
    login: 'Login',
  },
};

// Story with a custom title
export const CustomTitle: StoryObj<typeof Header> = {
  ...Template,
  args: {
    logo: 'https://logos-world.net/wp-content/uploads/2020/11/The-Body-Shop-Logo.png',
    title: 'Custom Website',
    login: 'Sign In',
  },
};

// Story with different button text
export const DifferentButton: StoryObj<typeof Header> = {
  ...Template,
  args: {
    logo: 'https://via.placeholder.com/32',
    title: 'My Website',
    login: 'Get Started',
  },
};
