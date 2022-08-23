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
        <h5 key={4}>
          <a href="https://github.com/callstack/linaria/blob/master/docs/HOW_IT_WORKS.md#how-it-works" target="_blank" rel="noreferrer">
            ⛓ linaria 的工作原理
          </a>
        </h5>,
        <h5 key={5}>
          <a href="https://www.joshwcomeau.com/css/styled-components/" target="_blank" rel="noreferrer">
            ⛓ The styled-components Happy Path
          </a>
        </h5>,
        <h5 key={5}>
          <a href="https://styled-components.com/ecosystem" target="_blank" rel="noreferrer">
            ⛓ styled-components 生态
          </a>
        </h5>,
        <h5 key={6}>
          <a href="https://github.com/stereobooster/css-in-js-101" target="_blank" rel="noreferrer">
            ⛓ CSS in JS 101
          </a>
        </h5>,
        <h5 key={7}>
        <a href="https://stylis.js.org/" target="_blank" rel="noreferrer">
          ⛓ CSS 预处理 → stylis
        </a>
      </h5>
      ]}
    />
  );
}
