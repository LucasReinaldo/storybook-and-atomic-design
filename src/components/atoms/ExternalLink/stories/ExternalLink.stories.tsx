import React from 'react';
import { IoOpenOutline } from 'react-icons/io5';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { ExternalLink, IExternalLinkProps } from '..';

export const basicLink: Story<IExternalLinkProps> = () => (
  <ExternalLink href="https://github.com/LucasReinaldo" icon={IoOpenOutline}>
    github/LucasReinaldo
  </ExternalLink>
);

export default {
  component: ExternalLink,
  title: 'Design System/Atoms/ExternalLink',
} as Meta;
