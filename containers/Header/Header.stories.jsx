import React from 'react';
import Header from './Header';

export default { title: 'containers/Header' };
export const HeaderTest = () => <Header />;

HeaderTest.story = {
  parameters: {
    nextRouter: {
      path: '/',
      asPath: '/',
      query: {
        id: '',
      },
    },
  },
};
