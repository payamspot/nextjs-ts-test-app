import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/home.module.scss';

const Home: NextPage = () => {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Next.js TS Test App</title>
        <meta name="description" content="A Test Next.js App by PayamRWD!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hi Next.js</h1>
      </main>

      <footer></footer>
    </div>
  );
};

export default Home;
