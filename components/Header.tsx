import Link from 'next/link';

import Container from './Container';
import NavBar from './NavBar';
import Image from 'next/image';
import { useContext, useState } from 'react';
import { authContext } from 'context/authContext';
import { deleteLocalStorage } from 'services/localstorage';
import { useRouter } from 'next/router';
import withConsignmentTab from './withConsignmentTab';

const Header = ({ onClickConsignment, setAccessToken, accessToken}: {onClickConsignment?: () => void, setAccessToken: (s: string) => void, accessToken: string}) => {
  const { push } = useRouter();

  const navs = [
    {
      name: 'Contact us',
      onClick:() => {
        push('/contact')
      },
      url: '/contact'
    },
    ...(accessToken
      ? [
          {
            name: 'Logout',
            onClick: () => {
              setAccessToken('');
              deleteLocalStorage('accessToken');
              push('/');
            },
          },
        ]
      : [
          {
            name: 'Login',
            onClick: () => {
              push('/login');
            },
          },
        ]),
  ];

  return (
    <header className='h-[83px]'>
      <Container className=' flex items-center justify-between'>
        <NavBar
          list={[
            {
              name: 'Home',
              onClick: () => {
                push('/');
              },
              url: '/'
            },
            {
              name: 'Consignment',
              onClick: onClickConsignment,
              url: '/consignment'
            },
            
          ]}
          className='justify-start'
        />
        <Link href='/'>
          <Image
            src='https://skylandvietnam.vn/wp-content/uploads/2019/04/53026275_302570497072442_1683615377461870592_n.png'
            alt='logo'
            width='150px'
            height='83px'
          />
        </Link>
        <NavBar className='justify-end' list={navs} />
      </Container>
    </header>
  );
};

export default withConsignmentTab(Header);
