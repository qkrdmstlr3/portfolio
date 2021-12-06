import React from 'react';
import { Global, css } from '@emotion/react';

interface GlobalStyleProps {
  backgroundColor: string;
}

function GlobalStyle({ backgroundColor }: GlobalStyleProps): React.ReactElement {
  return (
    <Global
      styles={css`
        * {
          box-sizing: border-box;
          font-family: Roboto;
          margin: 0;
          padding: 0;
        }
        html,
        body {
          font-size: 62.5%;
          background-color: ${backgroundColor};
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
