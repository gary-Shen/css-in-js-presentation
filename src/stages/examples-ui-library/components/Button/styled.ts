import { darken, lighten, math, transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { isDark } from '../../../../utils/hsp';
import defaultTheme from '../../theme';

export const cls = 'prefix-button';

const StyledButton = styled.button`
  cursor: pointer;
  ${({ color, theme, size = 'regular' }: any) => {
    const backgroundColor: string = color || theme.button.backgroundColor;
    const disabledColor = transparentize(0.5, theme.colors.black);
    const padding = theme.layouts.padding[size];
    const radius = theme.layouts.borderRadius[size];
    const lineHeight = theme.layouts.lineHeight[size];
    const fontSize = theme.layouts.fontSize[size];

    return css`
      border: 0;
      line-height: ${lineHeight};
      padding: ${padding} ${math(`${padding} * 2`)};
      border-radius: ${radius};
      transition: all 0.1s;
      font-size: ${fontSize};

      &.${cls}-solid:not([disabled]) {
        color: ${color ? (isDark(color) ? '#fff' : '#000') : theme.button.color};
        background-color: ${backgroundColor};

        &:hover {
          background-color: ${lighten(0.03, backgroundColor)};
        }

        &:focus {
          outline: ${theme.button.focusOutlineSize} solid ${transparentize(0.8, backgroundColor)};
        }

        &:active {
          background-color: ${darken(0.03, backgroundColor)};
        }
      }

      &.${cls}-ghost:not([disabled]) {
        color: ${backgroundColor};
        background-color: transparent;
        outline: ${theme.button.outlineSize} solid ${color};
        outline-offset: -${theme.button.outlineSize};

        &:hover {
          background-color: ${transparentize(0.9, backgroundColor)};
          outline: ${theme.button.outlineSize} solid ${backgroundColor};
        }

        &:focus {
          outline: ${theme.button.outlineSize} solid ${color};
        }

        &:active {
          background-color: ${transparentize(0.8, backgroundColor)};
        }
      }

      &.${cls}-outline:not([disabled]) {
        color: ${backgroundColor};
        background-color: transparent;

        &:hover {
          background-color: ${transparentize(0.9, backgroundColor)};
        }

        &:active,
        &:focus {
          background-color: ${transparentize(0.8, backgroundColor)};
        }
      }

      &.${cls}-link:not([disabled]) {
        color: ${backgroundColor};
        background-color: transparent;

        &:hover,
        &:focus {
          text-decoration: underline;
        }

        &:active {
          color: ${darken(0.1, backgroundColor)};
        }
      }

      &.${cls}-circle {
        width: ${lineHeight};
        height: ${lineHeight};
        padding: 0;
        text-align: center;
        border-radius: 100%;
      }

      &:disabled {
        cursor: not-allowed;
        &.${cls}-solid {
          color: ${darken(0.5, disabledColor)};
          background-color: ${transparentize(0.9, theme.colors.black)};
        }
        &.${cls}-ghost {
          color: ${darken(0.5, disabledColor)};
          background-color: transparent;
          outline: ${theme.button.outlineSize} solid ${disabledColor};
          outline-offset: -${theme.button.outlineSize};
        }
        &.${cls}-link, &.${cls}-outline {
          color: ${disabledColor};
          background-color: transparent;
        }
      }
    `;
  }}
`;

export default StyledButton;

StyledButton.defaultProps = {
  theme: defaultTheme,
};
