import { useRouter } from 'next/router';
import { NextPage } from 'next';

const Product: NextPage = () => {
  const router = useRouter();
  const { pid } = router.query;

  return <p>Product {pid}!</p>;
};

export default Product;
