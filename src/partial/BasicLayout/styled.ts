import { transparentize } from 'polished';
import styled, { css } from 'styled-components';

import { StyledTitle } from '../../components/Select/styled';
import { ukraine } from '../../themes';

export const Wrapper = styled.section.withConfig({
  // displayName: 'ThisIsCustomDisplayNameOfComponent',
  componentId: 'im-radom-id',
})`
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;

  ${({ theme }) => css`
    color: ${theme.color};
    background-color: ${theme.backgroundColor};
  `}

  .header {
    display: flex;
    justify-content: space-between;
    padding: 3rem;
  }

  .content {
    display: flex;
    flex-grow: 1;
    align-items: center;
    justify-content: center;
    padding: 0 3rem 6rem;
  }

  .toolbar {
    position: fixed;
    bottom: 0;
    z-index: 1;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    box-sizing: border-box;
    width: 100%;
    padding: 0 1rem;
    background-image: linear-gradient(0deg, rgb(0 0 0 / 12%) 10%, transparent);
    opacity: 0;
    transition: opacity 0.3s;

    &:hover {
      opacity: 1;
    }
  }

  ${StyledTitle} {
    color: ${({ theme }) => transparentize(0.6, theme.middleGray)};
    font-size: 1.8rem;

    &:hover {
      color: ${({ theme }) => transparentize(0.2, theme.middleGray)};
    }
  }
`;

Wrapper.defaultProps = {
  theme: ukraine,
};

export const StyledIcon = styled.span`
  font-size: 2rem;
  display: inline-block;
  cursor: pointer;
  color: ${({ theme }) => transparentize(0.6, theme.middleGray)};

  &:hover {
    color: ${({ theme }) => transparentize(0.2, theme.middleGray)};
  }

  .arrows & {
    cursor: default;
  }
`;

StyledIcon.defaultProps = {
  theme: ukraine,
};
