import styled from 'styled-components';

import Performer from '../../components/Performer';

const StyledIframe = styled.iframe`
  width: 80vw;
  border: 0;
  height: 60vh;
  border-radius: 1rem;
  box-shadow: 0px 10px 0 rgb(0 0 0 / 5%);
`;

export default function Trends() {
  return (
    <Performer
      queue={[
        <div key={1}>
          <StyledIframe src="https://npmtrends.com/aphrodite-vs-emotion-vs-jss-vs-radium-vs-styled-components-vs-linaria" />
        </div>,
      ]}
      type="queuer"
    />
  );
}
