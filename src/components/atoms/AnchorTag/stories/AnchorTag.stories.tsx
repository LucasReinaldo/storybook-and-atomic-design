import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { AnchorTag, IAnchorProps } from '..';

export const basicAnchor: Story<IAnchorProps> = () => (
  <AnchorTag href="https://github.com/LucasReinaldo" icon={IoOpenOutline}>
    github/LucasReinaldo
  </AnchorTag>
);

export default {
  component: AnchorTag,
  title: 'AnchorTag',
} as Meta;
