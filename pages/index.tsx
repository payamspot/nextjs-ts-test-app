import type { NextPage, GetStaticProps } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from '../styles/index.module.scss';

interface Product {
  id: number;
  title: string;
  image: string;
  description: string;
}

type Props = {
  products: Product[];
};

/* could be this ?. */
/*
type Product = {
  id: number;
  title: string;
  image: string;
  description: string;
}

const Home: NextPage<Product[]> = (products: Product[]) => {

};
*/

const Home: NextPage<Props> = ({ products }: Props) => {
  return (
    <Layout>
      <Head>
        <title>index page title</title>
      </Head>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:3333/products');
  const products: Product[] = await res.json();
  return {
    props: {
      products,
    },
  };
};

export default Home;
