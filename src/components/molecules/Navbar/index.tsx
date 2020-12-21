import React from 'react';
import { InternalLink } from '../../atoms/InternalLink';

import { Nav } from './styles';

export interface INavbarProps {
  links: {
    title: string;
  }[];
  direction: string;
}

export const Navbar = ({ links, direction = 'horizontal' }: INavbarProps) => {
  return (
    <Nav direction={direction}>
      {links.map(({ title }) => (
        <InternalLink key={title} to={`/${title}`}>
          {title}
        </InternalLink>
      ))}
    </Nav>
  );
};
