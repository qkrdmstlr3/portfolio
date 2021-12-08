import React from 'react';
import GlobalStyle from '../src/style/GlobalStyle';

export const decorators = [
  (Story) => (
    <>
      <Story />
      <GlobalStyle />
    </>
  ),
];
