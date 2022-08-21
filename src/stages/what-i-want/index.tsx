import Performer from '../../components/Performer';

const queue = [
  <h1 key={1}>🎯</h1>,
  <h4>🙅🏻 不想组件使用者手动引入 css，也不想安装插件来支持</h4>,
  <h4>🙅🏻 不想引入 UI（antd） 库</h4>,
  <h4>🤩 简单的主题定制</h4>,
];

export default function WhatIWant() {
  return <Performer queue={queue} type="queuer" />;
}
