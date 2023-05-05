import React from "react";
import { lazy } from "react";
import Login from "../../pages/Login";
import Register from "../../pages/Register";
import Dashboard from "../../pages/Dashboard";

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
  {
    path: `/login`,
    name: "Login",
    Component: <Login />,
  },
  {
    path: `/register`,
    name: "Register",
    Component: <Register />,
  },
  {
    path: `/dashboard`,
    name: "Dashboard",
    //ToDo: Add private route
    Component: <Dashboard />,
  },
];
