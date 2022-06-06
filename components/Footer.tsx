import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';

const Footer = () => {
  return (
    <footer className='bg-black py-[50px]'>
      <Container className=' flex-wrap flex items-top md:justify-between justify-center'>
        <div>
          <p className='text-white'>LANDCAPE - Real estate information</p>
          <p className='text-[10px] text-gray-500 py-2' key="Office">
            <i className='fa-light fa-phone text-orange-700'></i>Office: Da Nang
          </p>
          <p className='text-[10px] text-gray-500 py-2' key="Hotline">
            <i className='fa-light fa-phone text-orange-700'></i>Hotline: +84
            906116559
          </p>
          <p className='text-[10px] text-gray-500 py-2' key="email">
            <i className='fa-light fa-envelop text-orange-700'></i>Email:
            doanlinh@gmail.com
          </p>
          <p className='text-[10px] text-gray-500 py-2' key="web">
            <i className='fa-light fa-globe text-orange-700'></i>Website:
            https://landcape.com
          </p>
        </div>
        <div>
          <p className='text-white'>FAST CONNECTION</p>
          <ul className='text-gray-500 text-[10px]'>
            <li className='border-b border-dotted border-gray-400 py-2' key="introduction">
              Introduction
            </li>
            <li className='border-b border-dotted border-gray-400 py-2' key="sell">
              Sell and buy lands
            </li>
            <li className='border-b border-dotted border-gray-400 py-2' key="Lease">
              Lease
            </li>
            <li className='py-3' key="Real">Real estate consignment</li>
          </ul>
        </div>
        <div className='flex flex-col items-baseline'>
          <p className='text-white mb-3'>CONTACT</p>
          <input
            className='pl-3 mb-3 text-[10px] w-[258px] h-[30px] rounded-[4px] text-gray-800  placeholder-gray-500 bg-white'
            placeholder='Fullname'
          />
          <input
            className='pl-3 mb-3 text-[10px] w-[258px] h-[30px] rounded-[4px] text-gray-800 placeholder-gray-500 bg-white'
            placeholder='Phone'
          />
          <input
            className='pl-3 mb-3 text-[10px] w-[258px] h-[30px] rounded-[4px] text-gray-800 placeholder-gray-500 bg-white'
            placeholder='Email'
          />
          <textarea
            rows={4}
            className='pl-3 mb-3 text-[10px] w-[258px] rounded-[4px] text-gray-800 placeholder-gray-500 bg-white'
            placeholder='Phone'
          />
          <button className='text-xs text-white rounded-[5px] bg-orange-700 w-[90px] h-[30px]'>
            Send out
          </button>
        </div>
      </Container>
    </footer>
  );
};

export default memo(Footer);
