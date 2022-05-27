import type { NextPage } from 'next'
import Layout from 'components/common/Layout'
import { NextPage } from 'next'
import { ReactElement } from 'react'
import Main from "components/details"
import { getNewsById } from 'services/news'
import { useRouter } from 'next/router'
import { useQuery } from 'react-query'

const Details: NextPage = () => {
  const router = useRouter()

  const { data } = useQuery(
    ["GetNewsDetails", router?.query?.newId],
    () => getNewsById(router?.query?.newId),
    { enabled: !!router?.query?.newId }
  );

  return (
    <>
      <Main
        land={data?.data?.data?.blog}
      />
    </>
  )
}

Details.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Details

