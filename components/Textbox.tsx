import { memo } from "react";

const Textbox = ({ ...rest }) => {
  return (
    <>
      <label htmlFor={rest?.id}></label>
      <input
        {...rest}
        className='pl-[10px] h-[40px] !text-gray-800 border border-gray-400 w-full rounded-[5px]'
      />
    </>
  );
};

export default memo(Textbox);
