import mountWithTheme from '../../utils/mountWithTheme';
import Typography from './Typography';

test('Typography smaple', () => {
  const component = mountWithTheme(
    <Typography variant="h1">Hi Mbk</Typography>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Typography smaple', () => {
  const component = mountWithTheme(
    <Typography variant="h2">Hi Mbk</Typography>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Typography smaple', () => {
  const component = mountWithTheme(
    <Typography variant="h3">Hi Mbk</Typography>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Typography smaple', () => {
  const component = mountWithTheme(
    <Typography variant="h4">Hi Mbk</Typography>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Typography smaple', () => {
  const component = mountWithTheme(
    <Typography variant="h5">Hi Mbk</Typography>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Typography smaple', () => {
  const component = mountWithTheme(
    <Typography variant="h6">Hi Mbk</Typography>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Typography smaple', () => {
  const component = mountWithTheme(
    <Typography variant="body1">Hi Mbk</Typography>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Typography smaple', () => {
  const component = mountWithTheme(
    <Typography variant="body2">Hi Mbk</Typography>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
