import Image from 'next/image'

const Banner = () => {
  return <div className="relative h-[500px] w-[100vw]">
    <Image layout='fill' alt='home-banner' src="https://skylandvietnam.vn/wp-content/uploads/2018/02/simcity-premier-homes2.jpg"/>
  </div>
}

export default Banner