import '../styles/globals.scss'

import 'react-notifications/lib/notifications.css';
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query';

import { NotificationContainer } from 'react-notifications'
import { AuthProvider } from 'context/authContext';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
      refetchOnWindowFocus: false,
    },
  },
});

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: NextPage) => page)

  return <AuthProvider>{getLayout(<QueryClientProvider client={queryClient}><NotificationContainer /><Component {...pageProps} /></QueryClientProvider>)}</AuthProvider>
}
