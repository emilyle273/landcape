import Layout from 'components/Layout'
import { NextPage } from 'next'
import { ReactElement } from 'react'

import ContactUs from 'components/ContactUs'

const Home: NextPage = () => {
  return (
    <ContactUs />
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Home