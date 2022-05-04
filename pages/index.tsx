import type { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';
import Link from 'next/link';
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
  Box,
} from '@mui/material';

interface Product {
  id: number;
  title: string;
  imageURL: string;
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
  imageURL: string;
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
      <Container maxWidth={false}>
        <Typography component="div">
          <h2>Products to Consider!</h2>
          {/* Products */}
          <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
            {products.map((product) => (
              /* Each Product */
              <Card key={product.id} sx={{ maxWidth: 345, m: 2 }}>
                <CardMedia
                  component="img"
                  height="240"
                  image={'images/products/' + product.imageURL + '.jpg'}
                  alt="001"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Add to Cart</Button>
                  <Button size="small">
                    <Link href={'/products/' + product.id}>Learn More</Link>
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Box>
        </Typography>
      </Container>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(process.env.API_HOST + 'products');
  const products: Product[] = await res.json();
  return {
    props: {
      products,
    },
    revalidate: 20,
  };
}

/* could be this */
// export const getStaticProps: GetStaticProps = async () => {

export default Home;
