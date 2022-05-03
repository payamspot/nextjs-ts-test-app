import type { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from '../styles/index.module.scss';

type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
};

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>index page title</title>
      </Head>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch('http://localhost:3333/products');
  const products: Product[] = await res.json();
  return {
    props: {
      products,
    },
  };
}

export default Home;
