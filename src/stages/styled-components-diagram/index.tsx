import styled from 'styled-components';

import Performer from '../../components/Performer';

const StyledIframe = styled.iframe`
  width: 500px;
  border: 0;
  height: 420px;
  border-radius: 1rem;
  box-shadow: 0px 10px 0 rgb(0 0 0 / 5%);
`;

export default function StyledComponentsDiagram() {
  return (
    <Performer
      queue={[
        <div key={1}>
          <StyledIframe src="https://viewer.diagrams.net/?tags=%7B%7D&highlight=0000ff&edit=_blank&layers=1&nav=1#G1KbMenCP8gjnHJEKSSbE7YeheLjbvTbhv" />
        </div>,
      ]}
      type="queuer"
    />
  );
}
