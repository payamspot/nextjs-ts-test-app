import { NextPage } from 'next';
import Layout from '../../components/layout';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Typography } from '@mui/material';
import productImage1 from '/public/images/products/001.jpg';
import productImageSample from '/public/images/products/product-image-sample.jpg';

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
          {/* for 'static html export' use img instead of Image */}
          {/* not to use next/image !? ... */}
          {/*<div>
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
          </div>*/}
          {/* or to use next/image !!! */}
          <div>
            <Image
              src={productImage1}
              alt="product.title"
              placeholder="blur"
              priority
            />
            <br />
            <Image
              src={productImageSample}
              alt="sample product"
              width={800}
              height={450}
              placeholder="blur"
            />
          </div>
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
