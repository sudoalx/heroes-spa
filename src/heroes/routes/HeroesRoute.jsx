import React from "react";
import { Navbar } from "../../ui";
import { Navigate, Route, Routes } from "react-router-dom";
import { Dc, Marvel } from "../pages";
import { SearchScreen } from "../pages/SearchScreen";
import { HeroScreen } from "../pages/HeroScreen";

export const HeroesRoute = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="marvel" element={<Marvel />} />
        <Route path="dc" element={<Dc />} />

        <Route path="search" element={<SearchScreen />} />
        <Route path="hero/:id" element={<HeroScreen />} />

        <Route path="/" element={<Navigate to={"/marvel"} />} />
      </Routes>
    </>
  );
};
