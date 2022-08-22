import styled from 'styled-components';

import Performer from '../../components/Performer';

const StyledIframe = styled.iframe`
  width: 80vw;
  border: 0;
  height: 498px;
  border-radius: 0;
`;

export default function CanIUseCSSVariables() {
  return (
    <Performer
      queue={[
        <div key={1}>
          <StyledIframe src="https://caniuse.bitsofco.de/embed/index.html?feat=css-variables&amp;periods=future_1,current,past_1,past_2&amp;accessible-colours=false&amp;image-base=none" />
        </div>,
      ]}
      type="queuer"
    />
  );
}
