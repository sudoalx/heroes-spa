import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    const lastPath = localStorage.getItem("lastPath") || "/";

    login("Alex");
    navigate(lastPath, { replace: true });
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-6 shadow rounded bg-base-100">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="email"
              id="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              type="password"
              id="password"
              placeholder="Enter your password"
            />
          </div>
          <button
            className="w-full bg-indigo-500 text-white font-bold py-2 px-4 rounded hover:bg-indigo-700"
            type="submit"
            onClick={(e) => onLogin(e)}
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
};
