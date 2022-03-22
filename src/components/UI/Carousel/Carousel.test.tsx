/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Carousel from '.';

describe('Component/UI/Carousel', () => {
  const items = [
    { id: 1, text: 'a' },
    { id: 2, text: 'b' },
    { id: 3, text: 'c' },
  ];
  const carouselIndex = 0;

  it('rendering test', async () => {
    const component = render(<Carousel items={items} second={1} carouselIndex={carouselIndex} />);

    component.getByText('a');
    component.getByText('b');
    expect(component.getAllByText('c')).toHaveLength(2);
  });
});
