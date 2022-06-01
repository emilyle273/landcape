import Image from 'next/image'

const Banner = () => {
  return <div className="relative h-[600px]">
    <Image layout='fill' sizes="100vw" alt='home-banner' className='absolute w-full h-[600px] top-0 left-0' src="https://skylandvietnam.vn/wp-content/uploads/2019/05/can-ho-the-park-residence-tong.jpg"/>
  </div>
}

export default Banner