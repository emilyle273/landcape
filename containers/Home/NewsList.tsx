import { News } from "types"
import NewsItem from "./News"

const NewsList = ({ list }: {list: News[]}) => {
  return <div className="flex justify-between flex-wrap">
    {list.map(item => {
      return <NewsItem news={item} key={item?._id}/>
    })}
  </div>
}

export default NewsList