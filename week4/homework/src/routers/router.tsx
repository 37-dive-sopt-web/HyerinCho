import { createBrowserRouter, Navigate } from "react-router";

import Join from "@pages/auth/join/join";
import Login from "@pages/auth/login/login";
import Error from "@pages/error/error";
import Member from "@pages/member/member";
import My from "@pages/my/my";

import Layout from "./layout";
import { routePath } from "./path";

export const router = createBrowserRouter([
  {
    path: routePath.LAYOUT,
    element: <Layout />,
    ErrorBoundary: Error,
    children: [
      {
        index: true,
        element: <Navigate to={routePath.LOGIN} replace />,
      },
      {
        path: routePath.LOGIN,
        element: <Login />,
      },
      {
        path: routePath.JOIN,
        element: <Join />,
      },
      {
        path: routePath.MY,
        element: <My />,
      },
      {
        path: routePath.MEMBERS,
        element: <Member />,
      },
    ],
  },
]);
