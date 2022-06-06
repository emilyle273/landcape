import { NextPage } from 'next';

import Banner from 'containers/Home/Banner';
import ProjectSection from 'containers/Home/ProjectsSection';
import Layout from 'components/Layout';

import NewsSection from 'containers/Home/NewsSection';

const Home: NextPage = () => {
  return (
    <Layout>
      <Banner />
      <NewsSection />
      <ProjectSection />
    </Layout>
  );
};

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

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
