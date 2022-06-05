import React, { FC, useContext, useEffect, Suspense } from 'react';
import { authContext } from 'context/authContext';
import { useRouter } from 'next/router';
import Spinner from 'components/Spinner';

const withPrivateRoute = <Props extends Record<string, unknown>>(
  Component: React.ComponentType<Props>
) => {
  const ComponentWithPrivateRoute: FC<Props> = (props) => {
    const { pathname } = useRouter();
    const { accessToken, setAccessToken, isLoading } = useContext(authContext);

    if(isLoading) {
      return <Spinner />
    }

    /* eslint-disable react-hooks/rules-of-hooks */
    if (!accessToken && !pathname.includes('login')) {
      useRedirectToLogin();
    }
    return <Suspense fallback={<Spinner />}><Component {...props} setToken={setAccessToken} /></Suspense>;
  };

  return ComponentWithPrivateRoute;
};

const useRedirectToLogin = () => {
  const { push, pathname } = useRouter();

  /* eslint-disable react-hooks/exhaustive-deps */
  useEffect(() => {
    push({
      pathname: '/login',
      query: {
        referer: pathname,
      },
    });
  }, []);
};

export default withPrivateRoute;
