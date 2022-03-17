import React from 'react';
import PortfolioBox, { PortfolioInfoType } from '.';

export default {
  title: 'Component/PortfolioBox',
  component: PortfolioBox,
};

const portfolio: PortfolioInfoType = {
  id: 1,
  startDate: new Date('2022-01'),
  endDate: new Date('2022-02'),
  explanation: 'portfolio',
};
export const portfolioBox = () => <PortfolioBox>{portfolio}</PortfolioBox>;
