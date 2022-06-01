import { useQuery } from 'react-query';
import Filter from 'containers/Home/Filter';
import { News } from 'types';
import { getNews } from 'services/news';
import { useState } from 'react';
import Container from 'components/Container';
import { useRouter } from 'next/router';
import Header from 'containers/Admin/Layout';
import withPrivateRoute from 'hocs/withPrivateRoute';

const Dashboard = () => {
  const { push } = useRouter();
  const [search, setSearch] = useState({
    city: '48',
    district: '',
    ward: '',
  });

  const { data } = useQuery(
    ['GetNews', search?.city, search?.district, search?.ward],
    () => getNews({ ...search })
  );

  return (
    <>
      <Header />
      <Container className=' text-left mt-[100px] mb-[100px]'>
        <button
          className='mr-6 mb-[30px] bg-green-400 uppercase text-white w-[100px] h-[40px] rounded-[5px] float-right'
          onClick={() => {
            push(`/admin/dashboard/add-news`);
          }}
        >
          Add
        </button>
        <Filter onSearch={setSearch} />
        <table className='table-auto relative rounded-xl overflow-auto w-full'>
          <thead className='bg-'>
            <tr className='border-b dark:border-slate-600 font-medium p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'>
              <th>No</th>
              <th>Title</th>
              <th>Description</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {(data?.data?.news || []).map((item: News, index: number) => (
              <tr
                className='border-b dark:border-slate-600 p-4 pl-8 pt-0 pb-3 text-slate-400 dark:text-slate-200 text-left'
                key={index}
              >
                <td>{index + 1}</td>
                <td>{item?.title}</td>
                <td className='truncate max-w-[200px]'>{item?.description}</td>
                <td>
                  <img className='w-[100px]' src={item?.images?.[0]} />
                </td>
                <td>
                  <button
                    className='bg-orange-700 uppercase text-white w-[60px] h-[40px] rounded-[5px]'
                    onClick={() => {
                      push(`/admin/dashboard/edit-news/${item?._id}`);
                    }}
                  >
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Container>
    </>
  );
};

export default withPrivateRoute(Dashboard);
