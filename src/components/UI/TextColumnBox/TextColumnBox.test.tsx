/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import TextColumnBox from '.';

describe('Component/UI/TextColumnBox', () => {
  it('rendering test', () => {
    const component = render(<TextColumnBox>text</TextColumnBox>);
    component.getByText('text');
  });
});
