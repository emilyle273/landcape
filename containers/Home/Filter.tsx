import {
  ChangeEvent,
  useMemo,
  useState,
  useEffect,
  Suspense,
  lazy,
  memo
} from 'react';

import { useQuery } from 'react-query';
import { getDistricts } from 'services/address';
import Textbox from 'components/Textbox';
import { useDebouncedCallback } from 'use-debounce';
import Spinner from 'components/Spinner';

const Options = lazy(() => import('../../components/Options'));

const Filter = ({ onSearch }: { onSearch: Function }) => {
  const [wards, setWards] = useState([]);
  const [currentDist, setCurrentDist] = useState('');
  const [city, setCity] = useState(48);
  const [ward, setWard] = useState();
  const [q, setQ] = useState('');

  const debouncedSearch = useDebouncedCallback((value) => {
    setQ(value);
    onSearch({ city, district: currentDist, ward, q: value });
  }, 500);

  const { data } = useQuery('GetDistricts', getDistricts);
  const province = data?.data?.province || {};

  const cities = useMemo(
    () => [{ label: province?.name, value: province?.code }],
    [province]
  );

  const districts = useMemo(
    () =>
      province?.districts?.map((item) => ({
        label: item?.name,
        value: item?.code,
      })),
    [province]
  );

  useEffect(() => {
    setWards(
      province?.districts
        ?.find((item) => item?.code?.toString() === currentDist)
        ?.wards?.map((item) => ({
          label: item?.name,
          value: item?.code,
        }))
    );
  }, [currentDist]);

  return (
    <div className='p-6 bg-white rounded-tr-[5px] mb-1'>
      <Textbox
        id='search-input'
        placeholder='Search'
        type='text'
        name='search'
        defaultValue={q}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          debouncedSearch(e?.target?.value)
        }
      />
      <div className='flex flex-wrap items-center justify-between my-3'>
        <Suspense fallback={<Spinner />}>
          <Options list={cities} value={cities?.[0]?.value} />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Options
            list={districts}
            value={currentDist}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setCurrentDist(e?.target?.value)}
          />
        </Suspense>
        <Suspense fallback={<Spinner />}>
          <Options list={wards} onChange={(e: ChangeEvent<HTMLSelectElement>) => setWard(e?.target?.value)} />
        </Suspense>
        <button
          className='bg-orange-700 uppercase text-white w-[105px] lg:h-[30px] h-[48px] rounded-[5px]'
          onClick={() => onSearch({ city, district: currentDist, ward, q })}
        >
          Search
        </button>
      </div>
    </div>
  );
};

export default memo(Filter);
