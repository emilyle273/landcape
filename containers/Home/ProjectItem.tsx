import { memo } from 'react'
import Link from 'next/link';
import Image from 'next/image';

interface ProjectProps {
  item: {image: string, title: string, city: string, id: string}
}

const Project = ({ item }: ProjectProps) => {
  <article className='w-[260px] bg-white' key={item.id}>
    <div className='relative w-[260px] h-[150px]'>
      <Image
        src={item.image}
        alt={`project-${item?.title}`}
        layout='fill'
      />
      <span className='absolute left-[50%] text-white w-[107px] text-[10px] bg-[#0096FF] p-2 block top-[100%]  translate-x-[-50%] translate-y-[-50%]'>
        {item.city}
      </span>
    </div>
    <h3 className='uppercase py-[25px] px-2'>{item.title}</h3>
    <p className='border-t border-gray-400 py-3 text-[10px] text-orange-700'>
      <Link href={`/news/${item?.id}`}>See details</Link>
    </p>
  </article>
}

export default memo<ProjectProps>(Project) 