import { transparentize } from 'polished';
import React from 'react';
import styled, { css } from 'styled-components';

import { ukraine } from '../../themes';

export const Title = styled.div`
  display: inline-block;
  padding: 1rem 2rem;
  border: 0.5rem solid ${({ theme }) => theme.brand.borderColor};
  font-size: 3rem;
  font-weight: bold;
  color: #888;
  transition: background-color 0.2s;
  font-family: ${({ theme }) => theme.fontFamily || 'inherit'};
  &:hover {
    background-color: ${({ theme }) => transparentize(0.75, theme.brand.borderColor)};
  }

  ${({ theme }) => css`
    .css-text {
      color: ${theme.brand.cssTextColor};
      text-shadow: 0 5px ${transparentize(0.75, theme.brand.cssTextColor)};
    }

    .js-text {
      color: ${theme.brand.jsTextColor};
      font-family: monospace;
    }
  `}
`;

Title.defaultProps = {
  theme: ukraine,
};

export interface BrandTitleProps {
  onClick?: (e: React.MouseEvent) => void;
}

export default function BrandTitle({ onClick }: BrandTitleProps) {
  return (
    <Title onClick={onClick}>
      <span className="css-text">CSS</span> in <span className="js-text">JS</span>
    </Title>
  );
}
