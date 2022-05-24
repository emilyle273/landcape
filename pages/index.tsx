import type { NextPage } from 'next'
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

export default Home
