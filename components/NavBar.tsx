import Link from 'next/link'

interface MenuProps {
  list: Array<{
    name: string,
    url: string,
  }>
}

const Menu = ({ list }: MenuProps) => {
  return <ul className="flex justify-between w-[40%]">
      {list.map(item => (
        <li className="black uppercase text-base" key={item.name}>
          <Link href={item.url}>{item.name}</Link>
        </li>
      ))}
  </ul>
}

export default Menu