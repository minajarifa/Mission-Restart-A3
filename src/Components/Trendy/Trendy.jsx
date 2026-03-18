import { use } from "react";
import TrendySingle from "../TrendySingle";

export default function Trendy({ trendingPromise }) {
  const trendingDta = use(trendingPromise);
  // console.log(trendingDta)
  return (
    <div className="grid gap-5 my-20 lg:grid-cols-4">
      {trendingDta.map((trending) => (
        <TrendySingle key={trending?.id} trending={trending}></TrendySingle>
      ))}
    </div>
  );
}
