import Performer from '../../components/Performer';

export default function Progress() {
  return (
    <Performer
      key={0}
      type="queuer"
      queue={[
        <h1 key={1}>👩🏻‍🎨</h1>,
        <h4 key={2}>👉 Plain css</h4>,
        <h4 key={3}>👉 BEM</h4>,
        <h4 key={4}>👉 Sass / Less / Stylus</h4>,
        <h4 key={5}>👉 CSS module</h4>,
        <h4 key={6}>⭐️ CSS in JS</h4>,
        <h4 key={7}>👉 Tailwind CSS</h4>,
      ]}
    />
  );
}
