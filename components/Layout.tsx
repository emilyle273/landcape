import Header from './Header'
import Footer from './Footer'
import { ReactNode } from 'react'
import Head from 'next/head'

export default function Layout({ children }: { children: ReactNode}) {
  return (
    <>
      <Head>
        <title>Skyland</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
