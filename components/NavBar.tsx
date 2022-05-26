import Link from 'next/link'
import { useRouter } from 'next/router'

interface MenuProps {
  list: Array<{
    name: string,
    onClick: () => void,
    url?: string
  }>
  className?: string
}

const Menu = ({ list, className }: MenuProps) => {
  const { pathname } = useRouter()

  return <ul className={`flex w-[40%] ${className}`}>
      {list.map(item => (
        <li className={`cursor-pointer black uppercase text-base mx-[20px] ${pathname === item.url ? 'text-blue-300' : ''}`} key={item.name} onClick={item?.onClick}>
          {item.name}
        </li>
      ))}
  </ul>
}

export default Menu