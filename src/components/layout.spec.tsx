import React, { PropsWithChildren } from 'react';
import renderer from 'react-test-renderer';

import Layout, { LayoutProps } from './layout';

describe(`Layout snapshot`, () => {
  it(`renders correctly when root pathname`, () => {
    const props = {
      title: `test`,
      location: {
        pathname: `/`,
      },
    } as PropsWithChildren<LayoutProps>;

    const tree = renderer
      .create(
        <Layout {...props}>
          <p>Test</p>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders correctly when not root pathname`, () => {
    const props = {
      title: `test`,
      location: {
        pathname: ``,
      },
    } as PropsWithChildren<LayoutProps>;

    const tree = renderer
      .create(
        <Layout {...props}>
          <p>Test</p>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
