import { Suspense } from "react";
import Trendy from "../../Components/Trendy/Trendy";

export default function Apps() {
  const trendingPromise = fetch(`/apps.json`).then((res) => res.json());
  return (
    <div className="my-10">
      <h1 className="text-4xl text-center"> Our All Applications</h1>
      <p className="text-center">
        Explore All Apps on the Market developed by us
      </p>
      {/* TODO */}
      {/* <div className="flex justify-between">
        <h1>{`(${})`} Apps Found</h1>
        <h1></h1>
      </div> */}
      <Suspense
        fallback={<span className="loading loading-spinner loading-xl"></span>}
      >
        <Trendy trendingPromise={trendingPromise} />
      </Suspense>
    </div>
  );
}
