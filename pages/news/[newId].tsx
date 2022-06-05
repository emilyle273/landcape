import type { NextPage } from 'next';
import Layout from 'components/Layout';
import { NextPage } from 'next';
import { ReactElement, Suspense } from 'react';
import Main from 'containers/Details';
import { getNewsById } from 'services/news';
import { News } from 'types';
// import { useRouter } from 'next/router';
// import { useQuery } from 'react-query';

const Details: NextPage = ({ data }: { data: News}) => {
  // const router = useRouter ();

  // const { data } = useQuery(
  //   ['GetNewsDetails', router?.query?.newId],
  //   () => getNewsById(router?.query?.newId),
  //   { enabled: !!router?.query?.newId }
  // );

  return (
    <Layout>
      <Main land={data} />
    </Layout>
  );
};

export async function getServerSideProps({ params, res }) {
  // console.log('req',params)
  // // Fetch data from external API
  const re = await getNewsById(params?.newId)
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  return { props: { data: re?.data?.data?.blog } }
}

export default Details;
