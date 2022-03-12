import { ThemeProvider } from '@emotion/react';
import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import Input from './Input';
import theme from '../../configs/theme';
import mountWithTheme from '../../utils/mountWithTheme';

test('Input smaple', () => {
  const component = mountWithTheme(
    <Input placeholder="Input test" />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
test('Input smaple onChange', () => {
  let variable = '';
  const { getByText } = render(
    <ThemeProvider theme={theme}>
      <Input varaint="contained" onClick={() => { variable = 1; }}>Facebook</Input>
    </ThemeProvider>,
  );

  fireEvent.click(getByText(/Facebook/));
  expect(variable).toBe(2);
});
