import { Option } from "types"
import { useQuery } from "react-query"
import { getDistricts} from 'services/address'
import { useMemo, useState, useEffect } from "react"
import Textbox from "components/Textbox"

const Filter = ({ onSearch } : {onSearch: Function}) => {
  const [wards, setWards] = useState([])
  const [currentDist, setCurrentDist] = useState('')
  const [city, setCity] = useState(48)
  const [ward, setWard] = useState()

  const { data } = useQuery(['GetDistricts', city], getDistricts)
  const province = data?.data?.province || {}

  const cities = useMemo(() => [
    {label: province?.name,
      value: province?.code
    }

  ], [province])

  const districts = useMemo(() => province?.districts?.map(item => ({
    label: item?.name,
      value: item?.code
  })), [province])

  // useEffect(() => {
  //   setCurrentDist(province?.districts?.[0]?.code)
  // }, [province])

  useEffect(() => {
    setWards(province?.districts?.find(item => item?.code?.toString() === currentDist)?.wards?.map(item => ({
      label: item?.name,
      value: item?.code
    })))
  }, [currentDist])

  return <div className='p-6 bg-white rounded-tr-[5px] mb-1'>
    <Textbox id='seach-input'/>
    <div className="flex items-center justify-between my-3">
      <select className="w-[200px] border border-gray-400 h-[30px] rounded-[5px]" value={cities?.[0]?.value}>
        {cities.map((item: Option) => (
          <option value={item.value} key={item.value}>{item.label}</option>
        ))}
      </select>
      <select className="w-[200px] border border-gray-400 h-[30px] rounded-[5px]" value={currentDist} onChange={e => setCurrentDist(e?.target?.value)}>
        <option value="" key="default">Select...</option>
        {districts?.map((item: Option) => (
          <option value={item.value} key={item.value}>{item.label}</option>
        ))}
      </select>
      <select className="w-[200px] border border-gray-400 h-[30px] rounded-[5px]" onChange={(e) => setWard(e?.target?.value)}>
        <option value="">Select...</option>
        {wards?.map((item: Option) => (
          <option value={item.value} key={item.value}>{item.label}</option>
        ))}
      </select>
      <button className="bg-orange-400 uppercase text-white w-[105px] h-[30px] rounded-[5px]" onClick={() => onSearch({city, district: currentDist, ward})}>Search</button>
    </div>
  </div>
}

export default Filter