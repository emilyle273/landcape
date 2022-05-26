import Main from 'components/Consignment';
import withPrivateRoute from 'components/withPrivateRoute';
import { ReactElement, useEffect } from 'react';
import { NextPage } from 'next';
import Layout from 'components/Layout';
import Banner from 'components/Home/Banner';
import Container from 'components/Container';
import Tabs from 'components/Home/Tabs';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Consignment: NextPage = withPrivateRoute(() => {
  const { push } = useRouter()
  // useEffect(() => {
  //   document.addEventListener('touchstart', () => {}, {passive: true});
  // }, [])
  return (
    <>
      <Head>
        <title>Consignment</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Consignment" key="title" />
        <meta property="og:desciption" content="Consignment" key="desciption" />
      </Head>
      <Banner />
      <section className='bg-gray-200 relative w-full pb-[30px]'>
        <Container className=' z-[11] absolute left-[50%] top-[-100px] translate-x-[-50%]'>
          <Tabs
            list={[
              {
                name: 'Buy and sell land',
                value: 'sell',
                onClick: () => {
                  push('/', '', { shallow: true })
                }
              },
              {
                name: 'Consignment',
                value: 'consignment',
                onClick: () => {
                  push('/consignment', '', { shallow: true })
                }
              },
            ]}
          />
          <div className="bg-white h-[63px]"/>
        </Container>
        <Container className=' bg-transparent'>
          <Main />
        </Container>
      </section>
    </>
  );
});

Consignment.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export async function getInitialProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}

export default Consignment;
