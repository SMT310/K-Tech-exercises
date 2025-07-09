import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Product from "../components/Product";
import WomenClothes from "../components/WomenClothes";
import MenClothes from "../components/MenClothes";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Home />}
      />
      <Route
        path="/about"
        element={<About />}
      />
      <Route
        path="/product"
        element={<Product />}
      >
        <Route
          path="women"
          element={<WomenClothes />}
        />
        <Route
          path="men"
          element={<MenClothes />}
        />
      </Route>
    </Routes>
  );
}
