import { useState } from 'react';

interface TabsProps {
  list: Array<{
    name: string;
    value: string;
  }>;
}

const Tabs = ({ list }: TabsProps) => {
  const [currentTab, setCurrentTab] = useState(list[0]?.value);

  return (
    <ul className='bg-transparent flex'>
      {list.map((item) => (
        <li key={item.value}>
          <button
            key={item.value}
            onClick={() => setCurrentTab(item.value)}
            className={`cursor-poiter mr-4 px-4 ${
              currentTab === item.value
                ? 'py-[6px] border-b border-gray-400 rounded-t-[5px] text-blue-500 bg-white'
                : 'py-1 rounded-[5px] bg-[#0096FF] opacity-[0.7] text-white'
            }`}
          >
            <span>{item.name}</span>
          </button>
        </li>
      ))}
    </ul>
  );
};

export default Tabs;
