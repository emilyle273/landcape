import Header from './Header';
import { ReactNode, memo, lazy, Suspense } from 'react';
import Head from 'next/head';
import Spinner from './Spinner';

const Footer = lazy(() => import('./Footer'))

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Head>
        <title>Skyland</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='description' property='og:description' content='Skyland' key='Skyland' />
      </Head>
      <Header />
      {children}
      <Suspense fallback={<Spinner />}>
        <Footer />
      </Suspense>
    </>
  );
}

export default memo(Layout)
