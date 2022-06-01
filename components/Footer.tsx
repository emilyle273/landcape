import Container from './Container';
import Link from 'next/link';
import Image from 'next/image';
import { memo } from 'react';

const Footer = () => {
  return (
    <footer className='bg-black py-[50px]'>
      <Container className=' flex items-top justify-between'>
        <div>
          <Link href='/'>
            {/* <span className='inline-block relative'> */}
            <Image
              src='https://skylandvietnam.vn/wp-content/uploads/2019/04/53026275_302570497072442_1683615377461870592_n.png'
              alt='logo'
              className='max-h-[83px]'
              width='150px'
              height='83px'
            />
            {/* </span> */}
          </Link>
          <p className='text-white'>LANDCAPE - Real estate information</p>
          <p className='text-[10px] text-gray-500 py-2'>
            <i className='fa-light fa-phone text-orange-700'></i>Office: Da Nang
          </p>
          <p className='text-[10px] text-gray-500 py-2'>
            <i className='fa-light fa-phone text-orange-700'></i>Hotline: +84
            906116559
          </p>
          <p className='text-[10px] text-gray-500 py-2'>
            <i className='fa-light fa-envelop text-orange-700'></i>Email:
            doanlinh@gmail.com
          </p>
          <p className='text-[10px] text-gray-500 py-2'>
            <i className='fa-light fa-globe text-orange-700'></i>Website:
            https://landcape.com
          </p>
        </div>
        <div>
          <p className='text-white'>FAST CONNECTION</p>
          <ul className='text-gray-500 text-[10px]'>
            <li className='border-b border-dotted border-gray-400 py-2'>
              Introduction
            </li>
            <li className='border-b border-dotted border-gray-400 py-2'>
              Sell and buy lands
            </li>
            <li className='border-b border-dotted border-gray-400 py-2'>
              Lease
            </li>
            <li className='py-3'>Real estate consignment</li>
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
