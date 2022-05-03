import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Layout from '../../components/layout';
import Head from 'next/head';

const Product: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <Head>
        <title>product {pid} page title</title>
      </Head>
      <h2>Product {pid}!</h2>
    </Layout>
  );
};

export default Product;
