import type { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';

const ProductsSSR: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>products-SSR page title</title>
      </Head>
      <h2>products-SSR page!</h2>
    </Layout>
  );
};

export default ProductsSSR;
