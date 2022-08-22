import { darken } from 'polished';
import styled, { createGlobalStyle, css, keyframes } from 'styled-components';

import type { ButtonProps } from '.';

/**
 * cyber button 大部分样式代码来自 https://codepen.io/jh3y/pen/PoGbxLp
 */
const glitch = keyframes`
  0% {
    clip-path: var(--clip-one);
  }
  2%, 8% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  6% {
    clip-path: var(--clip-two);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  9% {
    clip-path: var(--clip-two);
    transform: translate(0, 0);
  }
  10% {
    clip-path: var(--clip-three);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  13% {
    clip-path: var(--clip-three);
    transform: translate(0, 0);
  }
  14%, 21% {
    clip-path: var(--clip-four);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  25% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  30% {
    clip-path: var(--clip-five);
    transform: translate(calc(var(--shimmy-distance) * -1%), 0);
  }
  35%, 45% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * -1%));
  }
  40% {
    clip-path: var(--clip-six);
    transform: translate(calc(var(--shimmy-distance) * 1%));
  }
  50% {
    clip-path: var(--clip-six);
    transform: translate(0, 0);
  }
  55% {
    clip-path: var(--clip-seven);
    transform: translate(calc(var(--shimmy-distance) * 1%), 0);
  }
  60% {
    clip-path: var(--clip-seven);
    transform: translate(0, 0);
  }
  31%, 61%, 100% {
    clip-path: var(--clip-four);
  }
`;

const CyberStyledButton = styled.button`
  ${({ mode }: ButtonProps) => {
    const primaryColor = mode === 'dark' ? '#ff005d' : '#0069ff';
    const primaryShadowColor = '#00faff';
    const secondaryShadowColor = '#f5f53d';

    return css`
      --primary: ${primaryColor};
      --shadow-primary: ${primaryShadowColor};
      --shadow-secondary: ${secondaryShadowColor};

      color: #fff;

      .tag {
        color: ${mode === 'dark' ? '#fff' : '#000'};
      }

      &:hover {
        --primary: ${darken(0.1, primaryColor)};
      }

      &:active {
        --primary: ${darken(0.2, primaryColor)};
      }
    `;
  }}

  --color: hsl(0, 0%, 100%);
  --font-size: 26px;
  --label-size: 9px;
  --clip: polygon(0 0, 100% 0, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 70%);
  --border: 4px;
  --shimmy-distance: 5;
  --clip-one: polygon(0 2%, 100% 2%, 100% 95%, 95% 95%, 95% 90%, 85% 90%, 85% 95%, 8% 95%, 0 70%);
  --clip-two: polygon(0 78%, 100% 78%, 100% 100%, 95% 100%, 95% 90%, 85% 90%, 85% 100%, 8% 100%, 0 78%);
  --clip-three: polygon(0 44%, 100% 44%, 100% 54%, 95% 54%, 95% 54%, 85% 54%, 85% 54%, 8% 54%, 0 54%);
  --clip-four: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-five: polygon(0 0, 100% 0, 100% 0, 95% 0, 95% 0, 85% 0, 85% 0, 8% 0, 0 0);
  --clip-six: polygon(0 40%, 100% 40%, 100% 85%, 95% 85%, 95% 85%, 85% 85%, 85% 85%, 8% 85%, 0 70%);
  --clip-seven: polygon(0 63%, 100% 63%, 100% 80%, 95% 80%, 95% 80%, 85% 80%, 85% 80%, 8% 80%, 0 70%);

  font-family: 'Cyber', sans-serif;
  cursor: pointer;
  background: transparent;
  text-transform: uppercase;
  font-size: var(--font-size);
  outline: transparent;
  letter-spacing: 2px;
  position: relative;
  font-weight: 700;
  border: 0;
  min-width: 300px;
  height: 75px;
  line-height: 75px;
  transition: background 0.2s;

  &:hover {
    .glitch {
      z-index: 2;
      display: block;
    }
  }

  &:before,
  &:after {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1;
    content: '';
    clip-path: var(--clip);
  }

  &:before {
    background: var(--shadow-primary);
    transform: translate(var(--border), 0);
  }

  &:after {
    background: var(--primary);
  }

  .inner {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 2;
  }

  .tag {
    position: absolute;
    right: 5%;
    bottom: -5%;
    padding: 1px 4px;
    font-weight: normal;
    font-size: var(--label-size);
    line-height: 1;
    letter-spacing: 1px;
  }

  .glitch {
    position: absolute;
    top: calc(var(--border) * -1);
    right: calc(var(--border) * -1);
    bottom: calc(var(--border) * -1);
    left: calc(var(--border) * -1);
    display: none;
    text-shadow: 2px 2px var(--shadow-primary), -2px -2px var(--shadow-secondary);
    background: var(--shadow-primary);
    animation: ${glitch} 2s infinite;
    clip-path: var(--clip);

    &:before {
      position: absolute;
      top: calc(var(--border) * 1);
      right: calc(var(--border) * 1);
      bottom: calc(var(--border) * 1);
      left: calc(var(--border) * 1);
      z-index: -1;
      background: var(--primary);
      content: '';
      clip-path: var(--clip);
    }
  }
`;

export const CyberGlobalStyle = createGlobalStyle`
  @font-face {
    font-family: Cyber;
    src: url("https://assets.codepen.io/605876/Blender-Pro-Bold.otf");
    font-display: swap;
  }
`;

export default CyberStyledButton;
