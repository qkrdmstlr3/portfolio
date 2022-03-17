/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import Carousel from '.';

function Example({ children }) {
  return <div>{children}</div>;
}

describe('Component/UI/Carousel', () => {
  const items = [
    { id: 1, text: 'a' },
    { id: 2, text: 'b' },
    { id: 3, text: 'c' },
  ];
  const carouselIndex = 0;

  it('rendering test', () => {
    const component = render(<Carousel items={items} second={2} carouselIndex={carouselIndex} Component={Example} />);

    const selected = component.container.querySelector('.slick-current');
    expect(selected.classList).toContain('slick-active');
    expect(selected.ariaHidden).toBeFalsy();
    expect(selected.textContent).toBe(items[carouselIndex]);
  });
});
