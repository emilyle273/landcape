import { News } from 'types';
import Link from 'next/link';
import Image from 'next/image';

const NewsItem = ({ news }: { news: News }) => {
  const formatter = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',

    // These options are needed to round to whole numbers if that's what you want.
    //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
    //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
  });

  return (
    <article className='w-[370px] border rounded-[5px] relative mb-[10px] news-item'>
      <div className='p-2 flex justify-between'>
        <div className='w-[112px] h-[112px] rounded-[5px] relative'>
          <Image
            alt={`main-image-${news?._id}`}
            src={news.images?.[0] as string}
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='max-w-[229px]'>
          <p className='uppercase text-[blue] text-sm'>
            <Link href={`/news/${news?._id}`}>{news.title}</Link>
          </p>
          <p className='flex text-[10px] text-gray-800'>
            <span className='pr-[20px]'>{news.createAt}</span>
          </p>
          <p className='text-xs'>{news.description}</p>
          <div className='flex text-[10px] text-orange-700 flex-wrap justify-between items-center'>
            <div className='flex items-center'>
              <div className='relative w-[20px] height-[20px]'>
                <Image src='/icons/price.svg' layout='fill' alt='price-icon' />
              </div>
              <span>{formatter.format(news.price)}</span>
            </div>
            <div className='flex items-center'>
              <div className='relative w-[20px] height-[20px]'>
                <Image src='/icons/land.svg' layout='fill' alt='acreage-icon' />
              </div>
              <span>{news.acreage} m2</span>
            </div>
            <div className='flex items-center'>
              <div className='relative w-[20px] height-[20px]'>
                <Image src='/icons/map.svg' layout='fill' alt='map-icon' />
              </div>
              <address>{news.addressInString}</address>
            </div>
          </div>
        </div>
      </div>
      <span className='top-0 left-0 py-[3px] px-[6px] text-[10px] uppercase bg-red-700 text-white absolute rounded-[5px] block'>
        Hot
      </span>
    </article>
  );
};

export default NewsItem;
