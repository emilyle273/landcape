import Layout from 'components/Layout';
import { NextPage } from 'next';
// import { ReactElement } from 'react';

import ContactUs from 'containers/ContactUs';

const Home: NextPage = () => {
  return <Layout><ContactUs /></Layout>;
};

// Home.getLayout = function getLayout(page: ReactElement) {
//   return <Layout>{page}</Layout>;
// };

export default Home;
