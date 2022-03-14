import mountWithTheme from '../../utils/mountWithTheme';
import Card from './Card';

test('Card sample', () => {
  const component = mountWithTheme(
    <Card imageAlt="test" imageSrc="" path="./" price="10.0" title="test" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
