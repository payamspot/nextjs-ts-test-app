import type { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';
import styles from '../styles/index.module.scss';

const Home: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>index page title</title>
      </Head>
      <h2 className={styles.blue}>index page!</h2>
    </Layout>
  );
};

export default Home;
