import { memo } from 'react'
import Image from 'next/image'
import banner from 'public/banner.webp'

const Banner = () => {
  return <div className="h-[500px] w-[full] banner-home"/>
  //   <picture>
  //   <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  //   <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  //   <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
  // </picture> 
  // </div>
}

export default memo(Banner)