import Performer from '../../components/Performer';

const queue = [
  <h1 key={1}>什么是 CSS in JS ？</h1>,
  <div key={2} style={{ textAlign: 'center' }}>
    <h2>把 css 样式写在 js 文件里</h2>
    <h2>把它们当 js 模块对待</h2>
  </div>,
];

export default function What() {
  return <Performer queue={queue} type="replacer" />;
}
