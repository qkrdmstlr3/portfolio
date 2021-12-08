import React from 'react';
import HomePageTemplate from '.';
import Layout from '../../Layout';

export default {
  title: 'Template/HomePageTemplate',
  component: HomePageTemplate,
};

export const homePageTemplate = () => (
  <Layout uri="/">
    <HomePageTemplate />
  </Layout>
);
