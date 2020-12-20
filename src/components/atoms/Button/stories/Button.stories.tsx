/* eslint-disable no-alert */
import React from 'react';
import { IoBugSharp, IoLogInOutline, IoBan } from 'react-icons/io5';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { MyButton, IButtonProps } from '..';

const iconMap = { IoBugSharp, IoLogInOutline, IoBan };

export const buttonWithIcon: Story<IButtonProps> = ({
  icon = 'IoBugSharp',
  ...rest
}) => <MyButton icon={iconMap[icon as keyof typeof iconMap]} {...rest} />;

// export const ButtonWithIcon = buttonWithIcon.bind({});

export const functionButton: Story<IButtonProps> = () => (
  <MyButton onClick={() => alert('Hello')}>My Function Button</MyButton>
);

export default {
  component: MyButton,
  title: 'Design System/Atoms/Button',
  args: {
    label: 'Change Me!',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(iconMap),
      },
    },
  },
} as Meta;
