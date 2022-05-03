import { useRouter } from 'next/router';
import { NextPage } from 'next';
import Layout from '../../components/layout';
import Head from 'next/head';
import { Container, Typography } from '@mui/material';

const Product: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return (
    <Layout>
      <Head>
        <title>product {pid} page title</title>
      </Head>
      <Container maxWidth={false}>
        <Typography component="div">
          <h2>
            This is Product <span style={{ color: 'blue' }}>{pid}</span>
          </h2>
          <img
            src={'/images/products/product-image-sample.jpg'}
            alt="sample product"
            style={{ width: '100%' }}
          />
        </Typography>
      </Container>
    </Layout>
  );
};

export default Product;
