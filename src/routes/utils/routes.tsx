import { lazy } from "react";

const Home = lazy(() => import("../../pages/Home"));
const Login = lazy(() => import("../../pages/Login"));
const Register = lazy(() => import("../../pages/Register"));
const Dashboard = lazy(() => import("../../pages/Dashboard"));
const Payment = lazy(() => import("../../pages/Payment"));

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
  {
    path: `/payments`,
    name: "Payments",
    //ToDo: Add private route
    Component: <Payment />,
  },
];
