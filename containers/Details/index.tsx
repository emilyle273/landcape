import Container from "components/Container"
import Banner from './Banner'
import { News } from "types"
import Map from 'components/Map'

const Details = ({ land } : { land: News }) => {

return <>
  <Banner title={land?.title}/>
  <section>
    <Container className=' p-[25px] mt-[-50px]'>
      <img className="w-full" src={land?.image?.[0]} alt="detail-1"/>
      <p className='my-[30px]'>{land?.description}</p>
      <img className="w-full" src={land?.image?.[1]}  alt="detail-1"/>
      {land?.location && <Map location={land?.location} draggable={false}/>}
    </Container>
  </section>
  </>
}

export default Details