import classNames from 'classnames';
import React from 'react';

import StyledButton, { cls } from './styled';

export type ButtonType = 'solid' | 'outline' | 'ghost' | 'link';

const buttonTypes: ButtonType[] = ['solid', 'outline', 'ghost', 'link'];

export interface ButtonProps {
  icon?: React.ReactNode;
  type?: ButtonType;
  circle?: boolean;
  color?: string;
  children?: React.ReactNode;
  className?: string;
  outlined?: boolean;
  style?: React.CSSProperties;
  disabled?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  size?: 'small' | 'regular' | 'large';
}

export default function Button({
  children,
  className,
  icon = null,
  disabled,
  type = 'solid',
  circle,
  style,
  color,
  ...restProps
}: ButtonProps) {
  const buttonCls = classNames(cls, className, {
    [`${cls}-${type}`]: buttonTypes.includes(type),
    [`${cls}--disabled`]: disabled,
    [`${cls}--circle`]: circle,
  });

  return (
    <StyledButton {...restProps} color={color} disabled={disabled} className={buttonCls} style={style}>
      {icon}
      {icon && children && <i>&nbsp;</i>}
      {children}
    </StyledButton>
  );
}

Button.toString = StyledButton.toString;
