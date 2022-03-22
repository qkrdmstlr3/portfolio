/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import ImageBox from '.';

describe('Component/UI/ImageBox', () => {
  const data = { id: 1, src: 'https://techstack-generator.vercel.app/react-icon.svg' };

  it('rendering test', () => {
    const component = render(<ImageBox>{data}</ImageBox>);

    const img = component.getByRole('img');
    expect(img).toHaveAttribute('src', data.src);
  });
});
