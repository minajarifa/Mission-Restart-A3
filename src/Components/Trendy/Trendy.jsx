import { use } from "react"
import TrendySingle from "../TrendySingle"

export default function Trendy({trendingPromise}) {
    const trendingDta= use(trendingPromise)
    // console.log(trendingDta)
  return (
    <div className="grid grid-cols-3 gap-5 my-20">
        {
            trendingDta.map(trending=><TrendySingle key={trending?.id} trending={trending}></TrendySingle>)
        }
    </div>
  )
}
