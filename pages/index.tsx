import { NextPage } from 'next';
import { lazy, Suspense } from 'react';

import Layout from 'components/Layout';

const Banner = lazy(() => import('containers/Home/Banner'))

import NewsSection from 'containers/Home/NewsSection';
import Spinner from 'components/Spinner';

const Home: NextPage = () => {
  return (
    <Layout>
      <Suspense fallback={<Spinner />}>
        <Banner />
      </Suspense>
      <NewsSection />
    </Layout>
  );
};

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, max-age=31536000, immutable'
  );

  return {
    props: {},
  };
}

export default Home;
