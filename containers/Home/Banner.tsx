import { memo } from 'react'
import Image from 'next/image'
import banner from 'public/banner.webp'

const Banner = () => {
  return <div className="relative h-[500px] w-[100vw]">
    <Image objectFit="contain" layout='fill' alt='home-banner' src={banner} />
  </div>
}

export default memo(Banner)