import Header from './Header';
import Footer from './Footer';
import { ReactNode, memo } from 'react';
import Head from 'next/head';

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Skyland</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' property='og:description' content='Skyland' key='Skyland' />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default memo(Layout)
