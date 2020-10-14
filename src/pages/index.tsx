import { graphql, PageProps } from 'gatsby';
import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

type Data = {
  site: {
    siteMetadata: {
      title: string;
    };
  };
};

const Home: React.FC<PageProps<Data>> = (props) => {
  const { data } = props;
  const title = data.site.siteMetadata.title;

  return (
    <Layout location={props.location} title={title}>
      <SEO title="Home" />
      <div>Hello world!</div>
    </Layout>
  );
};

export default Home;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
