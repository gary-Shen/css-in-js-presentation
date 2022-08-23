import Performer from '../../components/Performer';

export default function Highlight() {
  return (
    <Performer
      queue={[
        <h1 key={1}>重要</h1>,
        <h4 key={2}>🚩 styled 其他组件时，被 styled 的组件必须显示声明 className</h4>,
        <h4 key={3}>🚩 内层嵌套的组件必须是 styled 组件</h4>,
        <h4 key={4}>🚩 可以通过 API withConfig / attrs 自定义 className</h4>,
      ]}
      type="queuer"
    />
  );
}
