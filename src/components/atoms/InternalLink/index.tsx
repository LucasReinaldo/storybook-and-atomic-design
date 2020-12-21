import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

export interface IInternalLinkProps {
  children: string;
  to: string;
}

export const InternalLink = ({ children, to }: IInternalLinkProps) => {
  return (
    <BrowserRouter>
      <Link to={to}>{children}</Link>
    </BrowserRouter>
  );
};
