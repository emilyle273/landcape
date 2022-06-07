import { memo } from 'react'
import Image from 'next/image'

const Banner = () => {
  return <div className="relative h-[500px] w-[100vw]">
    <Image objectFit="contain" layout='fill' alt='home-banner' src="banner.webp"/>
  </div>
}

export default memo(Banner)