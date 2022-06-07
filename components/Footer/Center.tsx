import { memo } from 'react';

const CenterPart = () => (
  <div>
    <p className='text-white'>FAST CONNECTION</p>
    <ul className='text-gray-500 text-[10px]'>
      <li
        className='border-b border-dotted border-gray-400 py-2'
        key='introduction'
      >
        Introduction
      </li>
      <li className='border-b border-dotted border-gray-400 py-2' key='sell'>
        Sell and buy lands
      </li>
      <li className='border-b border-dotted border-gray-400 py-2' key='Lease'>
        Lease
      </li>
      <li className='py-3' key='Real'>
        Real estate consignment
      </li>
    </ul>
  </div>
)

export default memo(CenterPart);
