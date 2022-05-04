import { NextPage } from 'next';
import Layout from '../../components/layout';
import Head from 'next/head';
import { Container, Typography } from '@mui/material';

interface Product {
  id: number;
  title: string;
  imageURL: string;
  description: string;
}
type Props = {
  product: Product;
};
interface Param {
  pid: string;
}
type Params = {
  params: Param;
};

const Product: NextPage<Props> = ({ product }: Props) => {
  return (
    <Layout>
      <Head>
        <title>
          product {product.id}: {product.title}
        </title>
      </Head>
      <Container maxWidth={false}>
        <Typography component="div">
          <h2>
            This is Product{' '}
            <span style={{ color: 'blue' }}>
              {product.id}: {product.title}
            </span>
          </h2>
          <img
            src={'/images/products/00' + product.id + '.jpg'}
            alt={product.title}
          />
          <br />
          <img
            src={'/images/products/product-image-sample.jpg'}
            alt="sample product"
            style={{ width: '100%', maxWidth: '800px' }}
          />
        </Typography>
      </Container>
    </Layout>
  );
};

export async function getStaticProps({ params }: Params) {
  const res = await fetch(process.env.API_HOST + 'products/' + params.pid);
  const product: Product = await res.json();
  return { props: { product } };
}

export async function getStaticPaths() {
  const res = await fetch(process.env.API_HOST + 'products');
  const products: Product[] = await res.json();
  const paths = products.map((product) => ({
    params: { pid: product.id.toString() },
  }));
  return { paths, fallback: false };
}

export default Product;
