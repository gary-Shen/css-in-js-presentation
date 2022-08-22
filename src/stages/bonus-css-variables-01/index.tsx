// import styled from 'styled-components';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { a11yDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Performer from '../../components/Performer';

const globalExample = `:root { /* 等同于html */
  --primary: #00bcd4;
}`;

const scopedExample = `.container {
  --height: 32px;

  height: var(--height);
  line-height: var(--height);

  color: var(--primary);
}`;

const defaultValueExample = `function Container({ color, children }) {
  return (
    <Wrapper
      style={{
        '--color': color,
      }}
    >
      {children}
    </Wrapper>
  )
}
const Wrapper = styled.div\`
  background-color: var(--color, var(--primary));
\`;`;

export default function Trends() {
  return (
    <Performer
      queue={[
        <h1 key={1}>
          CSS Variables
        </h1>,
        <h4 key={2}>全局变量</h4>,
        <SyntaxHighlighter key={3} language="css" style={a11yDark} showLineNumbers>
          {globalExample}
        </SyntaxHighlighter>,
        <h4 key={4}>局部变量</h4>,
        <SyntaxHighlighter key={5} language="css" style={a11yDark} showLineNumbers>
          {scopedExample}
        </SyntaxHighlighter>,
        <h4 key={5}>默认值</h4>,
        <SyntaxHighlighter key={6} language="javascript" style={a11yDark} showLineNumbers>
          {defaultValueExample}
        </SyntaxHighlighter>,
      ]}
      type="queuer"
    />
  );
}
