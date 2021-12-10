import React from 'react';
import PortfolioPageTemplate from '.';
import Layout from '../../Layout';
import { portfolioList } from '../../../constants';

export default {
  title: 'Template/PortfolioPageTemplate',
  component: PortfolioPageTemplate,
};

export const portfolioPageTemplate = () => (
  <Layout uri="/portfolio">
    <PortfolioPageTemplate portfolioList={portfolioList} />
  </Layout>
);
