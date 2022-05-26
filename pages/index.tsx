import Banner from 'components/Home/Banner'
import ProjectSection from 'components/Home/ProjectsSection'
import Layout from 'components/Layout'
import { NextPage } from 'next'
import { ReactElement } from 'react'

import NewsSection from 'components/Home/NewsSection'

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <NewsSection />
      <ProjectSection />
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export async function getServerSideProps({ req, res }) {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props: {},
  }
}

export default Home
