import { Option } from 'types';

const Options = ({ list, ...rest }: { list: Option[] }) => (
  <select
    {...rest}
    className='w-[200px] border border-gray-400 lg:h-[30px] h-[48px] rounded-[5px]'
  >
    <option value="" key="default">Select...</option>
    {list?.map((item: Option, index) => (
      <option value={item.value} key={index}>
        {item.label}
      </option>
    ))}
  </select>
);

export default Options;
