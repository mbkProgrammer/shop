import { ThemeProvider } from '@emotion/react';
import React, { useState } from 'react';
import renderer from 'react-test-renderer';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Quantity from './Quantity';
import theme from '../../configs/theme';
import mountWithTheme from '../../utils/mountWithTheme';

test('Input smaple', () => {
  const component = mountWithTheme(
    <Quantity />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
