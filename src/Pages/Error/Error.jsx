import { Link } from "react-router-dom";

export default function Error() {
  return (
    <div className="text-center ">
      <div className="flex justify-center">
        
      <img  src="/public/error-404.png" alt="" />
      </div>
      <h1 className="m-5 text-6xl">Oops,pages not found</h1>
      <p>The pages you are looking for is not available</p>
      <Link to={`/`} className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] m-5 py-5">
        Go Back !
      </Link>
    </div>
  );
}
