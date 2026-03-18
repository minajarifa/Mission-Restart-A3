import { Link } from "react-router-dom";

export default function TrendySingle({ trending }) {
  console.log(trending);
  const { title, downloads, ratings, image, description,id } = trending;
  return (
    <Link to={`/TrendyDetails/${id}`}>
    <div className="shadow-sm card bg-base-100 w-96">
      <figure>
        <img src={image} alt="photos" className="h-40"/>
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title} :  {description}
          
        </h2>
        <div className="justify-around card-actions">
          <div className="badge badge-outline"><img className="h-5" src="/icon-downloads.png" alt="" />{downloads}</div>
          <div className="badge badge-outline"><img className="h-5" src="/icon-ratings.png" alt="" />{ratings?.length}</div>
        </div>
      </div>
    </div>
    </Link>
  );
}
