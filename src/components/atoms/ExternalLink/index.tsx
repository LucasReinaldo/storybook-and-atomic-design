import React from 'react';
import { IconBaseProps } from 'react-icons';

import { Anchor } from './styles';

export interface IExternalLinkProps {
  children: string;
  icon?: React.ElementType<IconBaseProps>;
  href?: string;
}

export const ExternalLink = ({
  children,
  icon: Icon,
  href,
}: IExternalLinkProps) => {
  return (
    <Anchor href={href} target="_blank">
      {children}
      {Icon && <Icon size={20} />}
    </Anchor>
  );
};
