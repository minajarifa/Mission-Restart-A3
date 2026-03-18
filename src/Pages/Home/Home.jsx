import Banner from "../../Layout/Banner/Banner";
import Trendy from "../../Components/Trendy/Trendy";
import { Suspense } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const trendingPromise = fetch(`/8.json`).then((res) => res.json());
  return (
    <div className="text">
      <Banner />
      <div className="my-10">
        <h1 className="text-4xl text-center">Trending Apps</h1>
        <p className="text-center">
          Explore All Trending Apps on the Market developed by us
        </p>
        <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
          <Trendy trendingPromise={trendingPromise} />
        </Suspense>
        <div className="flex justify-center ">
        <Link to={`/Apps`} className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] px-6">
        Show All 
      </Link>
      </div>
      </div>
    </div>
  );
}
