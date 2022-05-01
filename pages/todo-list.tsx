import type { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';

const TodoList: NextPage = () => {
  return (
    <Layout>
      <Head>
        <title>todo-list page title</title>
      </Head>
      <h2>todo-list page!</h2>
    </Layout>
  );
};

export default TodoList;
