import Textbox from 'components/Textbox';
import { useState, useCallback, } from 'react';
import Link from 'next/link';
import { User } from 'types';
import { useMutation } from 'react-query';
import { login } from 'services/auth';
import { setLocalStorage } from 'services/localstorage';
import Spinner from 'components/Spinner';

import { NotificationManager } from 'react-notifications';
import { useRouter } from 'next/router';
import Head from 'next/head';

const Login = ({ setToken }: { setToken: Function }) => {
  const router = useRouter();
  const [values, setValues] = useState<User>({
    email: '',
    password: '',
  });

  const { mutate, isLoading } = useMutation('GetToken', login, {
    onError: (err: any) => {
      NotificationManager.error(err?.response?.data?.message, null, 3000);
    },
    onSuccess: (res) => {
      setToken?.(res?.data?.data?.token as string);
      setLocalStorage('accessToken', res?.data?.data?.token);
      if (!!router?.query?.referer) {
        router.push(router?.query?.referer, '', { shallow: true });
        return;
      }
      router.push('/', '', { shallow: true });
    },
  });

  const [errors, setErrors] = useState<User>({
    email: '',
    password: '',
  });

  const handleOnChange = useCallback((event: Event & { target: HTMLInputElement }) => {
    const { value, name } = event?.target;

    setValues({
      ...values,
      [name]: value,
    } as User);
  }, [values]);

  const handleValidate = useCallback(() => {
    const { email, password } = values;
    const err = {
      email: email ? '' : 'Email is required.',
      password: password ? '' : 'Password is required',
    };
    setErrors({
      ...err,
    });

    return err;
  }, [values]);

  const handleLogin = useCallback(() => {
    if (!!handleValidate()?.email || !!handleValidate()?.password) {
      return;
    }
    mutate({ ...values });
  }, [values, handleValidate]);

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta name='og:title' content='Login page' />
        <meta name='description' property='og:description' content='Login page' key='Skyland' />
      </Head>

      <section className='md:max-w-[50%] mx-auto mt-[200px]'>
        <div className='mb-[30px]'>
          <Textbox
            placeholder='Email'
            onChange={handleOnChange}
            name='email'
            value={values?.email}
          />
          <p className='text-[red]'>{errors?.email}</p>
        </div>

        <div className='mb-[30px]'>
          <Textbox
            placeholder='Password'
            type='password'
            name='password'
            onChange={handleOnChange}
          />
          <p className='text-[red]'>{errors?.password}</p>
        </div>

        <button
          className='bg-orange-700 uppercase text-white w-full lg:h-[30px] h-[48px] rounded-[5px]'
          onClick={handleLogin}
        >
          {isLoading ? <Spinner /> : 'Login'}
        </button>
        <span className='mt-[10px] text-right !text-gray-800 block'>
          Don&apos;t have a account{' '}
          <Link href='/signup'>
            <span className='!text-orange-700'>Signup</span>
          </Link>{' '}
        </span>
      </section>
    </>
  );
};

export default Login;
