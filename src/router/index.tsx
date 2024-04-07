import { useRoutes } from "react-router-dom";
import React from "react";

import Layout from "../layout";

import Login from "@/pages/Login";
import Signup from "@/pages/Signup";
import Page404 from "@/pages/404";

const Index = React.lazy(() => import("../pages/Index"));
const DataScreen = React.lazy(() => import("../pages/DataScreen"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const DataLive = React.lazy(() => import("../pages/Data/Live"));
const DataContent = React.lazy(() => import("../pages/Data/Content"));
const DataMultiple = React.lazy(() => import("../pages/Data/Multiple"));

const OrderEdit = React.lazy(() => import("../pages/Order/Edit"));
const OrederList = React.lazy(() => import("../pages/Order/List"));

const SpuEdit = React.lazy(() => import("../pages/Spu/Edit"));
const SpuList = React.lazy(() => import("../pages/Spu/List"));
const SpuDetail = React.lazy(() => import("../pages/Spu/Detail"));

const UserList = React.lazy(() => import("../pages/User/List"));
const UserCreateUser = React.lazy(() => import("../pages/User/Createuser"));
const UserAuth = React.lazy(() => import("../pages/User/Auth"));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const Aboutus = React.lazy(() => import("../pages/Aboutus"));
const Problem = React.lazy(() => import("../pages/Problem"));
const GlodMap = React.lazy(() => import("../pages/Map"));
const Like = React.lazy(() => import("../pages/Like"));

export const routes = [
  //以下为Layout路由
  {
    path: "/",
    key: "/",
    Component: Layout,
    children: [
      { path: "/", key: "/", Component: Index },

      { path: "/data/live", key: "/data/live", Component: DataLive },
      { path: "/data/content", key: "/data/content", Component: DataContent },
      { path: "/data/multiple", key: "/data/multiple", Component: DataMultiple },

      { path: "/order/edit", key: "/order/edit", Component: OrderEdit },
      { path: "/order/list", key: "/order/list", Component: OrederList },

      { path: "/spu/edit", key: "/spu/edit", Component: SpuEdit },
      { path: "/spu/list", key: "/spu/list", Component: SpuList },
      { path: "/spu/detail", key: "/spu/detail", Component: SpuDetail },

      { path: "/user/list", key: "/user/list", Component: UserList },
      { path: "/user/createuser", key: "/user/createuser", Component: UserCreateUser },
      { path: "/user/auth", key: "/user/auth", Component: UserAuth },

      { path: "/aboutus", key: "/aboutus", Component: Aboutus },
      { path: "/problem", key: "/problem", Component: Problem },
      { path: "/map", key: "/map", Component: GlodMap },
      { path: "/like", key: "/like", Component: Like },
    ],
  },
  //
  {
    path: "/datascreen",
    Component: DataScreen,
  },
  {
    path: "/login",
    Component: Login,
  },
  {
    path: "/signup",
    Component: Signup,
  },
  //404路由
  {
    path: "*",
    name: "No Match",
    key: "*",
    Component: Page404,
  },
];

export const useAppRoutes = () => {
  return useRoutes(routes);
};
