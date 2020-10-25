import React from 'react';
import renderer from 'react-test-renderer';

import { PureSEO } from './seo';

describe(`SEO snapshot`, () => {
  it(`renders correctly`, () => {
    const data = {
      site: {
        siteMetadata: {
          title: `Your Title`,
          description: `Description`,
          author: `Your Name`,
        },
      },
    };
    const tree = renderer.create(<PureSEO title="Test" data={data} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
