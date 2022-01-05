/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import PortfolioBox, { PortfolioInfoType } from '.';

describe('Component/UI/PortfolioBox', () => {
  const portfolio: PortfolioInfoType = {
    startDate: new Date('2022-01'),
    endDate: new Date('2022-02'),
    explanation: 'explanation',
  };

  it('rendering test', () => {
    const component = render(<PortfolioBox>{portfolio}</PortfolioBox>);
    component.getByText(portfolio.explanation);
    component.getByText(
      `${portfolio.startDate.toISOString().slice(0, 9)} / ${portfolio.endDate.toISOString().slice(0, 9)}`
    );
  });
});
