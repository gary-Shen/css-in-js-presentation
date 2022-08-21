import { createGlobalStyle, css } from 'styled-components';

import { ukraine } from './themes';
import type { ThemeObject } from './themes/themeTypes';

const GlobalStyle = createGlobalStyle`
  body, html {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: DancingScript;
    src: url('src/assets/fonts/DancingScript/DancingScript-Regular.woff') format('woff');
  }

  ${({ theme }: { theme: ThemeObject }) => css`
    body {
      color: ${theme.color};
      background-color: ${theme.backgroundColor};
    }
    ::selection {
      color: #fff;
      background-color: ${theme.brand.cssTextColor};
    }
  `}

  h1 {
    font-size: 5rem;
    text-align: center;
    margin: 0;
  }

  h2 {
    font-size: 4rem;
    margin-bottom: 0;
  }

  h3 {
    font-size: 3rem;
    margin-bottom: 0;
  }

  h4 {
    font-size: 2rem;
    margin-bottom: 0;
  }

  h5 {
    font-size: 1rem;
    margin-bottom: 0;
  }
`;

GlobalStyle.defaultProps = {
  theme: ukraine,
};

export default GlobalStyle;
