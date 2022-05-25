import Container from "../Container"
import Image from 'next/image'

const Banner = () => {
  return <div className="relative slp-hero-wrapper h-[600px]">
    <Image layout='fill' sizes="100vw" alt='home-banner' className='absolute w-full h-[600px] top-0 left-0' src="https://skylandvietnam.vn/wp-content/uploads/2019/05/can-ho-the-park-residence-tong.jpg"/>
    <div className="absolute top-[40%] w-full z-[11]">
    <Container>
      <h2 className="text-[32px] text-white uppercase font-bold">FavoriteLand</h2>
    </Container>
    </div>
  </div>
}

export default Banner