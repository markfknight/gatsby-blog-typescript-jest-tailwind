import React from 'react';
import Layout from '../components/layout';
import { SEO } from '../components/seo';

const Home: React.FC = () => (
  <Layout>
    <SEO title="Home" />
    <div>Hello world!</div>
  </Layout>
);

export default Home;
