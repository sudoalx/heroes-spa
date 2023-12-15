import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

export const AuthProvider = ({ children }) => {
  const init = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return {
      logged: !!user,
      user: user,
    };
  };

  const [authState, authDispatch] = useReducer(authReducer, {}, init);

  const login = (name = "") => {
    const user = { id: "123ABC", name: "Alex" };

    const action = {
      type: types.login,
      payload: user,
    };

    localStorage.setItem("user", JSON.stringify(user));

    authDispatch(action);
  };

  const logout = () => {
    localStorage.removeItem("user");
    const action = {
      type: types.logout,
    };
    authDispatch(action);
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
