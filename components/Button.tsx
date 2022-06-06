import { memo } from 'react'

const Button = ({ ...rest, children }) => {
  <button
    className='bg-orange-700 uppercase text-white w-[105px] lg:h-[30px] h-[48px] rounded-[5px]'
    {...rest}
  >
    {children}
  </button>;
};

export default memo(Button);
