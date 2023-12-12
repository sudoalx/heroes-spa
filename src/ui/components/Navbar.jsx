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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <NavLink to={"marvel"}>Marvel</NavLink>
            </li>
            <li>
              <NavLink to={"dc"}>DC</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <NavLink to={"/"} className="btn btn-ghost text-xl">
          Heroes App
        </NavLink>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
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

// className={({ isActive }) => ` ${isActive ? "active" : ""}`}
