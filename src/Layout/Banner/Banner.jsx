import { BsGooglePlay } from "react-icons/bs";
import { SiAppstore } from "react-icons/si";

export default function Banner() {
  return (
    <div>
      {/* header section */}
      <div className="pt-5 hero bg-base-200">
        <div className="w-full text-center hero-content">
          <div className="w-full ">
            <h1 className="text-5xl font-bold">We Build</h1>
            <h1 className="text-5xl font-bold">
              <span className="text-purple-600">Productive</span> Apps
            </h1>
            <p className="w-full py-5 ">
              At HERO.IO , we craft innovative apps designed to make everyday
              life simpler, smarter, and more exciting. <br /> Our goal is to
              turn your ideas into digital experiences that truly make an
              impact.
            </p>
            <a
              href="https://play.google.com/store/games?hl=en"
              className="px-5 m-5 btn btn-primary"
            >
              <BsGooglePlay className="text-xl " />
              Google Play
            </a>
            <a
              href="https://www.apple.com/app-store/"
              className="px-5 m-5 btn btn-primary"
            >
              <SiAppstore className="text-xl text-blue-500" />
              App Store
            </a>
          </div>
        </div>
      </div>
      {/* image section */}
      <div>
        <div className="flex justify-center">
          <img src="hero.png" alt="" />
        </div>
      </div>
      {/* trusted section */}
      <div className="bg-gradient-to-tr from-[#632EE3] to-[#9F62F2] text-[#FFFFFF] py-14">
        <h1 className="text-4xl text-center">
          Trusted By Millions , build for you
        </h1>
        <div className="flex justify-around mt-10">
          <div>
            <h6 className="text-xs">Total Downloads</h6>
            <h1 className="text-5xl">29.6M</h1>
            <p className="text-xs">21% More than Last Month</p>
          </div>
          <div>
            <h6 className="text-xs">Total Reviews</h6>
            <h1 className="text-5xl">906K</h1>
            <p className="text-xs">46% More than Last Month</p>
          </div>
          <div>
            <h6 className="text-xs">Active Apps</h6>
            <h1 className="text-5xl">132+</h1>
            <p className="text-xs">31 More Will Last</p>
          </div>
        </div>
      </div>
    </div>
  );
}
