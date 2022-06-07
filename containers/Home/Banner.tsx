import { memo } from 'react'
import Image from 'next/image'
import banner from 'public/banner.webp'

const Banner = () => {
  return <div className="relative h-[500px] w-[100vw] banner-home"/>
}

export default memo(Banner)