import Textbox from 'components/Textbox';
import { useState } from 'react';
import Link from 'next/link';
import { User } from 'types';
import { useMutation } from 'react-query';
import { register } from 'services/auth';
import { setLocalStorage } from 'services/localstorage';
import PasswordStrengthBar from 'react-password-strength-bar';
import { NotificationManager } from 'react-notifications';

const Signup = () => {
  const [values, setValues] = useState<User>({
    email: '',
    password: '',
    phone: '',
  });

  const { mutate } = useMutation('Signup', register, {
    onError: (err: any) => {
      NotificationManager.error(err?.response?.data?.message, null, 3000);
    },
    onSuccess: (res) => {
      setLocalStorage('accessToken', res?.data?.data?.token)
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

  const handleSignup = () => {
    if (!!handleValidate()?.email || !!handleValidate()?.password) {
      return;
    }
    mutate({ ...values });
  };

  return (
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
        <PasswordStrengthBar password={values?.password}/>
      </div>
      <div className='mb-[30px]'>
        <Textbox placeholder='Phone' type='text' name='phone' onChange={handleOnChange}/>
        <p className='text-[red]'>{errors?.password}</p>
      </div>
      <button
        className='bg-orange-400 uppercase text-white w-full h-[40px] rounded-[5px]'
        onClick={handleSignup}
      >
        Signup
      </button>
      <p className='mt-[10px] text-right !text-gray-800'>
        Have a account,{' '}
        <Link href='/login'>
          <span className='!text-orange-400'>Signin</span>
        </Link>{' '}
      </p>
    </section>
  );
};

export default Signup;
