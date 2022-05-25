import Container from 'components/Container';
import Tabs from './Tabs';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getNews } from 'services/news';
import loadable from '@loadable/component';
import { useRouter } from 'next/router';
import withConsignmentTab from 'components/withConsignmentTab';

const Filter = loadable(() => import('components/Home/Filter'));
const NewsList = loadable(() => import('components/Home/NewsList'));

const NewsSection = withConsignmentTab(({ onClickConsignment }: {onClickConsignment?: () => void}) => {
  const [search, setSearch] = useState({
    city: '48',
    district: '',
    ward: '',
    q: ''
  });
  const { push } = useRouter();

  const { data } = useQuery(
    ['GetNews', search?.city, search?.district, search?.ward, search?.q],
    () => getNews({ ...search })
  );

  return (
    <section className='bg-gray-200 relative w-full pb-[30px]'>
      <Container className=' z-[11] absolute left-[50%] top-[-100px] translate-x-[-50%]'>
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
        <Filter onSearch={setSearch} />
      </Container>
      <Container className=' bg-transparent pt-[60px]'>
        <div className=' bg-white p-6 rounded-[5px]'>
          <NewsList list={data?.data?.news || []} />
        </div>
      </Container>
    </section>
  );
});

export default NewsSection;
