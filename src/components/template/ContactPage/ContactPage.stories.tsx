import React from 'react';
import ContactPageTemplate from '.';
import Layout from '../../Layout';

export default {
  title: 'Template/ContactPageTemplate',
  component: ContactPageTemplate,
};

export const contactPageTemplate = () => (
  <Layout uri="/contact">
    <ContactPageTemplate />
  </Layout>
);
