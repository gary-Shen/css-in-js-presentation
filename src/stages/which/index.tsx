import Performer from '../../components/Performer';

export default function Which() {
  return (
    <Performer
      key={0}
      type="queuer"
      queue={[
        <h1 key={1}>主流方案</h1>,
        <h4 key={2}>💅 styled-components</h4>,
        <h4 key={3}>👩‍🎤 @emotion/react</h4>,
        <h4 key={4}>
          <img style={{ width: '2rem', verticalAlign: 'middle' }} src="https://cssinjs.org/images/favicon.ico" /> jss
        </h4>,
      ]}
    />
  );
}
