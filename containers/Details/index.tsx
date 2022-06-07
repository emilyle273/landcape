import { memo } from 'react';
import Container from 'components/Container';
import Banner from './Banner';
import { News } from 'types';
import Map from 'components/Map';
import Image from 'next/image';

const Details = ({ land }: { land: News }) => {
  return (
    <>
      <Banner title={''} />
      <section>
        <Container className=' p-[25px] mt-[-100px]'>
          <h2 className='text-xl text-center text-white uppercase mb-[20px]'>
            {land?.title}
          </h2>
          <div className="w-full h-[auto]">
            <Image layout="fill" objectFit="contain" src={land?.image?.[0]} alt='detail-1'/>
          </div>
          <img className='w-full' src={land?.image?.[0]} alt='detail-1' />
          <p className='my-[30px]'>{land?.description}</p>
          <div className="w-full h-[auto]">
            <Image layout="fill" objectFit="contain" src={land?.image?.[1]} alt='detail-1'/>
          </div>
          {land?.location && (
            <Map location={land?.location} draggable={false} />
          )}
        </Container>
      </section>
    </>
  );
};

export default memo(Details);
