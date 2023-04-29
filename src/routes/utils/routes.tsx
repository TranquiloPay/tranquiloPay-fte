import React from "react";
import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"));

type RouteType = {
  path: string;
  name?: string;
  Component: JSX.Element;
};

export const routes: RouteType[] = [
  {
    path: ``,
    name: "Home",
    Component: <Home />,
  },
];
