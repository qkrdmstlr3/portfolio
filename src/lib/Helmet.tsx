import React from 'react';
import { Helmet as ReactHelmet } from 'react-helmet';

function Helmet() {
  return (
    <ReactHelmet title="SHELLBOY">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Comfortaa:wght@700&display=swap" rel="stylesheet" />
    </ReactHelmet>
  );
}

export default Helmet;
