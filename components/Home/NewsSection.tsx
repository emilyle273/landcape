import Container from "components/Container"
import NewsList from "./NewsList"
import Tabs from "./Tabs"
import Filter from "./Filter"
import { useState } from "react"
import { useQuery } from "react-query"
import { getNews } from "services/news"


const NewsSection = () => {
  const [search, setSearch] = useState({
    city: '48',
    district: '',
    ward: ''
  })
  
  const { data } = useQuery(['GetNews', search?.city, search?.district, search?.ward], () => getNews({...search})) 
  // console.log(data)


  // const newsList = data?.data?.news || {}

  // console.log('res', res)


  return <section className="bg-gray-200 relative w-full pb-[30px]">
    <Container className=" z-[11] absolute left-[50%] top-[-100px] translate-x-[-50%]">
      <Tabs list={[{
        name: 'Buy and sell land',
        value: 'sell'
      }, 
        {
          name: 'Project',
          value: 'project'
        },
        {
          name: 'Lease',
          value: 'lease'
        },
        {
          name: 'Consignment',
          value: 'consignment'
        }
      ]}
      
      />
      <Filter onSearch={setSearch}/>
      </Container>
       <Container className=' bg-transparent pt-[60px]'>
         <div className=' bg-white p-6 rounded-[5px]'>
         <NewsList
          list={ data?.data?.news || []}
        />
         </div>
            
       </Container>
       
    </section>
}

export default NewsSection