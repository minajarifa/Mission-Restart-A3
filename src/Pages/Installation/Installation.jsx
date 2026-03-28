import { useLoaderData } from "react-router-dom";
import { getWantedIdeasID } from "../../localStorage";

export default function Installation() {
  const app = useLoaderData();
  const wantedIds = getWantedIdeasID();
  const installedApps = app.filter((ap) => wantedIds.includes(ap.id));
  console.log(installedApps);

  return (
    <div className="bg-Linear">
      {/* text */}
      <h2 className="m-5 text-6xl text-center">Your Installated Apps</h2>
      <p className="m-5 text-center">
        Explore All Trending Apps on the Market devloped by us
      </p>
      {/*  */}
      <div className="flex justify-between my-5">
        <h1>{wantedIds?.length} Apps Found</h1>
        <select defaultValue="Medium" className="select select-md">
          <option disabled={true}>Medium</option>
          <option>Sort by size </option>
        </select>
      </div>
      {/* app installation */}
      <div>
        {installedApps.map((installedApp) => (
          <div key={installedApp.id} className="flex justify-between">
            {/* card start */}
            <div className="flex">
              <img src={installedApp.image} alt="" className="w-20 h-20 mx-5"/>
              <div>
                <h1>Rorest: {installedApp.title}</h1>
                <div className="card-actions">
                  <div className="badge badge-outline">
                    <img className="h-5" src="/icon-downloads.png" alt="" />
                    {installedApp.downloads}
                  </div>
                  <div className="badge badge-outline">
                    <img className="h-5" src="/icon-ratings.png" alt="" />
                    {installedApp.ratings?.length}
                  </div>
                </div>
              </div>
            </div>
            {/* card end */}
            <button className="text-white btn bg-[#00827A] px-5  m-10">
              uninstall
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
