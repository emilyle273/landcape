import { useEffect, useMemo, useState, useRef } from 'react';
import { useQuery, useMutation } from 'react-query';
import { getDistricts } from 'services/address';
import Textbox from 'components/Textbox';
import { Option, News } from 'types';
import Spinner from 'components/Spinner';
import Uploader from 'components/Uploader';
import { NotificationManager } from 'react-notifications';
import { addNews, getNewsById, editNews } from 'services/news';

import withPrivateRoute from 'components/withPrivateRoute';
import Textarea from 'components/Textarea';
import Map from 'components/Map';
import { useRouter } from 'next/router';
import Header from 'components/Admin/Layout';

const AddNews = () => {
  const mapRef = useRef(null);
  const { query, push } = useRouter();
  const id = query?.id;
  const [errors, setErrors] = useState();
  const [address, setAddress] = useState({
    city: '48',
    district: '',
    ward: '',
  });
  const [images, setImages] = useState([]);
  const [values, setValues] = useState<News>({
    title: '',
    price: '',
    acreage: '',
    price: '',
    description: '',
  });

  const [wards, setWards] = useState([]);

  const { a } = useQuery(
    ['GetNewsDetails', id],
    !!id ? () => getNewsById(id) : () => {},
    {
      onSuccess: (res) => {
        const detail = res?.data?.data?.blog || {};

        setValues({ ...detail });
        setAddress({ ...detail?.address });
        setImages(
          detail?.images
            ? detail?.images?.map((item: string) => ({
                source: item,
              }))
            : []
        );
      },
      enabled: !!id,
    }
  );

  const { data } = useQuery(['GetDistricts', address?.city], () =>
    getDistricts({ code: address?.city })
  );
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
    if (province?.districts) {
      setWards(
        province?.districts
          ?.find((item) => item?.code?.toString() === address?.district)
          ?.wards?.map((item) => ({
            label: item?.name,
            value: item?.code,
          }))
      );
    }
  }, [address?.district, province?.districts]);

  const { mutate, isLoading } = useMutation(
    id ? 'EDITNEWS' : 'ADDNEWS',
    !!id ? (data) => editNews(data, id) : addNews,
    {
      onError: (err) => {
        NotificationManager.error(err?.response?.data?.message, null, 3000);
      },
      onSuccess: () => {
        push('/admin/dashboard');
      },
    }
  );

  const handleValidate = () => {
    const err = {
      title: !values?.title ? 'Please enter title' : '',
      images: !images?.length ? 'Please upload image' : '',
      district: !address?.district ? 'Please select district' : '',
      ward: !address?.ward ? 'Please select ward' : '',
    };

    setErrors(err);

    return err;
  };

  const handleSubmit = () => {
    const err = handleValidate();
    if (Object.keys(err).some((key) => !!(err as any)[key])) {
      return;
    }
    const { lat, lng } = mapRef?.current?.location || {};
    mutate({
      title: values?.title,
      images: images?.map((item) => item?.file),
      city: address?.city,
      district: address?.district,
      ward: address?.ward,
      lat,
      lng,
      description: values?.description,
    });
  };

  return (
    <>
      <Header />
      <section className='md:max-w-[80%] mx-auto mt-[200px] mb-[100px]'>
        <div className='mb-[30px]'>
          <Textbox
            placeholder='Title'
            name='title'
            value={values?.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, title: e?.target?.value })
            }
          />
          <p className='text-[red]'>{errors?.title}</p>
        </div>
        <div className='mb-[30px]'>
          <div className='flex items-baseline justify-between my-3'>
            <select
              className='w-[200px] border border-gray-400 h-[30px] rounded-[5px]'
              value={cities?.[0]?.value}
            >
              {cities.map((item: Option) => (
                <option value={item.value} key={item.value}>{item.label}</option>
              ))}
            </select>
            <div>
              <select
                className='w-[200px] border border-gray-400 h-[30px] rounded-[5px]'
                value={address?.district}
                onChange={(e) => {
                  setAddress({
                    city: '48',
                    district: e?.target?.value,
                    ward: '',
                  });
                }}
              >
                <option value='' key="default">Select...</option>
                {districts?.map((item: Option) => (
                  <option value={item.value} key={item.value}>{item.label}</option>
                ))}
              </select>
              <p className='text-[red]'>{errors?.district}</p>
            </div>
            <div>
              <select
                className='w-[200px] border border-gray-400 h-[30px] rounded-[5px]'
                onChange={(e) =>
                  setAddress({ ...address, ward: e?.target?.value })
                }
                value={address?.ward}
              >
                <option value='default'>Select...</option>
                {wards?.map((item: Option) => (
                  <option value={item.value} key={item.value}>{item.label}</option>
                ))}
              </select>
              <p className='text-[red]'>{errors?.ward}</p>
            </div>
          </div>
          <p className='text-[red]'>{errors?.password}</p>
        </div>
        {((!!id && images?.length) || !id) && (
          <Uploader images={images} setImages={setImages} />
        )}
        <div className='mb-[30px]'>
          <Textarea
            placeholder='Description'
            name='description'
            value={values?.description}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, description: e?.target?.value })
            }
          />
          <p className='text-[red]'>{errors?.title}</p>
        </div>
        {((!!id && values?.location) || !id) && (
          <Map
            draggable
            ref={mapRef}
            location={
              !!id
                ? { ...values?.location }
                : { lat: 16.004896075277347, lng: 108.19869219726561 }
            }
          />
        )}
        <button
          className='mt-[30px] bg-orange-400 uppercase text-white w-full h-[40px] rounded-[5px]'
          onClick={handleSubmit}
        >
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </section>
    </>
  );
};

export default withPrivateRoute(AddNews);
