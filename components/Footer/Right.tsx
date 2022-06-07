import { memo } from 'react';

const Right = () => (
  <div className='flex flex-col items-baseline'>
    <p className='text-white mb-3'>CONTACT</p>
    <input
      className='pl-3 mb-3 text-[10px] w-[258px] h-[30px] rounded-[4px] text-gray-800  placeholder-gray-500 bg-white'
      placeholder='Fullname'
    />
    <input
      className='pl-3 mb-3 text-[10px] w-[258px] h-[30px] rounded-[4px] text-gray-800 placeholder-gray-500 bg-white'
      placeholder='Phone'
    />
    <input
      className='pl-3 mb-3 text-[10px] w-[258px] h-[30px] rounded-[4px] text-gray-800 placeholder-gray-500 bg-white'
      placeholder='Email'
    />
    <textarea
      rows={4}
      className='pl-3 mb-3 text-[10px] w-[258px] rounded-[4px] text-gray-800 placeholder-gray-500 bg-white'
      placeholder='Phone'
    />
    <button className='text-xs text-white rounded-[5px] bg-orange-700 w-[90px] h-[30px]'>
      Send out
    </button>
  </div>
)

export default memo(Right);
