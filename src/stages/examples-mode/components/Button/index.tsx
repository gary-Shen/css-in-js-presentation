import React from 'react';

import CyberStyledButton from './styled';

export interface ButtonProps {
  color?: string;
  children?: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  mode?: 'dark' | 'light';
}

export default function CyberButton({ children, className, color, ...rest }: ButtonProps) {
  return (
    <CyberStyledButton {...rest} as="button" color={color} className={className}>
      <div className="inner">
        {children}
        <span aria-hidden>_</span>
        <span aria-hidden className="glitch">
          {children}_
        </span>
        <span aria-hidden className="tag">
          R25
        </span>
      </div>
    </CyberStyledButton>
  );
}
