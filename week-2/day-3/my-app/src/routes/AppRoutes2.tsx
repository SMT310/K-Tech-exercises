import React, { type ReactNode } from "react";
import Home from "../components/Home";
import About from "../components/About";
import Product from "../components/Product";
import WomenClothes from "../components/WomenClothes";
import MenClothes from "../components/MenClothes";
import Notfound from "../components/Notfound";
import { Route, Routes } from "react-router-dom";

interface RouteConfig {
  path: string;
  element: ReactNode;
  children?: RouteConfig[];
}

const paths: RouteConfig[] = [
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  {
    path: "/product",
    element: <Product />,
    children: [
      { path: "women", element: <WomenClothes /> },
      { path: "men", element: <MenClothes /> },
    ],
  },
  { path: "*", element: <Notfound /> },
];

export default function AppRoutes2() {
  // Hàm renderRoutes với type annotation
  const renderRoutes = (routes: RouteConfig[]): React.ReactNode[] =>
    routes.map(({ path, element, children }, index) => (
      <Route
        key={index}
        path={path}
        element={element}
      >
        {children && renderRoutes(children)}
      </Route>
    ));

  return <Routes>{renderRoutes(paths)}</Routes>;
}
