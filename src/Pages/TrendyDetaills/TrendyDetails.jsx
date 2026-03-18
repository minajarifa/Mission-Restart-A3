import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function TrendyDetails() {
    const [apps,setApps]=useState([])
  const ids = useParams();
  const id = parseInt(ids.id);

  useEffect(() => {
    fetch(`/apps.json`)
      .then((res) => res.json())
      .then((data) => setApps(data));
  }, []);
  const appData = apps.find(app=>app.id===id)
  console.log(appData)
  return (
    <div>
      {/*  */}
      <div className="min-h-screen hero bg-base-200">
        <div className="flex-col hero-content lg:flex-row">
          <img
            src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      {/*  */}
    </div>
  );
}
