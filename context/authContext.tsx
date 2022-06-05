import React, { FC, useEffect, useState } from 'react';
import { getLocalStorage } from 'services/localstorage';

interface AuthState {
  accessToken: string;
  isLoading: boolean
}

interface AuthContext extends AuthState {
  setAccessToken?: (params: string) => void;
}

const authContext = React.createContext<AuthContext>({
  accessToken: '',
  isLoading: true,
});

const AuthProvider: FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const [accessToken, setAccessToken] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true)

  useEffect(() => {
    const token = getLocalStorage('accessToken');

    setAccessToken(typeof token === 'string' && !!token ? token : '')
    setIsLoading(false)
  }, [])

  return (
    <authContext.Provider
      value={{
        accessToken,
        setAccessToken,
        isLoading,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, authContext };
