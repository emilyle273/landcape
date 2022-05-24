import Container from "../Container"
import Image from 'next/image'

const Banner = () => {
  return <div className="relative slp-hero-wrapper h-[600px]">
    <Image layout='fill' alt='home-banner' className='absolute w-full h-[600px] top-0 left-0' src="https://skylandvietnam.vn/wp-content/uploads/2019/05/can-ho-the-park-residence-tong.jpg"/>
    <div className="absolute top-[40%] w-full z-[11]">
    <Container>
      <h2 className="text-[32px] text-white uppercase font-bold">FavoriteLand</h2>
      <p className="text-white max-w-[310px]">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
      </p>
    </Container>
    </div>
  </div>
}

export default Banner