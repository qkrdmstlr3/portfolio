/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Seventh from '.';

const changeScreenMock = jest.fn();

describe('Component/Container/BottomContainer/Seventh', () => {
  it('rendering test', () => {
    const component = render(<Seventh changeScreen={changeScreenMock} />);
    component.getByText('skill');
  });

  it('change screen', () => {
    const component = render(<Seventh changeScreen={changeScreenMock} />);
    const seventhTop = component.getByLabelText('seventh-top');
    fireEvent.click(seventhTop);
    expect(changeScreenMock).toHaveBeenCalledTimes(1);
    expect(changeScreenMock).toHaveBeenCalledWith('skill');
  });
});
