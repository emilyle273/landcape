import { News } from 'types';
import Link from 'next/link';
import Image from 'next/image';

const NewsItem = ({ news }: { news: News }) => {
  return (
    <li className='w-[370px] border rounded-[5px] relative'>
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
          <p className='flex text-[10px] text-orange-400'>
            <span>
              <i className='fa-solid fa-plus text-xs'></i>
              {news.price}
            </span>
            <span>
              <i className='fa-solid fa-tags'></i>
              {news.acreage}
            </span>
            {/* <span><i className="fa-solid fa-tags"></i>{news.address}</span> */}
          </p>
        </div>
      </div>

      <span className='top-0 left-0 py-[3px] px-[6px] text-[10px] uppercase bg-red-500 text-white absolute rounded-[5px] block'>
        Tin vip
      </span>
    </li>
  );
};

export default NewsItem;
