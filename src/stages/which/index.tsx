import Performer from '../../components/Performer';

export default function Which() {
  return (
    <Performer
      key={0}
      type="queuer"
      queue={[
        <h1 key={1}>δΈ»ζ΅ζΉζ‘</h1>,
        <h4 key={2}>π styled-components</h4>,
        <h4 key={3}>π©βπ€ @emotion/react</h4>,
        <h4 key={4}>
          <img style={{ width: '2rem', verticalAlign: 'middle' }} src="https://cssinjs.org/images/favicon.ico" /> jss
        </h4>,
      ]}
    />
  );
}
