import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Performer from '../../components/Performer';

const exampleCode1 = `import styled from 'styled-components';

export const Title = styled.div\`
  display: inline-block;
  padding: 1rem 2rem;
  border: 0.5rem solid \${({ theme }) => theme.brand.borderColor};
  font-size: 3rem;
\`;`;

const exampleCode2 = `import styled from 'styled-components';

import { Title } from '../../components/BrandTitle/styled';

export const Wrapper = styled.section\` // 标签模板字符串
  height: 100vh;
  display: flex;
  flex-direction: column;

  \${Title} { // 如果删除了BrandTitle模块，此模块将报错，提醒删除此处样式模块
    color: #666;
    font-size: 1.8rem;

    &:hover {
      color: #999;
    }
  }
  \`;`;

const queue = [
  <SyntaxHighlighter key={0} language="javascript" style={a11yDark} showLineNumbers>
    {exampleCode1}
  </SyntaxHighlighter>,
  <SyntaxHighlighter key={1} language="javascript" style={a11yDark} showLineNumbers>
    {exampleCode2}
  </SyntaxHighlighter>,
];

export default function Showcase() {
  return <Performer queue={queue} type="queuer" />;
}
