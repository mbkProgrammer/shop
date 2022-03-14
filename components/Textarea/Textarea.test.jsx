import { ThemeProvider } from '@emotion/react';
import React from 'react';
import renderer from 'react-test-renderer';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Textarea from './Textarea';
import theme from '../../configs/theme';
import mountWithTheme from '../../utils/mountWithTheme';

test('Textarea smaple', () => {
  const component = mountWithTheme(
    <Textarea placeholder="Textarea test" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Textarea smaple type password', () => {
  const component = mountWithTheme(
    <Textarea placeholder="Textarea test" type="password" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Textarea smaple size big', () => {
  const component = mountWithTheme(
    <Textarea placeholder="Textarea test" size="big" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Textarea smaple onChange', () => {
  let variable = '';
  const { getByTestId } = render(
    <ThemeProvider theme={theme}>
      <Textarea varaint="contained" onChange={(e) => { variable += e.target.value; }} />
    </ThemeProvider>,
  );

  const textarea = screen.getByTestId('Textarea--test');
  fireEvent.change(textarea, { target: { value: 'a' } });
  expect(variable).toBe('a');
});
