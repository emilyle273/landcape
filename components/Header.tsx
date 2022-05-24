import Link from 'next/link'

import Container from './Container';
import NavBar from './NavBar';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='h-[83px]'>
      <Container className=' flex items-center justify-between'>
        <NavBar
          list={[
            {
              name: 'Home',
              url: '/',
            },
            {
              name: 'buy and sell land',
              url: '/selling',
            },
            {
              name: 'Lease',
              url: '/selling',
            },
          ]}
        />
        <Link href='/'>
          {/* <div className='h-[83px] w-auto relative'> */}
          <Image
          src='https://skylandvietnam.vn/wp-content/uploads/2019/04/53026275_302570497072442_1683615377461870592_n.png'
          alt='logo'
          // layout='fill'
          width="150px"
            height='83px'
        />
          {/* </div> */}
        
        </Link>
       
        <NavBar
          list={[
            {
              name: 'Project',
              url: '/',
            },
            
            {
              name: 'Consignment',
              url: '/'
            },
            {
              name: 'Contact us',
              url: '/contact',
            },
          ]}
        />
      </Container>
    </header>
  );
};

export default Header;
