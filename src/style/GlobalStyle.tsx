import React from 'react';
import { Global, css } from '@emotion/react';
import mq from './mq';

interface GlobalStyleProps {
  backgroundColor: string;
}

function GlobalStyle({ backgroundColor }: GlobalStyleProps): React.ReactElement {
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
          height: auto;
          font-size: 62.5%;
          background-color: ${backgroundColor};

          ${mq('sm')} {
            & > div {
              overflow: hidden;
            }
          }
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
