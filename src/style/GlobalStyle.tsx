import React from 'react';
import { Global, css } from '@emotion/react';

function GlobalStyle(): React.ReactElement {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          font-family: 'Comfortaa';
          margin: 0;
          padding: 0;
        }
        html,
        body {
          font-size: 62.5%;
        }
        body {
        }
        a {
          text-decoration: none;
          color: inherit;
        }
        button {
          outline: none;
          cursor: pointer;
        }
        ul {
          list-style: none;
        }
      `}
    />
  );
}

export default GlobalStyle;
