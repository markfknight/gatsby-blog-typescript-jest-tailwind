import React from 'react';
import renderer from 'react-test-renderer';

import Layout from './layout';

describe(`Layout snapshot`, () => {
  it(`renders correctly`, () => {
    const tree = renderer
      .create(
        <Layout>
          <p>Test</p>
        </Layout>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
