import styled, { css } from 'styled-components';

import { ukraine } from '../../themes';

export const StyledSelect = styled.div`
  position: relative;
`;

export const StyledMenu = styled.ul<{
  isOpen?: boolean;
}>`
  visibility: ${(props) => (props.isOpen ? 'visible' : 'hidden')};

  position: absolute;
  top: 100%;
  margin: 0;
  margin-top: 0.25rem;
  padding: 0.5rem 0;
  font-size: 1rem;
  line-height: 1.25rem;
  list-style: none;
  background-color: ${({ theme }) => theme.menu.backgroundColor};
  border-radius: 1rem;
  box-shadow: 0px 10px 0 rgb(0 0 0 / 5%);
  border: 0.25rem solid ${({ theme }) => theme.menu.activeColor};

  .active-icon {
    position: absolute;
    top: 50%;
    left: 0.75rem;
    color: ${({ theme }) => theme.menu.activeColor};
    font-size: 1.25rem;
    transform: translateY(-50%);
  }
`;

StyledMenu.defaultProps = {
  theme: ukraine,
};

export const StyledTitle = styled.div`
  cursor: pointer;
`;

export const StyledOption = styled.li<{ active?: boolean }>`
  ${({ theme, active }) => css`
    position: relative;
    padding: 0.5rem 2rem 0.5rem 2.5rem;
    color: ${active ? theme.menu.activeColor : theme.menu.fontColor};
    cursor: pointer;
    font-weight: ${active ? 'bold' : 'normal'};
  `}

  &:hover {
    color: #fff;
    background-color: ${({ theme }) => theme.menu.activeColor};

    .active-icon {
      color: #fff;
    }
  }
`;
