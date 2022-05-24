
const Banner = ({title}: { title: string}) => {
  return <section className='bg-black relative h-[200px] bg-left-top slp-hero-wrapper'>
      <img alt="details-banner" className='absolute top-0 left-0 w-full h-full object-cover' src='https://skylandvietnam.vn/wp-content/uploads/2018/02/simcity-premier-homes2.jpg'/>
    <h2 className='z-[11] left-[50%] translate-x-[-50%] mx-auto text-lg text-white uppercase text-center absolute top-[50%]'>{title}</h2>
  </section>
}

export default Banner