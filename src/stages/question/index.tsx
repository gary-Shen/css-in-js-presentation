import Performer from '../../components/Performer';

export default function Question() {
  return (
    <Performer
      queue={[
        <h1 key={1}>疑问</h1>,
        <h4 key={2}>🤔 如何选择？</h4>,
        <h5 key={3}>🤓 对首屏加载有体验要求不建议使用</h5>,
      ]}
      type="queuer"
    />
  );
}
