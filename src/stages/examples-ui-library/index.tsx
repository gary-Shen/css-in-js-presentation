import styled, { ThemeProvider, useTheme } from 'styled-components';

import Performer from '../../components/Performer';
import Button from './components/Button';
import StyledButton from './components/Button/styled';
import theme from './theme';

const Wrapper = styled(Performer)`
  align-items: center;

  h1 {
    margin-bottom: 5rem;
  }

  ${StyledButton} {
    margin-right: 1rem;
  }
`;

export default function UIExample() {
  const appTheme = useTheme();
  // @ts-ignore
  const buttonColor = appTheme.brand.cssTextColor;

  return (
    <ThemeProvider theme={theme}>
      <Wrapper
        queue={[
          <h1 key={0}>styled-components + polished</h1>,
          <div key={1}>
            <Button color={buttonColor} size="small">
              Small Button
            </Button>
            <Button color={buttonColor}>Regular Button</Button>
            <Button color={buttonColor} size="large">
              Large Button
            </Button>
          </div>,
        ]}
        type="queuer"
      />
    </ThemeProvider>
  );
}
