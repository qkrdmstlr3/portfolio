/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render } from '@testing-library/react';
import PortfolioBox from '.';
import { portfolios } from '../../../constants/portfolio';

describe('Component/UI/PortfolioBox', () => {
  const portfolio = portfolios[0];

  it('rendering test', () => {
    const component = render(<PortfolioBox>{{ id: 1, ...portfolio }}</PortfolioBox>);
    component.getByText(portfolio.explanation);
    component.getByText(
      `${portfolio.startDate.toISOString().slice(0, 7)} / ${portfolio.endDate.toISOString().slice(0, 7)}`
    );
  });
});
