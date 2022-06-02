import Head from 'next/head';
import { ReactNode } from 'react';
import Navigation from './navigation';
import styles from '../styles/layout.module.scss';

type Props = {
  children: ReactNode;
};

function Layout({ children }: Props) {
  return (
    <div dir="rtl">
      <div className={styles.wrapper}>
        <Head>
          <title>Next.js TS Test App</title>
          <meta name="description" content="A Test Next.js App by PayamRWD!" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
          <Navigation></Navigation>
        </header>

        <main>{children}</main>

        <footer
          dir="ltr"
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            marginBottom: '5px',
          }}
        >
          footer! -- version 1.0.0 -- footer!
        </footer>
      </div>
    </div>
  );
}

export default Layout;
