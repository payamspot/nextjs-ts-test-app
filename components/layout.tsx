import Head from 'next/head';
import { ReactNode } from 'react';
import styles from '../styles/layout.module.scss';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div className={styles.wrapper}>
      <Head>
        <title>Next.js TS Test App</title>
        <meta name="description" content="A Test Next.js App by PayamRWD!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Navigation!</h1>
        {children}
      </main>

      <footer>footer!</footer>
    </div>
  );
}

export default Layout;
