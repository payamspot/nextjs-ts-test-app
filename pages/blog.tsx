import type { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';

const Blog: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>blog page title</title>
      </Head>
      <h2>blog page!</h2>
    </Layout>
  );
};

export default Blog;
