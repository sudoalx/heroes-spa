import { IoIosLogOut, IoIosSettings } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const onLogut = () => {
    navigate("/login", { replace: true });
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        {/* large screens */}
        <div className="hidden md:block">
          <NavLink to={"/"} className="btn btn-ghost text-xl">
            Home
          </NavLink>
        </div>
        {/* end large screens */}

        {/* small screens */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"marvel"}>Marvel</NavLink>
            </li>
            <li>
              <NavLink to={"dc"}>DC</NavLink>
            </li>
            <li>
              <NavLink to={"search"}>Search</NavLink>
            </li>
          </ul>
        </div>
        {/* end small screens */}
      </div>

      <div className="navbar-center">
        {/* large screens */}
        <div className="form-control lg:mx-4 lg:w-64 hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {/* end large screens */}
        {/* small screens */}
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          Heroes App
        </NavLink>
        {/* end small screens */}
      </div>
      <div className="navbar-end">
        {/* large screens */}
        <ul
          tabIndex={0}
          className="navbar-nav md:flex md:flex-row lg:gap-4 hidden"
        >
          <li className="">
            <NavLink to={"marvel"} className="btn btn-ghost">
              Marvel
            </NavLink>
          </li>
          <li className="">
            <NavLink to={"dc"} className="btn btn-ghost">
              DC
            </NavLink>
          </li>
          <li>
            <NavLink to={"search"} className="btn btn-ghost">
              Search
            </NavLink>
          </li>
        </ul>

        {/* end large screens */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Avatar" src="/assets/avatar.svg" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a>
                <FaUser className="inline-block" />
                Profile
              </a>
            </li>
            <li>
              <a>
                <IoIosSettings className="inline-block" />
                Settings
              </a>
            </li>
            <li>
              <button onClick={onLogut}>
                <IoIosLogOut className="inline-block" />
                Logout
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
