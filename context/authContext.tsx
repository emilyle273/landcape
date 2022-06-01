import React, { FC, useEffect, useState } from 'react';
import { User } from 'types';
import { getLocalStorage } from 'services/localstorage';

interface AuthState {
  accessToken: string;
}

interface AuthContext extends AuthState {
  setAccessToken?: (params: string) => void;
}

const authContext = React.createContext<AuthContext>({
  accessToken: '',
});

const AuthProvider: FC<{ children: JSX.Element[] | JSX.Element }> = ({
  children,
}) => {
  const token = getLocalStorage('accessToken');
  const [accessToken, setAccessToken] = useState<string>(
    typeof token === 'string' && !!token ? token : ''
  );

  return (
    <authContext.Provider
      value={{
        accessToken,
        setAccessToken,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export { AuthProvider, authContext };
