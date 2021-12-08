import React from 'react';
import ContactPageTemplate from '.';
import { infoList } from '../../../constants';
import Layout from '../../Layout';

export default {
  title: 'Template/ContactPageTemplate',
  component: ContactPageTemplate,
};

export const contactPageTemplate = () => (
  <Layout uri="/contact">
    <ContactPageTemplate infoList={infoList} />
  </Layout>
);
