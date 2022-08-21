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

  \${Title} {
    color: #666;
    font-size: 1.8rem;

    &:hover {
      color: #999;
    }
  }
  \`;`;

const queue = [
  <SyntaxHighlighter language="javascript" style={a11yDark} showLineNumbers>
    {exampleCode1}
  </SyntaxHighlighter>,
  <SyntaxHighlighter language="javascript" style={a11yDark} showLineNumbers>
    {exampleCode2}
  </SyntaxHighlighter>,
  <iframe
    frameBorder="0"
    style={{ width: '100%', height: '303px' }}
    src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1KbMenCP8gjnHJEKSSbE7YeheLjbvTbhv"
  />,
].map((item, index) => React.cloneElement(item, { key: index }));

export default function Showcase() {
  return <Performer queue={queue} type="queuer" />;
}
