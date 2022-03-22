/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import CenterBox from '.';

describe('Component/UI/CenterBox', () => {
  const data = { id: 1, text: 'centerbox' };

  it('rendering test', () => {
    const component = render(<CenterBox>{data}</CenterBox>);
    component.getByText(data.text);
  });
});
