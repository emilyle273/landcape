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
    <li className='w-[370px] border rounded-[5px] relative mb-[10px]'>
      <div className='p-2 flex justify-between'>
        <div className='w-[112px] h-[112px] rounded-[5px]'>
          <Image
            alt={`main-image-${news?._id}`}
            src={news.images?.[0] as string}
            width="112"
            height="112"
          />
        </div>
        <div className='max-w-[229px]'>
          <p className='uppercase text-blue-400 text-sm'>
            <Link href={`/news/${news?._id}`}>{news.title}</Link>
          </p>
          <p className='flex text-[10px] text-gray-400'>
            <span className='pr-[20px]'>{news.createAt}</span>
          </p>
          <p className='text-xs'>{news.description}</p>
          <p className='flex text-[10px] text-orange-400 flex-wrap justify-between items-center'>
            <span className='flex items-center'>
              <Image src='/icons/price.svg' width="20" height="20"/>
              {formatter.format(news.price)}
            </span>
            <span className='flex items-center'>
              <Image src='/icons/land.svg' width="20" height="20"/>
              {news.acreage} m2
            </span>
            <span className='flex items-center'><Image src='/icons/map.svg' width="20" height="20"/>{news.addressInString}</span>
          </p>
        </div>
      </div>
      <span className='top-0 left-0 py-[3px] px-[6px] text-[10px] uppercase bg-red-500 text-white absolute rounded-[5px] block'>
        Hot
      </span>
    </li>
  );
};

export default NewsItem;
