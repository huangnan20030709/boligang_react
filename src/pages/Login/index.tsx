import { memo, Suspense } from "react";

import Loading from "@/components/Loading";
import { Wrapper } from "./style";

import Banner from "./components/Banner";
import LoginForm from "./components/LoginForm";
import ThemeAndLocal from "@/components/ThemeAndLocal";

export default memo(function Login() {
  return (
    <Suspense fallback={<Loading />}>
      <Wrapper>
        <Banner></Banner>
        <LoginForm></LoginForm>
        {/*  */}
        {/*  */}
        {/*  */}
        <ThemeAndLocal></ThemeAndLocal>
      </Wrapper>
    </Suspense>
  );
});
