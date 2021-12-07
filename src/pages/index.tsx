import React from 'react';
import Layout from '../components/Layout';
import HomePageTemplate from '../components/template/HomePage';

function IndexPage() {
  return (
    <Layout backgroundColor="#35425E" isNavTop={false}>
      <HomePageTemplate />
    </Layout>
  );
}

export default IndexPage;
