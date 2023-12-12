import { Route, Routes } from "react-router-dom";
import { Login } from "../auth/pages/Login";
import { HeroesRoute } from "../heroes/routes/HeroesRoute";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/*" element={<HeroesRoute />} />
    </Routes>
  );
};
