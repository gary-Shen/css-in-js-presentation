import React from 'react';

import Difference from './difference';
import ModeExample from './examples-mode';
import UIExample from './examples-ui-library';
import Progress from './progress';
import Reference from './reference';
import Showcase from './showcase';
import Trends from './trends';
import What from './what';
import WhatIWant from './what-i-want';
import Which from './which';
import CssVariable from './bonus-css-variables-01';
import CanIUseCSSVariables from './bonus-css-variables-02';

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
    path: '/difference',
    component: <Difference />,
    name: 'Difference',
  },
  {
    path: '/trends',
    component: <Trends />,
    name: 'Trends',
  },
  {
    path: '/showcase',
    component: <Showcase />,
    name: 'Showcase',
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
    path: '/reference',
    component: <Reference />,
    name: 'Reference',
  },
];

export default stages;
