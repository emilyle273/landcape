import Main from 'containers/Consignment';
import withPrivateRoute from 'hocs/withPrivateRoute';
import { NextPage } from 'next';
import Layout from 'components/Layout';
import Banner from 'containers/Home/Banner';
import Container from 'components/Container';
import Tabs from 'containers/Home/Tabs';
import { useRouter } from 'next/router';

const Consignment: NextPage = withPrivateRoute(() => {
  const { push } = useRouter();
  return (
    <Layout>
      <Banner />
      <section className='bg-gray-200 relative w-full pb-[30px]'>
        <Container className=' z-[11] absolute left-[50%] top-[-100px] translate-x-[-50%]'>
          <Tabs
            list={[
              {
                name: 'Buy and sell land',
                value: 'sell',
                onClick: () => {
                  push('/', '', { shallow: true });
                },
              },
              {
                name: 'Consignment',
                value: 'consignment',
                onClick: () => {
                  push('/consignment', '', { shallow: true });
                },
              },
            ]}
          />
          <div className='bg-white h-[63px]' />
        </Container>
        <Container className=' bg-transparent'>
          <Main />
        </Container>
      </section>
    </Layout>
  );
});

// Consignment.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

export async function getInitialProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  );

  return {
    props: {},
  };
}

export default Consignment;
