import Performer from '../../components/Performer';

export default function Reference() {
  return (
    <Performer
      key={0}
      type="queuer"
      queue={[
        <h1 key={1}>相关资料</h1>,
        <h4 key={2}>
          <a href="https://github.com/gary-Shen/styled-components-presentation.git" target="_blank" rel="noreferrer">
            本讲演代码
          </a>
        </h4>,
      ]}
    />
  );
}
