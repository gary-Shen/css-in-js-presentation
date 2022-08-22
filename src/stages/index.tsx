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
    name: 'Practice',
  },
  {
    path: '/examples-ui-library',
    component: <UIExample />,
    name: 'Practice',
  },
  {
    path: '/examples-mode',
    component: <ModeExample />,
    name: 'Practice',
  },
  {
    path: '/reference',
    component: <Reference />,
    name: 'Practice',
  },
];

export default stages;
