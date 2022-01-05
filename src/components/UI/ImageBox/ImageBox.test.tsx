/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import ImageBox from '.';

describe('Component/UI/ImageBox', () => {
  it('rendering test', () => {
    const imgLink = 'https://image.comm';
    const component = render(<ImageBox>{imgLink}</ImageBox>);

    const img = component.getByRole('img');
    expect(img).toHaveAttribute('src', imgLink);
  });
});
