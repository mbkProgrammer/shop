import { ThemeProvider } from '@emotion/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Button from './Button';
import theme from '../../configs/theme';
import mountWithTheme from '../../utils/mountWithTheme';

test('Button smaple', () => {
  const component = mountWithTheme(
    <Button>Facebook</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Button smaple contained', () => {
  const component = mountWithTheme(
    <Button varaint="contained">Facebook</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Button smaple big', () => {
  const component = mountWithTheme(
    <Button size="big">Facebook</Button>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Button smaple onClick', () => {
  let variable = 1;
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Button varaint="contained" onClick={() => { variable += 1; }}>Facebook</Button>
    </ThemeProvider>,
  );

  fireEvent.click(getByText(/Facebook/));
  expect(variable).toBe(2);
});
