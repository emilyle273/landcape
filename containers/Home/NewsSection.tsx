import { useState, Suspense, lazy } from 'react';
import { useRouter } from 'next/router';
import Container from 'components/Container';
import { useQuery } from 'react-query';
import { getNews } from 'services/news';
import withConsignmentTab from 'hocs/withConsignmentTab';

import Spinner from 'components/Spinner';
import Filter from './Filter';

const NewsList = lazy(() => import('./NewsList'));
const Tabs = lazy(() => import('./Tabs'));

const NewsSection = withConsignmentTab(
  ({ onClickConsignment }: { onClickConsignment?: () => void }) => {
    const [search, setSearch] = useState({
      city: '48',
      district: '',
      ward: '',
      q: '',
    });
    const { push } = useRouter();

    const { data } = useQuery(
      ['GetNews', search?.city, search?.district, search?.ward, search?.q],
      () => getNews({ ...search })
    );

    return (
      <section className='bg-gray-200 relative w-full pb-[30px]'>
        <Container className=' z-[11] absolute left-[50%] top-[-100px] translate-x-[-50%]'>
          <Suspense fallback={<Spinner />}>
            <Tabs
              list={[
                {
                  name: 'Buy and sell land',
                  value: 'sell',
                  onClick: () => {
                    push('/', '', { shallow: true });
                  },
                },
                {
                  name: 'Consignment',
                  value: 'consignment',
                  onClick: onClickConsignment,
                },
              ]}
            />
          </Suspense>
          <Filter onSearch={setSearch} />
        </Container>
        <Container className=' bg-transparent md:pt-[60px] pt-[125px]'>
          <div className=' bg-white p-6 rounded-[5px]'>
            <Suspense fallback={<Spinner />}>
              <NewsList list={data?.data?.news || []} />
            </Suspense>
          </div>
        </Container>
      </section>
    );
  }
);

export default NewsSection;
