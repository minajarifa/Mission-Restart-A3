import { LiaGithub } from "react-icons/lia";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  const navLink = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/Apps"}>Apps</NavLink>
      </li>
      <li>
        <NavLink to={"/Installation"}> Installation</NavLink>
      </li>
    </>
  );
  return (
    <div className="shadow-sm navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link to={'/'} className="text-xl text-purple-700 btn btn-ghost">
          <img className="h-10" src="/logo.png" alt="Logo" />
          HERO.OI
        </Link>
      </div>
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 menu menu-horizontal">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <Link
          to={`https://github.com/minajarifa/Mission-Restart-A3`}
          className="btn bg-gradient-to-tr from-[#632EE3] to-[#9F62F2]"
        >
          <LiaGithub className="text-xl" />
          Contribute
        </Link>
      </div>
    </div>
  );
}
