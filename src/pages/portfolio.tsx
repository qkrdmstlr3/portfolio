import React from 'react';
import PortfolioPageTemplate from '../components/template/PortfolioPage';
import { portfolioList } from '../constants';

function Portfolio() {
  return <PortfolioPageTemplate portfolioList={portfolioList} />;
}

export default Portfolio;
