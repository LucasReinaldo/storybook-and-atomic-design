import React, { ButtonHTMLAttributes } from 'react';
import { IconBaseProps } from 'react-icons';

import { Button } from './styles';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: string;
  label?: string;
  icon?: React.ElementType<IconBaseProps>;
  onClick?: () => void;
}

export const MyButton = ({ label, icon: Icon, onClick }: IButtonProps) => {
  return (
    <Button type="button" onClick={onClick}>
      {Icon && <Icon size={20} />}
      {label}
    </Button>
  );
};
