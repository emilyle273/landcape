import { News } from "types"
import NewsItem from "./News"

const NewsList = ({ list }: {list: News[]}) => {
  return <ul className="flex justify-between flex-wrap">
    {list.map(item => {
      return <NewsItem news={item} key={item?._id}/>
    })}
  </ul>
}

export default NewsList