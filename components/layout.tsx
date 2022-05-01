import Head from 'next/head';
import { ReactNode } from 'react';
import Navigation from './navigation';
import styles from '../styles/layout.module.scss';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

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

      <header>
        <Navigation></Navigation>
      </header>

      <main>{children}</main>

      <footer>footer!</footer>
    </div>
  );
}

export default Layout;
