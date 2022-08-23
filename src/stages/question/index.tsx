import Performer from '../../components/Performer';

export default function Question() {
  return (
    <Performer
      queue={[
        <h1 key={1}>差异</h1>,
        <h4 key={2}>🚩 是否有 runtime</h4>,
        <h5 key={3}>styled-components / emotion / jss 和 linaria</h5>,
        <h4 key={4}>🚩 inline 或 css selector</h4>,
        <h5 key={3}>styled-components / emotion / jss 和 radium（已经不维护）</h5>,
      ]}
      type="queuer"
    />
  );
}
