import Performer from '../../components/Performer';

export default function Reference() {
  return (
    <Performer
      key={0}
      type="queuer"
      queue={[
        <h1 key={1}>相关资料</h1>,
        <h5 key={2}>
          <a href="https://github.com/gary-Shen/css-in-js-presentation.git" target="_blank" rel="noreferrer">
            ⛓ 本讲演代码
          </a>
        </h5>,
        <h5 key={3}>
          <a href="https://codepen.io/jh3y/pen/PoGbxLp" target="_blank" rel="noreferrer">
            ⛓ 赛博朋克按钮
          </a>
        </h5>,
      ]}
    />
  );
}
