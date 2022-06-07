import { memo, Suspense, lazy } from 'react';
import Container from '../Container';
import Spinner from 'components/Spinner';

const Left = lazy(() => import('./Left'))
const Center = lazy(() => import('./Center'))
const Right = lazy(() => import('./Right'))

const Footer = () => {
  return (
    <footer className='bg-black py-[50px]'>
      <Container className=' flex-wrap flex items-top md:justify-between justify-center'>
        <Suspense fallback={<Spinner />}>
          <Left />
          <Center />
          <Right />
        </Suspense>
      </Container>
    </footer>
  );
};

export default memo(Footer);
