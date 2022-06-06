import { memo } from 'react';
import Link from 'next/link';

const Left = memo(() => (
  <div>
    <p className='text-white'>LANDCAPE - Real estate information</p>
    <address className='text-[10px] text-gray-500 py-2' key='Office'>
      <i className='fa-light fa-phone text-orange-700'></i>Office: Danang
    </address>
    <p className='text-[10px] text-gray-500 py-2' key='Hotline'>
      <i className='fa-light fa-phone text-orange-700'></i>Hotline:
      <Link href='tel:84 906116559'>+84 906116559</Link>
    </p>
    <p className='text-[10px] text-gray-500 py-2' key='email'>
      <i className='fa-light fa-envelop text-orange-700'></i>Email:
      <Link href='mailto: doanlinh@gmail.com'>doanlinh@gmail.com</Link>
    </p>
    <p className='text-[10px] text-gray-500 py-2' key='web'>
      <i className='fa-light fa-globe text-orange-700'></i>Website:
      <Link href='https://landcape.com'>https://landcape.com</Link>
    </p>
  </div>
));

export default Left;
