import React from 'react';

import CssVariable from './bonus-css-variables-01';
import CanIUseCSSVariables from './bonus-css-variables-02';
import Difference from './difference';
import ModeExample from './examples-mode';
import UIExample from './examples-ui-library';
import Highlight from './highlight';
import Progress from './progress';
import Question from './question';
import Reference from './reference';
import Showcase from './showcase';
import StyledComponentsDiagram from './styled-components-diagram';
import Trends from './trends';
import What from './what';
import WhatIWant from './what-i-want';
import Which from './which';

interface RouterItem {
  path: string;
  // eslint-disable-next-line no-undef
  component: JSX.Element | React.ComponentType<any>;
  name: string;
}

export type RouterMapping = Record<string, RouterItem>;

const stages: RouterItem[] = [
  {
    path: '/what-i-want',
    component: <WhatIWant />,
    name: 'Practice',
  },
  {
    path: '/what',
    component: <What />,
    name: 'What is CSS in JS?',
  },
  {
    path: '/progress',
    component: <Progress />,
    name: 'Practice',
  },
  {
    path: '/which',
    component: <Which />,
    name: 'Popular libraries',
  },
  {
    path: '/trends',
    component: <Trends />,
    name: 'Trends',
  },
  {
    path: '/difference',
    component: <Difference />,
    name: 'Difference',
  },
  {
    path: '/showcase',
    component: <Showcase />,
    name: 'Showcase',
  },
  {
    path: '/styled-components-diagram',
    component: <StyledComponentsDiagram />,
    name: 'styled-components diagram',
  },
  {
    path: '/examples-ui-library',
    component: <UIExample />,
    name: 'UI library',
  },
  {
    path: '/examples-mode',
    component: <ModeExample />,
    name: 'examples mode',
  },
  {
    path: '/highlights',
    component: <Highlight />,
    name: 'Highlights',
  },
  {
    path: '/css-variables',
    component: <CssVariable />,
    name: 'CSS Variables',
  },
  {
    path: '/can-i-use-css-variables',
    component: <CanIUseCSSVariables />,
    name: 'can i use css variables',
  },
  {
    path: '/questions',
    component: <Question />,
    name: 'Questions',
  },
  {
    path: '/reference',
    component: <Reference />,
    name: 'Reference',
  },
];

export default stages;
