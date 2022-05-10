import type { NextPage } from 'next';
import Layout from '../components/layout';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { CircularProgress, Container } from '@mui/material';

interface Product {
  id: number;
  title: string;
  imageURL: string;
  description: string;
}

const Blog: NextPage = () => {
  const [isLoading, setLoading] = useState(false);
  const [blogPosts, setBlogPosts] = useState<Product[]>([]);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://627118fb6a36d4d62c2128ba.mockapi.io/products')
      .then((res) => {
        const bPosts = res.data;
        setBlogPosts(bPosts);
        setLoading(false);
      });
  }, []);

  if (isLoading)
    return (
      <Layout>
        <Head>
          <title>blog page title</title>
        </Head>
        <Container maxWidth={false}>
          <h2>Blog Posts !?</h2>
          <CircularProgress />
          <br />
          <br />
        </Container>
      </Layout>
    );
  else {
    return (
      <Layout>
        <Head>
          <title>blog page title</title>
        </Head>
        <Container maxWidth={false}>
          <h2>Blog Posts !?</h2>
          <ul>
            {blogPosts.map((post) => (
              <li key={post.id}>
                {post.title} - {post.description}
              </li>
            ))}
          </ul>
        </Container>
      </Layout>
    );
  }
};

export default Blog;
