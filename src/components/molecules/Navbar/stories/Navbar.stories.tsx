import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { Navbar, INavbarProps } from '..';

const navLink = [
  {
    title: 'home',
  },
  {
    title: 'contact',
  },
  {
    title: 'about',
  },
];

export const basicNavbar: Story<INavbarProps> = (args) => (
  <Navbar {...args} links={navLink} />
);

export default {
  component: Navbar,
  title: 'Design System/molecules/Navbar',
  args: {
    direction: 'horizontal',
    links: navLink,
  },
  argTypes: {
    direction: {
      control: {
        type: 'select',
        options: {
          horizontal: 'horizontal',
          vertical: 'vertical',
        },
      },
    },
  },
} as Meta;
