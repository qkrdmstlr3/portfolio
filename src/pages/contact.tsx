import React from 'react';
import ContactPageTemplate from '../components/template/ContactPage';
import { infoList } from '../constants';

function ContactPage() {
  return <ContactPageTemplate infoList={infoList} />;
}

export default ContactPage;
