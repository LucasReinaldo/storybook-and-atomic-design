import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Anchor } from './styles';

export interface IAnchorProps {
  children: string;
  icon?: React.ElementType<IconBaseProps>;
  href?: string;
}

export const AnchorTag = ({ children, icon: Icon, href }: IAnchorProps) => {
  return (
    <Anchor href={href} target="_blank">
      {children}
      {Icon && <Icon size={20} />}
    </Anchor>
  );
};
