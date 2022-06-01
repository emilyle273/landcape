import Image from 'next/image'

const Banner = () => {
  return <div className="relative h-[500px] w-[100vw]">
    <Image layout='fill' alt='home-banner' src="https://skylandvietnam.vn/wp-content/uploads/2019/05/can-ho-the-park-residence-tong.jpg"/>
  </div>
}

export default Banner