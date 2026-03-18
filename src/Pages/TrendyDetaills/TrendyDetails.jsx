import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TrendyDetails() {
  const [apps, setApps] = useState([]);
  const ids = useParams();
  const id = parseInt(ids.id);

  useEffect(() => {
    fetch(`/apps.json`)
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);
  const appData = apps.find((app) => app.id === id);
  console.log(appData);
  // const {
  //   companyName,
  //   description,
  //   downloads,
  //   image,
  //   ratingAvg,
  //   ratings,
  //   reviews,
  //   size,
  //   title,
  // } = appData;
  return (
    <div>
      {/* big card */}
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row">
          <img src={appData?.image} className="h-full rounded-lg shadow-2xl " />
          <div>
            <h1 className="text-5xl font-bold">
              {appData?.title} : {appData?.description}
            </h1>
            <p className="py-6">Developed By : {appData?.companyName}</p>
            <hr />
            {/*small card  */}
            <div className="flex justify-around mt-10 text-center">
              <div>
                <div className="flex justify-center">
                  <img src="/public/icon-downloads.png" alt="" />
                </div>
                <p>Downloads</p>
                <h1 className="text-3xl">{appData?.downloads}</h1>
              </div>
              <div>
                <div className="flex justify-center">
                  <img src="/public/icon-ratings.png" alt="" />
                </div>
                <p>Average Ratings</p>
                <h1 className="text-3xl">{appData?.ratingAvg}</h1>
              </div>
              <div>
                <div className="flex justify-center">
                  <img src="/public/icon-review.png" alt="" />
                </div>
                <p>Total Reviews</p>
                <h1 className="text-3xl">{appData?.reviews}</h1>
              </div>
            </div>

            <button className="text-white btn bg-[#00827A] px-5  m-10">
              Install Now ({appData?.ratingAvg}) MB
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <hr />
      <div>
         <h1>Ratings</h1>
      </div>
    </div>
  );
}
