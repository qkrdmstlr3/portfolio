import React from 'react';
import AboutPageTemplate from '.';
import Layout from '../../Layout';
import { skillList } from '../../../constants';

export default {
  title: 'Template/AboutPageTemplate',
  component: AboutPageTemplate,
};

export const aboutPageTemplate = () => (
  <Layout uri="/about">
    <AboutPageTemplate skillLinkList={skillList} />
  </Layout>
);
