import { useCallback, useState } from 'react';
import styled, { css, ThemeProvider } from 'styled-components';

import Performer from '../../components/Performer';
import Button from '../examples-ui-library/components/Button';
import theme from '../examples-ui-library/theme';
import CyberButton from './components/Button';
import { CyberGlobalStyle } from './components/Button/styled';

const StyledWall = styled.div`
  width: 40rem;
  height: 20rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  margin-top: 1rem;
`;

interface ModeWall {
  mode: 'light' | 'dark';
}

const ModeStyledWall = styled(StyledWall)`
  ${(props: ModeWall) => {
    switch (props.mode) {
      case 'dark':
        return css`
          background: linear-gradient(90deg, #510047 70%, #3c0034 70%), #3c0034;
          color: white;
        `;
      default:
        return css`
          background: linear-gradient(90deg, #f5ed00 70%, #e6de00 70%), #fff700;
          color: black;
        `;
    }
  }}
`;

const PerformerWrapper = styled(Performer)`
  text-align: center;
`;

function Wall({ mode }: ModeWall) {
  return (
    <ModeStyledWall mode={mode}>
      <CyberButton mode={mode}>Cyber Button</CyberButton>
    </ModeStyledWall>
  );
}

export default function ModeExample() {
  const [mode, toggleMode] = useState<ModeWall['mode']>('dark');
  const handleToggleMode = useCallback(() => {
    toggleMode(mode === 'light' ? 'dark' : 'light');
  }, [mode]);

  return (
    <ThemeProvider theme={theme}>
      <CyberGlobalStyle />
      <PerformerWrapper
        queue={[
          <div key={0}>
            <Button onClick={handleToggleMode}>Toggle mode to {mode === 'dark' ? '“light”' : '“dark”'}</Button>
            <Wall mode={mode} />
          </div>,
        ]}
        type="queuer"
      />
    </ThemeProvider>
  );
}
