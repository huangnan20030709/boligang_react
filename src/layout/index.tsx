import { memo, Suspense } from "react";
import { Outlet } from "react-router-dom";

import Header from "@/components/Header";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

import { AppContentWrapper } from "./style";
import Loading from "@/components/Loading";

export default memo(function Layout(a) {
  return (
    <>
      <Header></Header>
      <Slider></Slider>

      <AppContentWrapper>
        <Suspense fallback={<Loading />}>
          <Outlet />
        </Suspense>
        <Footer></Footer>
      </AppContentWrapper>
    </>
  );
});
