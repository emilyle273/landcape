import Banner from 'components/home/Banner'
import ProjectSection from 'components/home/ProjectsSection'
import Layout from 'components/common/Layout'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import NewsSection from 'components/home/NewsSection'

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
