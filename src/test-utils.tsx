import React, { FC, ReactElement } from 'react';
import { RecoilRoot } from 'recoil';
import { render, RenderOptions } from '@testing-library/react';

const AllTheProviders: FC = ({ children }) => {
  return (
    <RecoilRoot>
      <div id="modal" />
      {children}
    </RecoilRoot>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
