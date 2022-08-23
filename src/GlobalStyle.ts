import { darken } from 'polished';
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

  @font-face {
    font-family: IBMPlexMono;
    src: url('src/assets/fonts/IBMPlexMono/IBMPlexMono-Regular.woff2') format('woff2');
  }

  @font-face {
    font-family: IBMPlexMonoItalic;
    src: url('src/assets/fonts/IBMPlexMono/IBMPlexMono-Italic.woff2') format('woff2');
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
    a {
      position: relative;
      display: inline-block;
      color: ${theme.brand.cssTextColor};
      text-decoration: none;

      &:after {
        bottom: 0;
        display: block;
        width: 100%;
        height: 2px;
        background-color: ${theme.brand.cssTextColor};
        content: ' ';
      }

      &:hover {
        color: ${darken(0.1, theme.brand.cssTextColor)};

        &:after {
          background-color: ${darken(0.1, theme.brand.cssTextColor)};
        }
      }
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


  pre {
    font-family: 'IBMPlexMono';
  }

  code {
    font-family: 'IBMPlexMono';
  }

  .linenumber {
    color: rgba(255, 255, 255, 0.2)!important;
    min-width: 1.25em!important;
  }

  .imports, .module {
    font-family: 'IBMPlexMonoItalic'
  }
`;

GlobalStyle.defaultProps = {
  theme: ukraine,
};

export default GlobalStyle;
