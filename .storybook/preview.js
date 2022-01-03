import React from 'react';
import Helmet from '../src/lib/Helmet';
import GlobalStyle from '../src/style/GlobalStyle';

export const decorators = [
  (Story) => (
    <>
      <Helmet />
      <Story />
      <GlobalStyle />
    </>
  ),
];
