import Link from 'next/link';
import { useRouter } from 'next/router';
import { memo } from 'react';

interface MenuProps {
  list: Array<{
    name: string;
    onClick: () => void;
    url?: string;
  }>;
  className?: string;
}

const Menu = ({ list, className }: MenuProps) => {
  const { pathname } = useRouter();

  return (
    <ul className={`flex md:w-[40%] w-[50%] ${className}`}>
      {list.map((item) => (
        <li
          className={`cursor-pointer black uppercase text-xs md:text-base md:mx-[20px] ${
            pathname === item.url ? 'text-[blue]' : ''
          }`}
          key={item.name}
          onClick={item?.onClick}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default memo(Menu);
