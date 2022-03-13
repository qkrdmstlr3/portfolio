/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import CarouselExp from '.';

function Example({ children }) {
  return <div>{children}</div>;
}

describe('Component/UI/CarouselExp', () => {
  const items = ['c', 'a', 'r', 'o', 'u', 's', 'e', 'l'];
  const carouselIndex = 0;

  it('rendering test', () => {
    const component = render(
      <CarouselExp items={items} second={2} carouselIndex={carouselIndex} Component={Example} />
    );

    const selected = component.container.querySelector('.slick-current');
    expect(selected.classList).toContain('slick-active');
    expect(selected.ariaHidden).toBeFalsy();
    expect(selected.textContent).toBe(items[carouselIndex]);
  });
});
