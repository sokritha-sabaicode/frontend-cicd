import React from 'react';
import { Meta, StoryObj } from '@storybook/react';
import Footers from '../app/components/footers';

// Define the types for the story
type FooterStory = StoryObj<typeof Footers>;

export default {
  title: 'Components/Footers',
  component: Footers,
} as Meta<typeof Footers>;

// Default template for the Footers component
const Template: FooterStory = {
  render: (args) => <Footers {...args} />,
};

// Default story
export const Default: FooterStory = {
  ...Template,
  args: {
    text: '© 2024 My Website. All rights reserved.',
    links: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Terms of Service', url: '#' },
      { name: 'Contact Us', url: '#' },
    ],
  },
};

// Story with custom text
export const CustomText: FooterStory = {
  ...Template,
  args: {
    text: '© 2024 Custom Text. All rights reserved.',
    links: [
      { name: 'Help', url: '#' },
      { name: 'Support', url: '#' },
      { name: 'About Us', url: '#' },
    ],
  },
};

// Story with fewer links
export const FewerLinks: FooterStory = {
  ...Template,
  args: {
    text: '© 2024 My Website. All rights reserved.',
    links: [
      { name: 'Privacy Policy', url: '#' },
      { name: 'Contact Us', url: '#' },
    ],
  },
};
