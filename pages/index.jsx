import Head from 'next/head';
import { css, cx } from '@emotion/css';
import styles from '../styles/Home.module.css';
import { Button } from '../components';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>mbk shop</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      hi
    </div>
  );
}
