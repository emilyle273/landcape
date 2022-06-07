import { memo } from 'react';
import Container from '../Container';
import  dynamic from 'next/dynamic'

// import Left from './Left';
// import Center from './Center';
// import Right from './Right';

const Left = dynamic(() => import('./Left'))
const Center = dynamic(() => import('./Center'))
const Right = dynamic(() => import('./Right'))

const Footer = () => {
  return (
    <footer className='bg-black py-[50px]'>
      <Container className=' flex-wrap flex items-top md:justify-between justify-center'>
        <Left />
        <Center />
        <Right />
      </Container>
    </footer>
  );
};

export default memo(Footer);
