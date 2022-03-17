/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import TextColumnBox from '.';

describe('Component/UI/TextColumnBox', () => {
  const data = {
    id: 1,
    text: 'text',
  };

  it('rendering test', () => {
    const component = render(<TextColumnBox>{data}</TextColumnBox>);
    component.getByText('text');
  });
});
