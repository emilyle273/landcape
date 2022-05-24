import Textbox from 'components/Textbox';
import { useState, useContext } from 'react';
import Link from 'next/link';
import { User } from 'types';
import { useMutation } from 'react-query';
import { login } from 'services/auth';
import { setLocalStorage } from 'services/localstorage';
import Spinner from 'components/Spinner';

import { NotificationManager } from 'react-notifications';
import { authContext } from 'context/authContext';
import { useRouter } from 'next/router';
import withPrivateRoute from 'components/withPrivateRoute';
import Head from 'next/head'

const Login = ({ setToken }: {setToken: Function}) => {
  const router = useRouter()
  const [values, setValues] = useState<User>({
    email: '',
    password: '',
  });

  const { mutate, isLoading } = useMutation('GetToken', login, {
    onError: (err: any) => {
      NotificationManager.error(err?.response?.data?.message, null, 3000);
    },
    onSuccess: (res) => {
      setToken?.(res?.data?.data?.token as string)
      setLocalStorage('accessToken', res?.data?.data?.token)
      router.push('/admin/dashboard')
    }
  });

  const [errors, setErrors] = useState<User>({
    email: '',
    password: '',
  });

  const handleOnChange = (event: Event & { target: HTMLInputElement }) => {
    const { value, name } = event?.target;

    setValues({
      ...values,
      [name]: value,
    } as User);
  };

  const handleValidate = () => {
    const { email, password } = values;
    const err = {
      email: email ? '' : 'Email is required.',
      password: password ? '' : 'Password is required',
    };
    setErrors({
      ...err,
    });

    return err;
  };

  const handleLogin = () => {
    if (!!handleValidate()?.email || !!handleValidate()?.password) {
      return;
    }
    mutate({ ...values });
  };

  return (
    <Head>
        <title>Login</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
        <Textbox placeholder='Password' type='password' name='password' onChange={handleOnChange}/>
        <p className='text-[red]'>{errors?.password}</p>
      </div>

      <button
        className='bg-orange-400 uppercase text-white w-full h-[40px] rounded-[5px]'
        onClick={handleLogin}
      >
        {isLoading ? <Spinner/> : "Login"}
      </button>
      <p className='mt-[10px] text-right !text-gray-800'>
        Don&apos;t have a account{' '}
        <Link href='/signup'>
          <span className='!text-orange-400'>Signup</span>
        </Link>{' '}
      </p>
    </section>
  );
}

export default withPrivateRoute(Login);
