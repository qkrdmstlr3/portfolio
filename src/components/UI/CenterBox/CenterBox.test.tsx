/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import CenterBox from '.';

describe('Component/UI/CenterBox', () => {
  it('rendering test', () => {
    const component = render(
      <CenterBox>
        <>text</>
      </CenterBox>
    );
    component.getByText('text');
  });
});
