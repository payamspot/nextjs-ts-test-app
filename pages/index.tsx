import type { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>index page title</title>
      </Head>
      <h2>index page!</h2>
    </Layout>
  );
};

export default Home;
