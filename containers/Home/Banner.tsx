import Image from 'next/image'

const Banner = () => {
  return <div className="relative h-[500px] w-[100vw]">
    <Image objectFit="contain" layout='fill' alt='home-banner' src="https://skylandvietnam.vn/wp-content/uploads/2019/04/04022018172810.jpg"/>
  </div>
}

export default Banner