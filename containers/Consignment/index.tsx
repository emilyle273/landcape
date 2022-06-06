import {
  useEffect,
  useMemo,
  useState,
  useRef,
  useCallback,
  Suspense,
  ChangeEvent,
} from 'react';
import { useQuery, useMutation } from 'react-query';
import { getDistricts } from 'services/address';
import Textbox from 'components/Textbox';
import { Option, News } from 'types';
import Spinner from 'components/Spinner';
import Uploader from 'components/Uploader';
import { NotificationManager } from 'react-notifications';
import { addNews, getNewsById, editNews } from 'services/news';

import Textarea from 'components/Textarea';
import Map from 'components/Map';
import { useRouter } from 'next/router';
import { DEFAULT_LOCATION, DN_CODE } from 'constants/index';
import Options from 'components/Options';

const Consignment = () => {
  const mapRef = useRef(null);
  const { query, push } = useRouter();
  const id = query?.id;
  const [errors, setErrors] = useState();
  const [address, setAddress] = useState({
    city: DN_CODE,
    district: '',
    ward: '',
  });
  const [images, setImages] = useState([]);
  const [values, setValues] = useState<News>({
    title: '',
    price: '',
    acreage: '',
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

  const { data } = useQuery('GetDistricts',getDistricts);
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
        push('/');
      },
    }
  );

  const handleValidate = useCallback(() => {
    const err = {
      price: !values?.price ? 'Please enter price' : '',
      acreage: !values?.acreage ? 'Please enter acreage' : '',
      title: !values?.title ? 'Please enter title' : '',
      images: !images?.length ? 'Please upload image' : '',
      district: !address?.district ? 'Please select district' : '',
      ward: !address?.ward ? 'Please select ward' : '',
    };

    setErrors(err);

    return err;
  }, [values, images, address]);

  const handleSubmit = () => {
    const err = handleValidate();
    if (Object.keys(err).some((key) => !!(err as any)[key])) {
      return;
    }
    const { lat, lng } = mapRef?.current?.location || {};
    const { district, ward } = address;
    const districtStr = districts.find(
      (item: Option) => item?.value === +district
    )?.label;
    const wardStr = wards.find((item: Option) => item?.value === +ward)?.label;

    mutate({
      title: values?.title,
      images: images?.map((item) => item?.file),
      city: address?.city,
      district,
      ward,
      lat,
      lng,
      description: values?.description,
      addressInString: `${wardStr} - ${districtStr}`,
      price: values?.price,
      acreage: values?.acreage,
    });
  };

  return (
    <Suspense>
      <section className='px-6 bg-white mx-auto pb-[100px]'>
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
          <Textbox
            placeholder='Price'
            name='price'
            value={values?.price}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, price: e?.target?.value })
            }
          />
          <p className='text-[red]'>{errors?.price}</p>
        </div>
        <div className='mb-[30px]'>
          <Textbox
            placeholder='Acreage'
            name='acreage'
            value={values?.acreage}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setValues({ ...values, acreage: e?.target?.value })
            }
          />
          <p className='text-[red]'>{errors?.acreage}</p>
        </div>
        <div className='mb-[30px]'>
          <div className='flex items-baseline justify-between my-3'>
            <Suspense fallback={<Spinner />}>
              <Options list={cities} value={cities?.[0]?.value} />
            </Suspense>
            <div>
              <Suspense>
                <Options
                  list={districts}
                  value={address?.district}
                  onChange={useCallback((e: ChangeEvent<HTMLSelectElement>) => {
                    setAddress({
                      city: DN_CODE,
                      district: e?.target?.value,
                      ward: '',
                    });
                  }, [])}
                />
              </Suspense>
              <p className='text-[red]'>{errors?.district}</p>
            </div>
            <div>
              <Suspense>
                <Options
                  list={wards}
                  onChange={useCallback(
                    (e: ChangeEvent<HTMLSelectElement>) => setAddress({ ...address, ward: e?.target?.value }),
                    [address]
                  )}
                  value={address?.ward}
                />
              </Suspense>
              <p className='text-[red]'>{errors?.ward}</p>
            </div>
          </div>
          <p className='text-[red]'>{errors?.password}</p>
        </div>
        {((!!id && images?.length) || !id) && (
          <Uploader images={images} setImages={setImages} />
        )}
        <div className='my-[30px]'>
          <Textarea
            placeholder='Description'
            name='description'
            value={values?.description}
            onChange={useCallback(
              (e: React.ChangeEvent<HTMLInputElement>) =>
                setValues({ ...values, description: e?.target?.value }),
              [values]
            )}
          />
          <p className='text-[red]'>{errors?.description}</p>
        </div>
        {((!!id && values?.location) || !id) && (
          <Map
            draggable
            ref={mapRef}
            location={
              !!id
                ? { ...values?.location }
                : { lat: DEFAULT_LOCATION.lag, lng: DEFAULT_LOCATION.lng }
            }
          />
        )}
        <button
          className='mt-[30px] bg-orange-700 uppercase text-white w-full h-[40px] rounded-[5px]'
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? <Spinner /> : 'Submit'}
        </button>
      </section>
    </Suspense>
  );
};

export default Consignment;
